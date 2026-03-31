import React, { useState, useMemo } from "react";
import { restaurants } from "../../data";
import "./RestaurantList.scss";

const CATEGORIES = ["All", "Pizza", "Biryani", "Burger", "Chinese", "South Indian", "Desserts", "Healthy"];

const RestaurantList = ({ onSelectRestaurant, searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [vegOnly, setVegOnly] = useState(false);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const filtered = useMemo(() => {
    let list = [...restaurants];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.cuisine.toLowerCase().includes(q) ||
          r.category.some((c) => c.toLowerCase().includes(q)) ||
          Object.values(r.menu)
            .flat()
            .some((item) => item.name.toLowerCase().includes(q))
      );
    }

    if (activeCategory !== "All") list = list.filter((r) => r.category.includes(activeCategory));
    if (vegOnly) list = list.filter((r) => r.veg);
    if (fastDelivery) list = list.filter((r) => r.delivery <= 25);
    if (topRated) list = list.filter((r) => r.rating >= 4.4);

    if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "delivery") list.sort((a, b) => a.delivery - b.delivery);
    else if (sortBy === "cost_asc") list.sort((a, b) => a.cost - b.cost);
    else if (sortBy === "cost_desc") list.sort((a, b) => b.cost - a.cost);

    return list;
  }, [searchQuery, activeCategory, vegOnly, fastDelivery, topRated, sortBy]);

  return (
    <div className="restaurant-list">
      {/* Category Pills */}
      <div className="categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`cat-pill ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="filter-row">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort by</option>
          <option value="rating">Rating</option>
          <option value="delivery">Delivery Time</option>
          <option value="cost_asc">Cost: Low to High</option>
          <option value="cost_desc">Cost: High to Low</option>
        </select>
        <button className={`filter-tag ${vegOnly ? "active" : ""}`} onClick={() => setVegOnly(!vegOnly)}>
          🟢 Pure Veg
        </button>
        <button className={`filter-tag ${fastDelivery ? "active" : ""}`} onClick={() => setFastDelivery(!fastDelivery)}>
          ⚡ Fast Delivery
        </button>
        <button className={`filter-tag ${topRated ? "active" : ""}`} onClick={() => setTopRated(!topRated)}>
          ⭐ Top Rated
        </button>
      </div>

      {/* Restaurant Grid */}
      {filtered.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">🍽️</div>
          <h3>No restaurants found</h3>
          <p>Try a different search or filter</p>
        </div>
      ) : (
        <div className="restaurant-grid">
          {filtered.map((r) => (
            <div className="restaurant-card" key={r.id} onClick={() => onSelectRestaurant(r)}>
              <div className="card-img" style={{ background: r.bg }}>
                <span className="card-emoji">{r.emoji}</span>
                {r.badge && <div className="card-badge">{r.badge}</div>}
                {r.discount && <div className="discount-badge">{r.discount}</div>}
              </div>
              <div className="card-body">
                <div className="card-name">{r.name}</div>
                <div className="card-cuisine">{r.cuisine}</div>
                <div className="card-meta">
                  <span className="rating">★ {r.rating} ({r.reviews})</span>
                  <span className="delivery-time">⏱ {r.delivery} mins</span>
                  <span className="cost">₹{r.cost} for two</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
