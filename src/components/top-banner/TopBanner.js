import React from 'react';
import './TopBanner.css';
import { FaArrowRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="top-banner-content">
        <div className="banner-badge">
          <span className="badge-black">Black</span> Friday
        </div>
        <div className="banner-offer">
          Up to <span className="percent">59%</span> OFF
        </div>
        <button className="shop-now-btn">
          SHOP NOW <FaArrowRight />
        </button>
      </div>
      <button className="banner-close-btn">
        <IoClose />
      </button>
    </div>
  );
};

export default TopBanner;