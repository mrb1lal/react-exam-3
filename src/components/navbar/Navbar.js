import styles from "./Navbar.css";
import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { CgArrowRight } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { TbReplace } from "react-icons/tb";
import { CiHeadphones } from "react-icons/ci";
import { RxInfoCircled } from "react-icons/rx";
import { PiPhoneCallFill } from "react-icons/pi";

function Navbar() {
  return (
    <div>
      <div className="top-nav">
        <Image
          src="/Black.png"
          alt=" Logo"
          width={74.00000261552674}
          height={40}
        />
        <p>
          Us to <span style={{ color: "yellow" }}> 50%</span> off
        </p>
        <div>
          <button className="shop-now">
            Shop Now <CgArrowRight />
          </button>
          <IoIosClose
            style={{ width: "32px", height: "32px" }}
            className="custom-close-icon"
          />
        </div>
      </div>
      <nav>
        <p>Welcome to Clicon online eCommerce store. </p>
        <p>
          Wollow us : <CiTwitter /> <FaFacebook /> <FaPinterestP /> <FaReddit />{" "}
          <FaYoutube />{" "}
        </p>
        <div>
          <select>
            <option>English</option>
            <option>Arabic</option>
          </select>
          <select>
            <option>usd</option>
            <option>egp</option>
          </select>
        </div>
      </nav>
      <div className="bottom-nav">
        <Image src="/logo.png" alt=" Logo" width={286} height={48} />
        <div>
          <input type="text" placeholder="Search " />
          <CiSearch />
        </div>
        <div>
          <FaBasketShopping />
          <FaHeart />
          <CiUser />
        </div>
      </div>
      <div className="bottom-nav-2">
        <select>
          <option>all categories</option>
        </select>
        <FaLocationDot /> 
        <span>Track Order</span>
        <TbReplace />
        <span>Compare</span>
        <CiHeadphones />
        <span>Customer Support</span>
        <RxInfoCircled />
        <span>Need Help</span>
        <PiPhoneCallFill />
        <span>+998 90 699 06 39</span>
      </div>
    </div>
  );
}

export default Navbar;
