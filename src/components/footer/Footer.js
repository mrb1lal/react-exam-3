import { FiArrowRight } from "react-icons/fi";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-icon"></span>
            <h2>CLICON</h2>
          </div>
          <div className="footer-support">
            <span>Customer Supports:</span>
            <a href="tel:6295550129" className="support-phone">(629) 555-0129</a>
          </div>
          <p className="footer-address">
            4517 Washington Ave.<br />
            Manchester, Kentucky 39495
          </p>
          <a href="mailto:info@kinbo.com" className="footer-email">info@kinbo.com</a>
        </div>

        <div className="footer-col">
          <h3>TOP CATEGORY</h3>
          <ul>
            <li><a href="#">Computer & Laptop</a></li>
            <li><a href="#">SmartPhone</a></li>
            <li><a href="#">Headphone</a></li>
            <li className="active-link"><a href="#">Accessories</a></li>
            <li><a href="#">Camera & Photo</a></li>
            <li><a href="#">TV & Homes</a></li>
          </ul>
          <a href="#" className="browse-link">
            Browse All Product <FiArrowRight />
          </a>
        </div>

        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Shop Product</a></li>
            <li><a href="#">Shoping Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Compare</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Customer Help</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>DOWNLOAD APP</h3>
          <div className="app-btn">
            <FaGooglePlay className="app-icon" />
            <div className="app-text">
              <span>Get it now</span>
              <strong>Google Play</strong>
            </div>
          </div>
          <div className="app-btn">
            <FaApple className="app-icon" />
            <div className="app-text">
              <span>Get it now</span>
              <strong>App Store</strong>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h3>POPULAR TAG</h3>
          <div className="tags-wrap">
            <span className="tag-item">Game</span>
            <span className="tag-item">iPhone</span>
            <span className="tag-item">TV</span>
            <span className="tag-item">Asus Laptops</span>
            <span className="tag-item">Macbook</span>
            <span className="tag-item">SSD</span>
            <span className="tag-item active-tag">Graphics Card</span>
            <span className="tag-item">Power Bank</span>
            <span className="tag-item">Smart TV</span>
            <span className="tag-item">Speaker</span>
            <span className="tag-item">Tablet</span>
            <span className="tag-item">Microwave</span>
            <span className="tag-item">Samsung</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </footer>
  );
}