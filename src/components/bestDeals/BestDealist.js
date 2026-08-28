import Image from "next/image";
import './BestDealist.css';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';

export default function BestDeals() {
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
        <div className="card-large">
          <div className="badge-container">
            <span className="badge-yellow">32% OFF</span>
            <span className="badge-red">HOT</span>
          </div>
          <div className="large-img-box">
            <Image src="/ps5.png" alt="Console" width={400} height={300} className="product-img" />
          </div>
          <div className="large-info">
            <div className="rating-box">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <span className="review-count">(52,677)</span>
            </div>
            <h3 className="large-title">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...
            </h3>
            <div className="price-box">
              <span className="old-price">₹865.99</span>
              <span className="new-price">₹442.12</span>
            </div>
            <p className="large-desc">
              Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.
            </p>
            <div className="action-buttons">
              <button className="icon-btn">
                <FiHeart />
              </button>
              <button className="add-cart-btn">
                <FiShoppingCart /> ADD TO CART
              </button>
              <button className="icon-btn">
                <FiEye />
              </button>
            </div>
          </div>
        </div>

        <div className="card-small">
          <div className="badge-container">
            <span className="badge-grey">SOLD OUT</span>
          </div>
          <div className="small-img-box">
            <Image src="/drone1.png" alt="Drone" width={200} height={200} className="product-img" />
          </div>
          <div className="small-info">
            <h3 className="small-title">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h3>
            <div className="price-box">
              <span className="new-price">₹2,300</span>
            </div>
          </div>
        </div>

        <div className="card-small">
          <div className="small-img-box">
            <Image src="/phone1.png" alt="Smartphone" width={200} height={200} className="product-img" />
          </div>
          <div className="small-info">
            <h3 className="small-title">Simple Mobile 4G LTE Prepaid Smartphone</h3>
            <div className="price-box">
              <span className="new-price">₹220</span>
            </div>
          </div>
        </div>

        <div className="card-small">
          <div className="badge-container">
            <span className="badge-yellow">19% OFF</span>
          </div>
          <div className="small-img-box">
            <Image src="/controller.png" alt="Controller" width={200} height={200} className="product-img" />
          </div>
          <div className="small-info">
            <h3 className="small-title">4K UHD LED Smart TV with Chromecast Built-in</h3>
            <div className="price-box">
              <span className="old-price">₹865</span>
              <span className="new-price">₹150</span>
            </div>
          </div>
        </div>

        <div className="card-small active-hover">
          <div className="small-img-box grey-bg">
            <Image src="/Overly.png" alt="Headphones" width={200} height={200} className="product-img" />
            <div className="hover-actions">
              <button className="circle-btn orange-btn"><FiHeart /></button>
              <button className="circle-btn"><FiShoppingCart /></button>
              <button className="circle-btn"><FiEye /></button>
            </div>
          </div>
          <div className="small-info">
            <h3 className="small-title">Sony DSCHX8 High Zoom Point & Shoot Camera</h3>
            <div className="price-box">
              <span className="new-price">₹1,200</span>
            </div>
          </div>
        </div>

        <div className="card-small">
          <div className="small-img-box">
            <Image src="/phone2.png" alt="Smartphone" width={200} height={200} className="product-img" />
          </div>
          <div className="small-info">
            <h3 className="small-title">Dell Optiplex 7000x7480 All-in-One Computer Monitor</h3>
            <div className="price-box">
              <span className="new-price">₹299</span>
            </div>
          </div>
        </div>

        <div className="card-small">
          <div className="small-img-box">
            <Image src="/drone2.png" alt="Drone" width={200} height={200} className="product-img" />
          </div>
          <div className="small-info">
            <h3 className="small-title">Portable Wshing Machine, 11lbs capacity Model 18NMFIAM</h3>
            <div className="price-box">
              <span className="old-price">₹865.99</span>
              <span className="new-price">₹70</span>
            </div>
          </div>
        </div>

        <div className="card-small">
          <div className="badge-container">
            <span className="badge-red">HOT</span>
          </div>
          <div className="small-img-box">
            <Image src="/monitor.png" alt="Monitor" width={200} height={200} className="product-img" />
          </div>
          <div className="small-info">
            <h3 className="small-title">2 Barrel Carburetor Carb 2100 Engine Increase Horsepower</h3>
            <div className="price-box">
              <span className="new-price">₹160</span>
            </div>
          </div>
        </div>

        <div className="card-small">
          <div className="badge-container">
            <span className="badge-yellow">32% OFF</span>
          </div>
          <div className="small-img-box">
            <Image src="/camera.png" alt="Camera" width={200} height={200} className="product-img" />
          </div>
          <div className="small-info">
            <h3 className="small-title">JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black</h3>
            <div className="price-box">
              <span className="old-price">₹360</span>
              <span className="new-price">₹250</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}