import Image from "next/image";
import {
  FiHeart,
  FiShoppingCart,
  FiEye,
  FiArrowRight,
} from "react-icons/fi";

import "./FeaturedProducts.css";

export default function FeaturedProducts() {
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

            <div className="featured-card">

              <span className="product-badge hot-badge">
                HOT
              </span>

              <div className="featured-product-image">
                <Image
                  src="https://images.unsplash.com/photo-1740721455292-e5cd29544381?auto=format&fit=crop&w=500&q=80"
                  alt="Wireless earbuds"
                  fill
                />
              </div>

              <div className="stars">
                ★★★★★
                <span>(738)</span>
              </div>

              <h3>
                TOZO T6 True Wireless Earbuds
                Bluetooth Headphon...
              </h3>

              <strong>₹70</strong>

            </div>


            <div className="featured-card">

              <div className="featured-product-image">
                <Image
                  src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=500&q=80"
                  alt="Samsung smartphone"
                  fill
                />
              </div>

              <div className="stars">
                ★★★★★
                <span>(536)</span>
              </div>

              <h3>
                Samsung Electronics Samsung
                Galaxy S21 5G
              </h3>

              <strong>₹2,300</strong>

            </div>


            <div className="featured-card">

              <span className="product-badge best-badge">
                BEST DEALS
              </span>

              <div className="featured-product-image">
                <Image
                  src="https://images.unsplash.com/photo-1669503031190-c46544f68b57?auto=format&fit=crop&w=500&q=80"
                  alt="Air conditioner"
                  fill
                />
              </div>

              <div className="stars">
                ★★★★★
                <span>(423)</span>
              </div>

              <h3>
                Amazon Basics High-Speed
                HDMI Cable (18 Gbps, 4K/6...
              </h3>

              <strong>₹360</strong>

            </div>


            <div className="featured-card">

              <div className="featured-product-image">
                <Image
                  src="https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?auto=format&fit=crop&w=500&q=80"
                  alt="Black wireless headphones"
                  fill
                />
              </div>

              <div className="stars">
                ★★★★☆
                <span>(816)</span>
              </div>

              <h3>
                Portable Washing Machine,
                11lbs capacity Model 18NMF...
              </h3>

              <strong>₹80</strong>

            </div>


            <div className="featured-card">

              <div className="featured-product-image">
                <Image
                  src="https://images.unsplash.com/photo-1669503031190-c46544f68b57?auto=format&fit=crop&w=500&q=80"
                  alt="Gaming drone"
                  fill
                />
              </div>

              <div className="stars">
                ★★★★★
                <span>(647)</span>
              </div>

              <h3>
                Wired Over-Ear Gaming
                Headphones with USB
              </h3>

              <strong>₹1,500</strong>

            </div>


            <div className="featured-card">

              <span className="product-badge discount-badge">
                25% OFF
              </span>

              <div className="featured-product-image">
                <Image
                  src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=500&q=80"
                  alt="Smart TV"
                  fill
                />
              </div>

              <div className="stars">
                ★★★★☆
                <span>(877)</span>
              </div>

              <h3>
                Polaroid 57-Inch Photo/Video
                Tripod with Deluxe Tripod Ca...
              </h3>

              <div className="old-price">
                <del>₹1600</del>
                <strong>₹1,200</strong>
              </div>

            </div>


            <div className="featured-card active-card">

              <div className="featured-product-image">
                <Image
                  src="https://images.unsplash.com/photo-1483913433113-0606d63c02d4?auto=format&fit=crop&w=500&q=80"
                  alt="All in one computer"
                  fill
                />
              </div>

              <div className="hover-actions">

                <button>
                  <FiHeart />
                </button>

                <button>
                  <FiShoppingCart />
                </button>

                <button className="active">
                  <FiEye />
                </button>

              </div>

              <div className="stars">
                ★★★★★
                <span>(426)</span>
              </div>

              <h3>
                Dell Optiplex 7000x7480
                All-in-One Computer Monitor
              </h3>

              <strong>₹250</strong>

            </div>


            <div className="featured-card">

              <span className="product-badge sale-badge">
                SALE
              </span>

              <div className="featured-product-image">
                <Image
                  src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=500&q=80"
                  alt="4K Smart TV"
                  fill
                />
              </div>

              <div className="stars">
                ★★★★★
                <span>(583)</span>
              </div>

              <h3>
                4K UHD LED Smart TV with
                Chromecast Built-in
              </h3>

              <strong>₹220</strong>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}