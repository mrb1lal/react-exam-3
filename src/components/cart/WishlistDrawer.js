"use client";

import { FiX, FiTrash2, FiShoppingCart, FiHeart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import "./WishlistDrawer.css";

export default function WishlistDrawer() {
  const {
    wishlistItems,
    isWishlistOpen,
    setIsWishlistOpen,
    removeFromWishlist,
    addToCart,
    cartItems,
  } = useCart();

  if (!isWishlistOpen) return null;

  const isInCart = (productId) => cartItems.some((item) => item.id === productId);

  return (
    <>
      <div className="wishlist-overlay" />
      <aside className="wishlist-drawer">
        <div className="wishlist-header">
          <h2>
            <FiHeart className="wishlist-icon" />
            Wishlist
          </h2>
          <button className="wishlist-close-btn" onClick={() => setIsWishlistOpen(false)}>
            <FiX />
          </button>
        </div>

        <div className="wishlist-content">
          {wishlistItems.length === 0 ? (
            <div className="wishlist-empty">
              <p>Wishlist bo'sh</p>
            </div>
          ) : (
            <ul className="wishlist-items">
              {wishlistItems.map((item) => (
                <li key={item.id} className="wishlist-item">
                  <span className="item-title">{item.title}</span>
                  <div className="wishlist-item-actions">
                    <button
                      className={`add-to-cart-btn ${isInCart(item.id) ? "in-cart" : ""}`}
                      onClick={() => addToCart(item)}
                      disabled={isInCart(item.id)}
                      aria-label={isInCart(item.id) ? "Savatda" : "Savatga qo'shish"}
                    >
                      <FiShoppingCart />
                      <span>{isInCart(item.id) ? "Savatda" : "Savatga"}</span>
                    </button>
                    <button
                      className="remove-wishlist-btn"
                      onClick={() => removeFromWishlist(item.id)}
                      aria-label="Wishlistdan o'chirish"
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