import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiChevronDown,
  FiHome,
  FiList,
} from "react-icons/fi";
import "./CategoryNavba.css";

export default function CategoryNavbar() {
  return (
    <header className="cat-header">
      <div className="cat-topbar">
        <div className="cat-container topbar-content">
          <p>Welcome to worldwide Megamart!</p>
          <div className="topbar-right">
            <span>Deliver to 423651</span>
            <span className="divider">|</span>
            <span>Track your order</span>
            <span className="divider">|</span>
            <span>All Offers</span>
          </div>
        </div>
      </div>

      <div className="cat-main-nav">
        <div className="cat-container nav-content">
          <div className="nav-left">
            <button className="menu-toggle-btn">
              <FiMenu />
            </button>
            <h1 className="nav-logo">UNITED DEALS</h1>
          </div>

          <div className="nav-search">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
            />
            <FiList className="search-filter-icon" />
          </div>

          <div className="nav-actions">
            <div className="action-item">
              <FiUser className="action-icon" />
              <span>Sign Up/Sign In</span>
            </div>
            <div className="action-divider"></div>
            <div className="action-item">
              <FiShoppingCart className="action-icon" />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cat-categories-bar">
        <div className="cat-container categories-scroll">
          <button className="cat-pill active">
            Groceries <FiChevronDown />
          </button>
          <button className="cat-pill">
            Premium Fruits <FiChevronDown />
          </button>
          <button className="cat-pill">
            Home & Kitchen <FiChevronDown />
          </button>
          <button className="cat-pill">
            Fashion <FiChevronDown />
          </button>
          <button className="cat-pill">
            Electronics <FiChevronDown />
          </button>
          <button className="cat-pill">
            Beauty <FiChevronDown />
          </button>
          <button className="cat-pill">
            Home Improvement <FiChevronDown />
          </button>
          <button className="cat-pill">
            Sports, Toys & Luggage <FiChevronDown />
          </button>
        </div>
      </div>

      <div className="cat-breadcrumb-bar">
        <div className="cat-container breadcrumb-content">
          <a href="/" className="breadcrumb-item">
            <FiHome /> Home
          </a>
          <span className="breadcrumb-arrow">/</span>
          <a href="#" className="breadcrumb-item">
            Shop
          </a>
          <span className="breadcrumb-arrow">/</span>
          <a href="#" className="breadcrumb-item">
            Shop Grid
          </a>
          <span className="breadcrumb-arrow">/</span>
          <a href="#" className="breadcrumb-item">
            Electronics Devices
          </a>
          <span className="breadcrumb-arrow">/</span>
          <span className="breadcrumb-item active">Macbook Pro</span>
        </div>
      </div>
    </header>
  );
}
