import { FiArrowRight } from "react-icons/fi";
import "./subscribe.css";

export default function Subscribe() {
  return (
    <section className="sub-section">
      <div className="sub-container">
        
        <h2 className="sub-title">Subscribe to our newsletter</h2>
        <p className="sub-desc">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>

        <div className="sub-form">
          <input 
            type="email" 
            placeholder="Email address" 
            className="sub-input" 
          />
          <button className="sub-btn">
            SUBSCRIBE <FiArrowRight />
          </button>
        </div>

        <div className="sub-brands">
          <span className="brand-item">Google</span>
          <span className="brand-item">amazon</span>
          <span className="brand-item">PHILIPS</span>
          <span className="brand-item">TOSHIBA</span>
          <span className="brand-item">SAMSUNG</span>
        </div>

      </div>
    </section>
  );
}