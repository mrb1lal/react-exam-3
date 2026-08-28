import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";
import {
  FaArrowRight,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaRedditAlien,
  FaYoutube,
  FaInstagram,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import {
  IoClose,
  IoLocationOutline,
  IoSyncOutline,
  IoHeadsetOutline,
  IoInformationCircleOutline,
  IoCallOutline,
} from "react-icons/io5";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="main-header">
      <div className="top-banner">
        <div className="banner-content">
          <div className="banner-left">
            <Image src="/xbox.png" alt="Xbox Console" width={60} height={60} className="xbox" />
            <span className="friday-text">Friday</span>
          </div>
          <div className="banner-center">
            <span className="upto-text">Up to</span>
            <span className="discount-text">59%</span>
            <span className="off-text">OFF</span>
          </div>
          <button className="shop-now-btn">
            SHOP NOW <FaArrowRight />
          </button>
        </div>
        <button className="close-btn">
          <IoClose />
        </button>
      </div>

      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            Welcome to Clicon online eCommerce store.
          </div>
          <div className="top-bar-right">
            <div className="social-links">
              <span>Follow us:</span>
              <FaTwitter />
              <FaFacebookF />
              <FaPinterestP />
              <FaRedditAlien />
              <FaYoutube />
              <FaInstagram />
            </div>
            <div className="divider"></div>
            <div className="language-currency">
              <span>
                Eng <MdKeyboardArrowDown />
              </span>
              <span>
                USD <MdKeyboardArrowDown />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-bar">
        <div className="middle-bar-container">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <div className="logo-inner-circle"></div>
            </div>
            <span className="logo-text">UNITED DEALS</span>
          </Link>

          <div className="search-box">
            <input type="text" placeholder="Search for anything..." />
            <button>
              <FiSearch />
            </button>
          </div>

          <div className="user-actions">
            <div className="cart-icon">
              <FiShoppingCart />
              <span className="badge">2</span>
            </div>
            <FaRegHeart className="action-icon" />
            <FaRegUser className="action-icon" />
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-container">
          <div className="bottom-left">
            <Link href="/categories" className="category-btn">
              All Category <MdKeyboardArrowDown />
            </Link>
            <nav className="nav-menu">
              <Link href="/ShopGrid">
                <IoLocationOutline /> Track Order
              </Link>
              <Link href="/compare">
                <IoSyncOutline /> Compare
              </Link>
              <Link href="/support">
                <IoHeadsetOutline /> Customer Support
              </Link>
              <Link href="/help">
                <IoInformationCircleOutline /> Need Help
              </Link>
            </nav>
          </div>
          <div className="bottom-right">
            <IoCallOutline /> +1-202-555-0104
          </div>
        </div>
      </div>
    </header>
  );
}
