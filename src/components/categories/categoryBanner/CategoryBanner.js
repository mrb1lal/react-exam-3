import { FiChevronLeft, FiGrid, FiList, FiChevronDown } from "react-icons/fi";
import "./CategoryBanner.css";

export default function CategoryHeader() {
  return (
    <div className="cat-head-section">
      <div className="cat-head-container">
        
        <div className="cat-head-left">
          <button className="back-circle-btn">
            <FiChevronLeft />
          </button>
          <h2 className="cat-head-title">All Categories</h2>
          <div className="view-mode-icons">
            <FiGrid className="view-icon active" />
            <FiList className="view-icon" />
          </div>
          <span className="cat-items-count">Showing 1 - 40 of 145 items</span>
        </div>

        <div className="cat-head-right">
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
    </div>
  );
}