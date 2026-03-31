import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AccContainer from "./components/AccContainer/AccContainer";
import CTA from "./components/CTA/CTA";
import Cities from "./components/Cities/Cities";
import Collection from "./components/Collections/Collection";
import Card from "./components/Card/Card";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import Cart from "./components/Cart/Cart";

import Login from "./Login";
import Signup from "./Signup";
import AddRestaurant from "./AddRestaurant";

import "./app.scss";

// Toast notification
const Toast = ({ message }) =>
  message ? (
    <div style={{
      position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
      background: "#1c1c1c", color: "white", padding: "12px 24px",
      borderRadius: 10, fontSize: 14, fontWeight: 500, zIndex: 9999,
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)", whiteSpace: "nowrap",
      animation: "fadeInUp 0.3s ease",
    }}>
      {message}
    </div>
  ) : null;

// Order success modal
const OrderSuccess = ({ onClose, eta }) => (
  <div style={{
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)",
    zIndex: 4000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
  }}>
    <div style={{
      background: "white", borderRadius: 20, maxWidth: 400, width: "100%",
      padding: 40, textAlign: "center",
    }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#3d9b6d", marginBottom: 8 }}>Order Placed!</h2>
      <p style={{ fontSize: 15, color: "#686b78", marginBottom: 24 }}>
        Your food is being prepared and will arrive in <strong>{eta} minutes</strong>.
      </p>
      <div style={{ textAlign: "left", marginBottom: 24 }}>
        {[
          { label: "Order confirmed", done: true },
          { label: "Restaurant is preparing your food", done: true },
          { label: "Out for delivery", active: true },
          { label: "Arriving soon", done: false },
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, paddingBottom: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                background: step.done ? "#3d9b6d" : "white",
                border: `2px solid ${step.done ? "#3d9b6d" : step.active ? "#e23744" : "#e0e0e0"}`,
                boxShadow: step.active ? "0 0 0 3px rgba(226,55,68,0.2)" : "none",
              }} />
              {i < 3 && <div style={{ width: 2, height: 20, background: step.done ? "#3d9b6d" : "#e0e0e0" }} />}
            </div>
            <span style={{
              fontSize: 14, paddingTop: 1,
              color: step.done ? "#3d9b6d" : step.active ? "#e23744" : "#686b78",
              fontWeight: step.done || step.active ? 600 : 400,
            }}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <button onClick={onClose} style={{
        background: "#3d9b6d", color: "white", border: "none",
        padding: "12px 32px", borderRadius: 10, fontSize: 15,
        fontWeight: 700, cursor: "pointer", fontFamily: "Poppins, sans-serif",
      }}>
        Close
      </button>
    </div>
  </div>
);

function HomePage({ user, onLogout }) {
  const [search, setSearch] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [eta] = useState(Math.floor(Math.random() * 15) + 25);
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterLabel, setFilterLabel] = useState("");
  const restaurantRef = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2800);
  };

  const cartCount = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);

  // Scroll to restaurant list and apply a filter
  const applyFilter = (filter, label) => {
    setActiveFilter(filter);
    setFilterLabel(label);
    setSearch("");
    setTimeout(() => {
      restaurantRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCardClick = (filter, title) => {
    if (filter === "order-online") {
      applyFilter("order-online", "Order Online");
    } else {
      applyFilter(filter, title);
    }
  };

  const handleCollectionClick = (filter, title) => {
    applyFilter(filter, title);
  };

  const handleLocalityClick = (locality) => {
    applyFilter("locality", locality);
  };

  const handleClearFilter = () => {
    setActiveFilter(null);
    setFilterLabel("");
  };

  const handleAddItem = (item, restaurantId) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: { ...item, qty: 1, restaurantId },
    }));
    showToast(`${item.name} added to cart!`);
  };

  const handleChangeQty = (itemId, delta) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (!updated[itemId]) return prev;
      updated[itemId] = { ...updated[itemId], qty: updated[itemId].qty + delta };
      if (updated[itemId].qty <= 0) delete updated[itemId];
      return updated;
    });
  };

  const handlePlaceOrder = () => {
    if (!user) {
      showToast("Please login to place your order");
      setTimeout(() => { window.location.href = "/login"; }, 1500);
      return;
    }
    if (Object.keys(cart).length === 0) {
      showToast("Add items to cart first!");
      return;
    }
    setCart({});
    setCartOpen(false);
    setOrderSuccess(true);
  };

  return (
    <div className="App">
      <Header
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        user={user}
        onLogout={onLogout}
        onSearch={(val) => { setSearch(val); if (val) restaurantRef.current?.scrollIntoView({ behavior: "smooth" }); }}
        searchValue={search}
      />

      <Card onCategorySelect={handleCardClick} />
      <Collection onCollectionSelect={handleCollectionClick} />

      {/* Restaurant Section */}
      <div ref={restaurantRef} style={{ padding: "24px 5% 0" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>
          {search
            ? `Results for "${search}"`
            : activeFilter && filterLabel
            ? filterLabel
            : "Restaurants Near You"}
        </h2>
      </div>

      <RestaurantList
        onSelectRestaurant={setSelectedRestaurant}
        searchQuery={search}
        activeFilter={activeFilter}
        filterLabel={filterLabel}
        onClearFilter={handleClearFilter}
      />

      <Cities onLocalitySelect={handleLocalityClick} />
      <CTA />
      <AccContainer />
      <Footer />

      {/* Restaurant Menu Modal */}
      {selectedRestaurant && (
        <RestaurantMenu
          restaurant={selectedRestaurant}
          cart={cart}
          onAddItem={handleAddItem}
          onChangeQty={handleChangeQty}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}

      {/* Cart Sidebar */}
      <Cart
        cart={cart}
        isOpen={cartOpen}
        onChangeQty={handleChangeQty}
        onClose={() => setCartOpen(false)}
        onPlaceOrder={handlePlaceOrder}
      />

      {/* Order Success */}
      {orderSuccess && <OrderSuccess eta={eta} onClose={() => setOrderSuccess(false)} />}

      {/* Toast */}
      <Toast message={toast} />
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage user={user} onLogout={() => setUser(null)} />} />
        <Route path="/login" element={<Login onLogin={(name) => setUser(name)} />} />
        <Route path="/signup" element={<Signup onLogin={(name) => setUser(name)} />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
