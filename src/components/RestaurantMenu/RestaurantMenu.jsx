import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./RestaurantMenu.scss";

const RestaurantMenu = ({ restaurant, cart, onAddItem, onChangeQty, onClose }) => {
  if (!restaurant) return null;

  const getItemQty = (itemId) => {
    return cart[itemId] ? cart[itemId].qty : 0;
  };

  return (
    <div className="menu-overlay" onClick={(e) => e.target.classList.contains("menu-overlay") && onClose()}>
      <div className="menu-modal">
        {/* Header */}
        <div className="menu-header">
          <button className="close-btn" onClick={onClose}>
            <CloseIcon />
          </button>
          <div className="restaurant-info">
            <h2>{restaurant.name}</h2>
            <p>
              ★ {restaurant.rating} &nbsp;•&nbsp; {restaurant.delivery} mins &nbsp;•&nbsp; {restaurant.cuisine}
            </p>
          </div>
        </div>

        {/* Menu Body */}
        <div className="menu-body">
          {Object.entries(restaurant.menu).map(([category, items]) => (
            <div key={category} className="menu-category">
              <h3 className="category-title">{category}</h3>
              {items.map((item) => {
                const qty = getItemQty(item.id);
                return (
                  <div className="menu-item" key={item.id}>
                    <div className="item-info">
                      <div className="item-name">
                        <span className={`veg-dot ${item.veg ? "veg" : "non-veg"}`}></span>
                        {item.name}
                      </div>
                      <div className="item-desc">{item.desc}</div>
                      <div className="item-price">₹{item.price}</div>
                    </div>
                    <div className="item-action">
                      {qty === 0 ? (
                        <button
                          className="add-btn"
                          onClick={() => onAddItem(item, restaurant.id)}
                        >
                          ADD
                        </button>
                      ) : (
                        <div className="qty-control">
                          <button onClick={() => onChangeQty(item.id, -1)}>
                            <RemoveIcon style={{ fontSize: 16 }} />
                          </button>
                          <span>{qty}</span>
                          <button onClick={() => onChangeQty(item.id, 1)}>
                            <AddIcon style={{ fontSize: 16 }} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
