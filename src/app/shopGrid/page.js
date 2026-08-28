import { FiChevronLeft, FiGrid, FiList, FiChevronDown, FiPlus, FiShoppingCart, FiStar } from "react-icons/fi";
import "./ShopGrid.css";

export default function ShopGrid() {
  const brands = [
    { name: "Nike", checked: false },
    { name: "Rebook", checked: false },
    { name: "Zara", checked: true },
    { name: "Gearo", checked: false },
    { name: "Indi", checked: false },
    { name: "Aei", checked: false },
    { name: "Lulu", checked: false },
    { name: "Beast", checked: false },
  ];

  const products = [
    { id: 1, title: "ZARA Suit Blazer Midnight Black Cotton", price: "125", img: "/blazer.png", hasFlash: true, rating: "4.7" },
    { id: 2, title: "ZARA Black SunGlasses Anti Dust Resistant", price: "125", img: "/glasses.png", hasFlash: true, rating: "4.7" },
    { id: 3, title: "Black Boots with Glossy Finishing Travel", price: "125", img: "/boots.png", hasFlash: true, rating: "4.7" },
    { id: 4, title: "ZARA Suit Blazer Midnight Black Cotton", price: "125", img: "/perfume.png", hasFlash: false, rating: "4.7" },
    { id: 5, title: "ZARA Black SunGlasses Anti Dust Resistant", price: "125", img: "/trousers.png", hasFlash: false, rating: "4.7" },
    { id: 6, title: "Black Boots with Glossy Finishing Travel", price: "125", img: "/grey-blazer.png", hasFlash: false, rating: "4.7" },
    { id: 7, title: "ZARA Suit Blazer Midnight Black Cotton", price: "125", img: "/leather.png", hasFlash: false, rating: "4.7" },
    { id: 8, title: "ZARA Black SunGlasses Anti Dust Resistant", price: "125", img: "/jeans.png", hasFlash: false, rating: "4.7" },
    { id: 9, title: "Black Boots with Glossy Finishing Travel", price: "125", img: "/biker.png", hasFlash: false, rating: "4.7" },
  ];

  return (
    <div className="shop-page-section">
      <div className="shop-page-container">
        
        <div className="shop-top-bar">
          <div className="shop-top-left">
            <button className="back-circle-btn">
              <FiChevronLeft />
            </button>
            <h2 className="shop-title">ZARA</h2>
            <div className="view-mode-icons">
              <FiGrid className="view-icon active" />
              <FiList className="view-icon" />
            </div>
            <span className="shop-items-count">Showing 1 - 40 of 145 items</span>
          </div>

          <div className="shop-top-right">
            <div className="filter-group">
              <span className="filter-label">To Show:</span>
              <div className="filter-dropdown-box">
                <span>9</span>
                <FiChevronDown />
              </div>
            </div>
            <div className="filter-group position-group">
              <span className="filter-input-text">Position</span>
              <FiChevronDown />
            </div>
          </div>
        </div>

        <div className="shop-content-layout">
          
          <aside className="shop-sidebar">
            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Size</h3>
                <FiChevronDown className="filter-arrow" />
              </div>
            </div>

            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Brand</h3>
                <FiChevronDown className="filter-arrow rotate" />
              </div>
              <div className="brand-list">
                {brands.map((b, index) => (
                  <label key={index} className="checkbox-label">
                    <input type="checkbox" defaultChecked={b.checked} />
                    <span className={`checkbox-text ${b.checked ? "checked-text" : ""}`}>{b.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Price Range</h3>
                <FiChevronDown className="filter-arrow" />
              </div>
            </div>

            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Discount</h3>
                <FiChevronDown className="filter-arrow" />
              </div>
            </div>

            <div className="filter-section-box">
              <div className="filter-header-row">
                <h3>Availability</h3>
                <FiChevronDown className="filter-arrow" />
              </div>
            </div>
          </aside>

          <main className="shop-grid-area">
            {products.map((item) => (
              <div className="shop-card" key={item.id}>
                <div className="shop-card-img-box">
                  <img src={item.img} alt={item.title} />
                  {item.hasFlash && (
                    <div className="shop-card-hover-actions">
                      <button className="hover-action-btn"><FiShoppingCart /></button>
                      <button className="hover-action-btn"><FiPlus /></button>
                    </div>
                  )}
                </div>

                {item.hasFlash && <span className="flash-deal-text">Flash Deal Ends in 3 Hours !</span>}

                <h4 className="shop-card-title">{item.title}</h4>

                <div className="shop-card-rating-row">
                  <div className="stars-box">
                    <FiStar className="star-icon filled" />
                    <span className="rating-num">{item.rating}</span>
                  </div>
                  <span className="reviews-count">(21,871 Ratings)</span>
                </div>

                <div className="shop-card-price">
                  <span>- ₹</span>{item.price}
                </div>

                {item.hasFlash ? (
                  <button className="get-deal-btn">GET DEAL - ₹125</button>
                ) : (
                  <button className="buy-now-btn">BUY NOW - ₹125</button>
                )}
              </div>
            ))}
          </main>

        </div>

      </div>
    </div>
  );
}