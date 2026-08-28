import Image from "next/image";
import './Banner.css';
import { FaArrowRight } from 'react-icons/fa';
import { FiPackage, FiAward, FiCreditCard, FiHeadphones } from 'react-icons/fi';

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-grid">
        <div className="main-banner">
          <div className="main-content">
            <span className="subtitle">
              <span className="line"></span> THE BEST PLACE TO PLAY
            </span>
            <h2>Xbox Consoles</h2>
            <p>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for ₹2 USD.</p>
            <button className="shop-btn-orange">
              SHOP NOW <FaArrowRight />
            </button>
          </div>
          <div className="main-image-wrapper">
            <Image src="/xbox.png" alt="Xbox" width={300} height={300} className="xbox-img" />
            <div className="price-badge-circle">
              ₹299
            </div>
          </div>
          <div className="pagination">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="side-banners">
          <div className="top-side-banner">
            <div className="top-side-content">
              <span className="summer-sale">SUMMER SALES</span>
              <h3>New Google Pixel 6 Pro</h3>
              <button className="shop-btn-orange">
                SHOP NOW <FaArrowRight />
              </button>
            </div>
            <div className="top-side-image">
              <span className="discount-badge">29% OFF</span>
              <Image src="/pixel.png" alt="Pixel 6 Pro" width={200} height={200} className="pixel-img" />
            </div>
          </div>

          <div className="bottom-side-banner">
            <div className="bottom-side-image">
              <Image src="/Xiaomi.png" alt="Earbuds" width={200} height={200} className="earbuds-img" />
            </div>
            <div className="bottom-side-content">
              <h3>Xiaomi FlipBuds Pro</h3>
              <span className="price-blue">₹299 USD</span>
              <button className="shop-btn-orange">
                SHOP NOW <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="features-strip">
        <div className="feature-item">
          <FiPackage className="feature-icon" />
          <div className="feature-text">
            <h4>FASTED DELIVERY</h4>
            <p>Delivery in 24/H</p>
          </div>
        </div>
        <div className="feature-item">
          <FiAward className="feature-icon" />
          <div className="feature-text">
            <h4>24 HOURS RETURN</h4>
            <p>100% money-back guarantee</p>
          </div>
        </div>
        <div className="feature-item">
          <FiCreditCard className="feature-icon" />
          <div className="feature-text">
            <h4>SECURE PAYMENT</h4>
            <p>Your money is safe</p>
          </div>
        </div>
        <div className="feature-item">
          <FiHeadphones className="feature-icon" />
          <div className="feature-text">
            <h4>SUPPORT 24/7</h4>
            <p>Live contact/message</p>
          </div>
        </div>
      </div>
    </div>
  );
}