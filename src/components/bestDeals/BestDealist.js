"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import './BestDealist.css';
import { FaArrowRight } from 'react-icons/fa';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

export default function BestDeals() {
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const products = [
    { id: 1, title: "Xbox Series S - 512GB SSD Console", img: "/ps5.png" },
    { id: 2, title: "Bose Sport Earbuds - Wireless Earphones", img: "/drone1.png" },
    { id: 3, title: "Simple Mobile 4G LTE Prepaid Smartphone", img: "/phone1.png" },
    { id: 4, title: "4K UHD LED Smart TV with Chromecast Built-in", img: "/controller.png" },
    { id: 5, title: "Sony DSCHX8 High Zoom Point & Shoot Camera", img: "/Overly.png" },
    { id: 6, title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", img: "/phone2.png" },
    { id: 7, title: "Portable Washing Machine, 11lbs capacity", img: "/drone2.png" },
    { id: 8, title: "2 Barrel Carburetor Carb 2100 Engine", img: "/monitor.png" },
    { id: 9, title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker", img: "/camera.png" },
  ];

  return (
    <div className="best-deals-wrapper">
      <div className="deals-header">
        <div className="deals-header-left">
          <h2>Best Deals</h2>
          <div className="timer-box">
            16d : 21h : 57m : 23s
          </div>
        </div>
        <a href="#" className="browse-link">
          Browse All Product <FaArrowRight />
        </a>
      </div>

      <div className="deals-grid-container">
        {products.map((item, index) => (
          <div key={item.id} className={index === 0 ? "card-large" : "card-small"}>
            <div className={index === 0 ? "large-img-box" : "small-img-box"}>
              <Image src={item.img} alt={item.title} width={index === 0 ? 400 : 200} height={index === 0 ? 300 : 200} className="product-img" />
              <div className="card-actions">
                <button
                  className={`action-btn wishlist-btn ${isInWishlist(item.id) ? "active" : ""}`}
                  onClick={() => addToWishlist(item)}
                  aria-label={isInWishlist(item.id) ? "Wishlistdan o'chirish" : "Wishlistga qo'shish"}
                >
                  <FiHeart className={isInWishlist(item.id) ? "filled" : ""} />
                </button>
                <button
                  className="action-btn cart-btn"
                  onClick={() => addToCart(item)}
                  aria-label="Savatga qo'shish"
                >
                  <FiShoppingCart />
                </button>
              </div>
            </div>
            <h3 className={index === 0 ? "large-title" : "small-title"}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}