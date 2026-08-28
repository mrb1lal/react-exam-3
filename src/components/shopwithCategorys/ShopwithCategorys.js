import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "./ShopwithCategorys.css";

export default function Category() {
  return (
    <section className="categories">
      <div className="categories-container">
        <h2>Shop with Categorys</h2>

        <div className="categories-wrapper">
          <button className="category-arrow category-arrow-left">
            <FiArrowLeft />
          </button>

          <div className="categories-list">
            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/laptop.png"
                  alt="Computer & Laptop"
                  width={180}
                  height={180}
                />
              </div>

              <h3>Computer & Laptop</h3>
            </div>

            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/spartphone.png"
                  alt="SmartPhone"
                  width={180}
                  height={180}
                />
              </div>

              <h3>SmartPhone</h3>
            </div>

            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/headphones.png"
                  alt="Headphones"
                  width={180}
                  height={180}
                />
              </div>

              <h3>Headphones</h3>
            </div>

            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/acasitory.png"
                  alt="Accessories"
                  width={180}
                  height={180}
                />
              </div>

              <h3>Accessories</h3>
            </div>

            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/camera.png"
                  alt="Camera & Photo"
                  width={180}
                  height={180}
                />
              </div>

              <h3>Camera & Photo</h3>
            </div>

            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/tv.png"
                  alt="TV & Homes"
                  width={180}
                  height={180}
                />
              </div>

              <h3>TV & Homes</h3>
            </div>
          </div>

          <button className="category-arrow category-arrow-right">
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
