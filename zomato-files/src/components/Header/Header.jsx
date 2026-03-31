import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import blackLogo from "../../assets/images/blackLogo.webp";
import { useNavigate } from "react-router-dom";

const Header = ({ cartCount = 0, onCartOpen, user, onLogout, onSearch, searchValue }) => {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Chennai");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className="header">
      <nav>
        <span>Get the App</span>
        <div className="right">
          <span onClick={() => navigate("/add-restaurant")} style={{ cursor: "pointer" }}>
            Add Restaurant
          </span>
          {user ? (
            <>
              <span style={{ color: "#e23744", fontWeight: 600 }}>Hi, {user.split(" ")[0]}</span>
              <span onClick={onLogout} style={{ cursor: "pointer" }}>Log out</span>
            </>
          ) : (
            <>
              <span onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>Log in</span>
              <span onClick={() => navigate("/signup")} style={{ cursor: "pointer" }}>Sign up</span>
            </>
          )}
          <span
            className="cart-nav-btn"
            onClick={onCartOpen}
            style={{ cursor: "pointer", position: "relative", display: "flex", alignItems: "center", gap: "4px" }}
          >
            <ShoppingCartIcon style={{ fontSize: 20 }} />
            Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </span>
        </div>
      </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>

      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            <span onClick={() => { navigate("/add-restaurant"); setOpen(false); }}>Add Restaurant</span>
            {user ? (
              <>
                <span style={{ color: "#e23744" }}>Hi, {user}</span>
                <span onClick={() => { onLogout(); setOpen(false); }}>Log Out</span>
              </>
            ) : (
              <>
                <span onClick={() => { navigate("/login"); setOpen(false); }}>Log In</span>
                <span onClick={() => { navigate("/signup"); setOpen(false); }}>Sign Up</span>
              </>
            )}
            <span onClick={() => { onCartOpen(); setOpen(false); }}>
              Cart {cartCount > 0 && `(${cartCount})`}
            </span>
          </div>
        </div>
      )}

      <div className="headerContent">
        <img src={Logo} alt="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")} />
        <h3>Discover the best food & drinks in {city}</h3>
        <div className="input">
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="Chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          |
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            value={searchValue || ""}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
