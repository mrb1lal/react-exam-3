"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { FiArrowRight, FiHeart, FiShoppingCart } from "react-icons/fi";
import "./ComputerAccessories.css";

export default function ComputerAccessories() {
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const products = [
    { id: 1, title: "Amazon Basics High-Speed HDMI Cable", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80" },
    { id: 2, title: "Portable Washing Machine, 11lbs capacity", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80" },
    { id: 3, title: "TOZO T6 True Wireless Earbuds", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=300&q=80" },
    { id: 4, title: "Dell Optiplex 7000x7480 All-in-One Monitor", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=300&q=80" },
    { id: 5, title: "Samsung Galaxy S21 5G", img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=300&q=80" },
    { id: 6, title: "4K UHD LED Smart TV", img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=300&q=80" },
    { id: 7, title: "Wired Over-Ear Gaming Headphones", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=300&q=80" },
    { id: 8, title: "Polaroid 57-Inch Photo/Video Tripod", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=300&q=80" },
  ];

  return (
    <section className="ca-section">
      <div className="ca-top-header">
        <h2>Computer Accessories</h2>
        <div className="ca-nav">
          <button className="ca-nav-btn active">All Product</button>
          <button className="ca-nav-btn">Keyboard & Mouse</button>
          <button className="ca-nav-btn">Headphone</button>
          <button className="ca-nav-btn">Webcam</button>
          <button className="ca-nav-btn">Printer</button>
        </div>
        <a href="#" className="ca-browse">
          Browse All Product <FiArrowRight />
        </a>
      </div>

      <div className="ca-main-content">
        <div className="ca-grid">
          {products.map((item) => (
            <div key={item.id} className="ca-card">
              <div className="ca-img-box">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="300px"
                />
                <div className="ca-card-actions">
                  <button
                    className={`ca-action-btn ${isInWishlist(item.id) ? "active" : ""}`}
                    onClick={() => addToWishlist(item)}
                    aria-label={isInWishlist(item.id) ? "Wishlistdan o'chirish" : "Wishlistga qo'shish"}
                  >
                    <FiHeart className={isInWishlist(item.id) ? "filled" : ""} />
                  </button>
                  <button
                    className="ca-action-btn"
                    onClick={() => addToCart(item)}
                    aria-label="Savatga qo'shish"
                  >
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
              <h3 className="ca-title">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="ca-sidebar">
          <div className="ca-promo yellow-promo">
            <div className="ca-promo-img">
              <Image
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&q=80"
                alt="Xiaomi Earbuds"
                fill
                sizes="200px"
              />
            </div>
            <h3>Xiaomi True Wireless Earbuds</h3>
            <p>
              Escape the noise, It s time to hear the magic with Xiaomi Earbuds.
            </p>
            <div className="ca-promo-price">
              Only for: <strong>₹299 USD</strong>
            </div>
            <button className="ca-btn">
              SHOP NOW <FiArrowRight />
            </button>
          </div>

          <div className="ca-promo blue-promo">
            <span className="ca-summer-tag">SUMMER SALES</span>
            <h3>37% DISCOUNT</h3>
            <p>
              only for <span>SmartPhone</span> product.
            </p>
            <button className="ca-btn ca-btn-blue">
              SHOP NOW <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}