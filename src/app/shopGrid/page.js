"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { FiChevronLeft, FiGrid, FiList, FiChevronDown, FiShoppingCart, FiHeart } from "react-icons/fi";
import "./ShopGrid.css";

export default function ShopGrid() {
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const brands = [
    { name: "Nike", checked: false },
    { name: "Rebook", checked: false },
    { name: "Zara", checked: true },
    { name: "Gearo", checked: false },
    { name: "Indi", checked: false },
    { name: "Aei", checked: false },
    { name: "Lulu", checked: false },
    { name: "Beast", checked: false },
  ];

  const products = [
    { id: 1, title: "ZARA Suit Blazer Midnight Black Cotton", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80" },
    { id: 2, title: "ZARA Black Sunglasses Anti Dust Resistant", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80" },
    { id: 3, title: "Black Leather Boots Glossy Finishing Travel", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80" },
    { id: 4, title: "ZARA Wool Blend Coat Winter Collection", img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=400&q=80" },
    { id: 5, title: "Slim Fit Chino Trousers Beige Casual", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80" },
    { id: 6, title: "Grey Tweed Blazer Office Professional", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80" },
    { id: 7, title: "Premium Leather Jacket Biker Style", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80" },
    { id: 8, title: "Dark Wash Skinny Jeans Stretch Fit", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80" },
    { id: 9, title: "White Oxford Shirt Classic Fit", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="shop-page-section">
      <div className="shop-page-container">
        
        <div className="shop-top-bar">
          <div className="shop-top-left">
            <Link href="/" className="back-circle-btn">
              <FiChevronLeft />
            </Link>
            <h2 className="shop-title">ZARA</h2>
            <div className="view-mode-icons">
              <FiGrid className="view-icon active" />
              <FiList className="view-icon" />
            </div>
            <span className="shop-items-count">Showing 1 - 40 of 145 items</span>
          </div>

          <div className="shop-top-right">
            <div className="filter-group">
              <span className="filter-label">To Show:</span>
              <div className="filter-dropdown-box">
                <span>9</span>
                <FiChevronDown />
              </div>
            </div>
            <div className="filter-group position-group">
              <span className="filter-input-text">Position</span>
              <FiChevronDown />
            </div>
          </div>
        </div>

        <div className="shop-content-layout">
          
          <aside className="shop-sidebar">
            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Size</h3>
                <FiChevronDown className="filter-arrow" />
              </div>
            </div>

            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Brand</h3>
                <FiChevronDown className="filter-arrow rotate" />
              </div>
              <div className="brand-list">
                {brands.map((b, index) => (
                  <label key={index} className="checkbox-label">
                    <input type="checkbox" defaultChecked={b.checked} />
                    <span className={`checkbox-text ${b.checked ? "checked-text" : ""}`}>{b.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Price Range</h3>
                <FiChevronDown className="filter-arrow" />
              </div>
            </div>

            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Discount</h3>
                <FiChevronDown className="filter-arrow" />
              </div>
            </div>

            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Availability</h3>
                <FiChevronDown className="filter-arrow" />
              </div>
            </div>
          </aside>

          <main className="shop-grid-area">
            {products.map((item) => (
              <div className="shop-card" key={item.id}>
                <div className="shop-card-img-box">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="shop-card-actions">
                    <button
                      className={`action-btn wishlist-btn ${isInWishlist(item.id) ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        addToWishlist(item);
                      }}
                      aria-label={isInWishlist(item.id) ? "Wishlistdan o'chirish" : "Wishlistga qo'shish"}
                    >
                      <FiHeart className={isInWishlist(item.id) ? "filled" : ""} />
                    </button>
                    <button
                      className="action-btn cart-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                      aria-label="Savatga qo'shish"
                    >
                      <FiShoppingCart />
                    </button>
                  </div>
                </div>

                <h4 className="shop-card-title">{item.title}</h4>
              </div>
            ))}
          </main>

        </div>

      </div>
    </div>
  );
}