"use client";

import { FiX, FiTrash2, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import "./CartDrawer.css";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    addToWishlist,
    isInWishlist,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" />
      <aside className="cart-drawer">
        <div className="cart-header">
          <h2>
            <FiShoppingCart className="cart-icon" />
            Savat
          </h2>
          <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>
            <FiX />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Savat bo'sh</p>
            </div>
          ) : (
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <span className="item-title">{item.title}</span>
                  <div className="cart-item-actions">
                    <button
                      className={`wishlist-btn ${isInWishlist(item.id) ? "active" : ""}`}
                      onClick={() => addToWishlist(item)}
                      aria-label={isInWishlist(item.id) ? "Wishlistdan o'chirish" : "Wishlistga qo'shish"}
                    >
                      <FiHeart className={isInWishlist(item.id) ? "filled" : ""} />
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Savatdan o'chirish"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
}