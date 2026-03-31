import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Cart.scss";

const Cart = ({ cart, onChangeQty, onClose, onPlaceOrder, isOpen }) => {
  const cartItems = Object.values(cart);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = 30;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;

  return (
    <div className={`cart-panel ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <ShoppingCartIcon style={{ fontSize: 48, color: "#ccc" }} />
            <h4>Your cart is empty</h4>
            <p>Add items from a restaurant to get started</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-name">{item.name}</div>
              <div className="item-controls">
                <div className="qty-control">
                  <button onClick={() => onChangeQty(item.id, -1)}>
                    <RemoveIcon style={{ fontSize: 14 }} />
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => onChangeQty(item.id, 1)}>
                    <AddIcon style={{ fontSize: 14 }} />
                  </button>
                </div>
                <span className="item-price">₹{item.price * item.qty}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="total-row">
            <span>Item Total</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="total-row">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>
          <div className="total-row">
            <span>Taxes & Charges (5%)</span>
            <span>₹{tax}</span>
          </div>
          <div className="total-row grand">
            <span>Grand Total</span>
            <span>₹{total}</span>
          </div>
          <button className="checkout-btn" onClick={onPlaceOrder}>
            Place Order →
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
