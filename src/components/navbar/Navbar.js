import React from "react";
import "./Navbar.css";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaRedditAlien,
  FaYoutube,
  FaInstagram,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import {
  IoLocationOutline,
  IoSyncOutline,
  IoHeadsetOutline,
  IoInformationCircleOutline,
  IoCallOutline,
} from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="header-container">
      <div className="top-bar">
        <div className="top-bar-left">
          <span>Welcome to Clicon online eCommerce store.</span>
        </div>
        <div className="top-bar-right">
          <div className="social-icons">
            <span>Follow us:</span>
            <FaTwitter />
            <FaFacebookF />
            <FaPinterestP />
            <FaRedditAlien />
            <FaYoutube />
            <FaInstagram />
          </div>
          <div className="top-dropdowns">
            <span>
              Eng <MdKeyboardArrowDown />
            </span>
            <span>
              USD <MdKeyboardArrowDown />
            </span>
          </div>
        </div>
      </div>

      <div className="middle-bar">
        <div className="logo-container">
          <div className="logo-icon"></div>
          <h1>UNITED DEALS</h1>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search for anything..." />
          <button>
            <FiSearch />
          </button>
        </div>
        <div className="action-icons">
          <div className="cart-icon-wrapper">
            <FiShoppingCart />
            <span className="cart-badge">2</span>
          </div>
          <FaRegHeart />
          <FaRegUser />
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-left">
          <button className="category-btn">
            All Category <MdKeyboardArrowDown />
          </button>
          <nav className="nav-links">
            <a href="#">
              <IoLocationOutline /> Track Order
            </a>
            <a href="#">
              <IoSyncOutline /> Compare
            </a>
            <a href="#">
              <IoHeadsetOutline /> Customer Support
            </a>
            <a href="#">
              <IoInformationCircleOutline /> Need Help
            </a>
          </nav>
        </div>
        <div className="bottom-right">
          <a href="tel:+12025550104">
            <IoCallOutline /> +1-202-555-0104
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
