"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  FiHeart,
  FiShoppingCart,
  FiArrowRight,
} from "react-icons/fi";

import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const products = [
    { id: 1, title: "TOZO T6 True Wireless Earbuds", img: "https://images.unsplash.com/photo-1740721455292-e5cd29544381?auto=format&fit=crop&w=500&q=80" },
    { id: 2, title: "Samsung Galaxy S21 5G", img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=500&q=80" },
    { id: 3, title: "Amazon Basics High-Speed HDMI Cable", img: "https://images.unsplash.com/photo-1669503031190-c46544f68b57?auto=format&fit=crop&w=500&q=80" },
    { id: 4, title: "Black Wireless Headphones", img: "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?auto=format&fit=crop&w=500&q=80" },
    { id: 5, title: "Gaming Drone", img: "https://images.unsplash.com/photo-1669503031190-c46544f68b57?auto=format&fit=crop&w=500&q=80" },
    { id: 6, title: "Polaroid 57-Inch Photo/Video Tripod", img: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=500&q=80" },
    { id: 7, title: "Dell Optiplex 7000x7480 All-in-One", img: "https://images.unsplash.com/photo-1483913433113-0606d63c02d4?auto=format&fit=crop&w=500&q=80" },
    { id: 8, title: "4K UHD LED Smart TV", img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=500&q=80" },
  ];

  return (
    <section className="featured-products">
      <div className="featured-container">

        <div className="featured-sale">

          <span className="sale-category">
            COMPUTER & ACCESSORIES
          </span>

          <h2>32% Discount</h2>

          <p>For all electronics products</p>

          <div className="sale-ending">
            <span>Offers ends in:</span>
            <strong>ENDS OF CHRISTMAS</strong>
          </div>

          <button className="sale-button">
            SHOP NOW
            <FiArrowRight />
          </button>

          <div className="sale-image">
            <Image
              src="https://images.unsplash.com/photo-1483913433113-0606d63c02d4?auto=format&fit=crop&w=800&q=80"
              alt="Computer setup"
              fill
            />
          </div>

        </div>

        <div className="featured-right">

          <div className="featured-top">

            <h2>Featured Products</h2>

            <div className="featured-tabs">
              <button className="active">All Product</button>
              <button>Smart Phone</button>
              <button>Laptop</button>
              <button>Headphone</button>
              <button>TV</button>
            </div>

            <button className="browse-product">
              Browse All Product
              <FiArrowRight />
            </button>

          </div>

          <div className="featured-grid">

            {products.map((item) => (
              <div key={item.id} className="featured-card">
                <div className="featured-product-image">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                  />
                  <div className="card-actions">
                    <button
                      className={`action-icon-btn ${isInWishlist(item.id) ? "active" : ""}`}
                      onClick={() => addToWishlist(item)}
                      aria-label={isInWishlist(item.id) ? "Wishlistdan o'chirish" : "Wishlistga qo'shish"}
                    >
                      <FiHeart className={isInWishlist(item.id) ? "filled" : ""} />
                    </button>
                    <button
                      className="action-icon-btn"
                      onClick={() => addToCart(item)}
                      aria-label="Savatga qo'shish"
                    >
                      <FiShoppingCart />
                    </button>
                  </div>
                </div>

                <h3>{item.title}</h3>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}