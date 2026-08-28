import { FiArrowRight } from "react-icons/fi";
import "./Flashsales.css";

export default function FlashSales() {
  return (
    <section className="fs-section">
      <div className="fs-banner">
        <div className="fs-banner-content">
          <span className="fs-badge">SAVE UP TO ₹200.00</span>
          <h1 className="fs-title">Macbook Pro</h1>
          <p className="fs-desc">
            Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
          </p>
          <button className="fs-btn">
            SHOP NOW <FiArrowRight />
          </button>
        </div>
        <div className="fs-banner-visual">
          <div className="fs-price-circle">₹1999</div>
          <img src="/macbook.png" alt="Macbook Pro" className="fs-main-img" />
        </div>
      </div>

      <div className="fs-grid">
        
        <div className="fs-col">
          <h3 className="fs-col-title">FLASH SALE TODAY</h3>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/webcam.png" alt="Bose Sport Earbuds" />
            </div>
            <div className="fs-card-info">
              <h4>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/phone1.png" alt="Smartphone" />
            </div>
            <div className="fs-card-info">
              <h4>Simple Mobile 4G LTE Prepaid Smartphone</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/keyboard.png" alt="Keyboard" />
            </div>
            <div className="fs-card-info">
              <h4>4K UHD LED Smart TV with Chromecast Built-in</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
        </div>

        <div className="fs-col">
          <h3 className="fs-col-title">BEST SELLERS</h3>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/ps5.png" alt="PS5" />
            </div>
            <div className="fs-card-info">
              <h4>Samsung Electronics Samsung Galaxy S21 5G</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/camera1.png" alt="Camera" />
            </div>
            <div className="fs-card-info">
              <h4>Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/phone2.png" alt="Phone" />
            </div>
            <div className="fs-card-info">
              <h4>Sony DSCHX8 High Zoom Point & Shoot Camera</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
        </div>

        <div className="fs-col">
          <h3 className="fs-col-title">TOP RATED</h3>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/tv.png" alt="TV" />
            </div>
            <div className="fs-card-info">
              <h4>Portable Wshing Machine, 11lbs capacity Model 18NMF...</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/drone.png" alt="Drone" />
            </div>
            <div className="fs-card-info">
              <h4>Sony DSCHX8 High Zoom Point & Shoot Camera</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/speaker.png" alt="Speaker" />
            </div>
            <div className="fs-card-info">
              <h4>Dell Optiplex 7000x7480 All-in-One Computer Monitor</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
        </div>

        <div className="fs-col">
          <h3 className="fs-col-title">NEW ARRIVAL</h3>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/earbuds.png" alt="Earbuds" />
            </div>
            <div className="fs-card-info">
              <h4>TOZO T6 True Wireless Earbuds Bluetooth Headpho...</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/printer.png" alt="Printer" />
            </div>
            <div className="fs-card-info">
              <h4>JBL FLIP 4 -Waterproof Portable Bluetooth Speaker...</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
          
          <div className="fs-card">
            <div className="fs-card-img">
              <img src="/gamepad.png" alt="Gamepad" />
            </div>
            <div className="fs-card-info">
              <h4>Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...</h4>
              <span className="fs-price">₹1,500</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}