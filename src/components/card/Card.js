import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import "./Card.css";

export default function Cards() {
  return (
    <section className="card-section">
      <div className="card-container">
        <div className="info-card light-card">
          <div className="card-content">
            <span className="card-badge blue-badge">INTRODUCING</span>
            <h2>New Apple Homepod Mini</h2>
            <p>
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>
            <button className="card-btn">
              SHOP NOW <FiArrowRight />
            </button>
          </div>
          <div className="card-image">
            <Image
              src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80"
              alt="Apple Homepod Mini"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="info-card dark-card">
          <div className="card-content">
            <span className="card-badge yellow-badge">INTRODUCING NEW</span>
            <h2>Xiaomi Mi 11 Ultra 12GB+256GB</h2>
            <p>*Data provided by internal laboratories. Industry measurment.</p>
            <button className="card-btn">
              SHOP NOW <FiArrowRight />
            </button>
          </div>
          <div className="card-image">
            <div className="card-price-tag">₹590</div>
            <Image
              src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80"
              alt="Xiaomi Mi 11 Ultra"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
