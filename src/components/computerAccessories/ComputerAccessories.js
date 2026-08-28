import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import "./ComputerAccessories.css";

export default function ComputerAccessories() {
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
          <div className="ca-card">
            <span className="ca-badge blue-bg">BEST DEALS</span>
            <div className="ca-img-box">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
                alt="Headphones"
                fill
                sizes="300px"
              />
            </div>
            <div className="ca-stars">
              ★★★★★ <span>(994)</span>
            </div>
            <h3 className="ca-title">
              Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...
            </h3>
            <span className="ca-price">₹360</span>
          </div>

          <div className="ca-card">
            <div className="ca-img-box">
              <Image
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80"
                alt="Headphones"
                fill
                sizes="300px"
              />
            </div>
            <div className="ca-stars">
              ★★★★★ <span>(798)</span>
            </div>
            <h3 className="ca-title">
              Portable Wshing Machine, 11lbs capacity Model 18NMF...
            </h3>
            <span className="ca-price">₹80</span>
          </div>

          <div className="ca-card">
            <span className="ca-badge red-bg">HOT</span>
            <div className="ca-img-box">
              <Image
                src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=300&q=80"
                alt="Keyboard and Mouse"
                fill
                sizes="300px"
              />
            </div>
            <div className="ca-stars">
              ★★★★★ <span>(600)</span>
            </div>
            <h3 className="ca-title">
              TOZO T6 True Wireless Earbuds Bluetooth Headphon...
            </h3>
            <span className="ca-price">₹70</span>
          </div>

          <div className="ca-card">
            <div className="ca-img-box">
              <Image
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=300&q=80"
                alt="Printer"
                fill
                sizes="300px"
              />
            </div>
            <div className="ca-stars">
              ★★★★★ <span>(492)</span>
            </div>
            <h3 className="ca-title">
              Dell Optiplex 7000x7480 All-in-One Computer Monitor
            </h3>
            <span className="ca-price">₹250</span>
          </div>

          <div className="ca-card">
            <div className="ca-img-box">
              <Image
                src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=300&q=80"
                alt="Webcam"
                fill
                sizes="300px"
              />
            </div>
            <div className="ca-stars">
              ★★★★☆ <span>(740)</span>
            </div>
            <h3 className="ca-title">
              Samsung Electronics Samsung Galaxy S21 5G
            </h3>
            <span className="ca-price">₹2,300</span>
          </div>

          <div className="ca-card">
            <span className="ca-badge green-bg">SALE</span>
            <div className="ca-img-box">
              <Image
                src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=300&q=80"
                alt="Webcam 2"
                fill
                sizes="300px"
              />
            </div>
            <div className="ca-stars">
              ★★★★☆ <span>(556)</span>
            </div>
            <h3 className="ca-title">
              4K UHD LED Smart TV with Chromecast Built-in
            </h3>
            <span className="ca-price">₹220</span>
          </div>

          <div className="ca-card">
            <div className="ca-img-box">
              <Image
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=300&q=80"
                alt="Printer 2"
                fill
                sizes="300px"
              />
            </div>
            <div className="ca-stars">
              ★★★★☆ <span>(536)</span>
            </div>
            <h3 className="ca-title">
              Wired Over-Ear Gaming Headphones with USB
            </h3>
            <span className="ca-price">₹1,500</span>
          </div>

          <div className="ca-card">
            <span className="ca-badge yellow-bg">25% OFF</span>
            <div className="ca-img-box">
              <Image
                src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=300&q=80"
                alt="Washing Machine"
                fill
                sizes="300px"
              />
            </div>
            <div className="ca-stars">
              ★★★★☆ <span>(423)</span>
            </div>
            <h3 className="ca-title">
              Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...
            </h3>
            <div className="ca-price-wrap">
              <del>₹1600</del>
              <span className="ca-price">₹1,200</span>
            </div>
          </div>
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
