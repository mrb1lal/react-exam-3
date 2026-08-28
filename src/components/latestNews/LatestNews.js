import Image from "next/image";
import { FiUser, FiCalendar, FiMessageSquare, FiArrowRight } from "react-icons/fi";
import "./LatestNews.css";

export default function LatestNews() {
  return (
    <section className="news-section">
      <h2 className="news-main-title">Latest News</h2>
      
      <div className="news-grid">
        
        <div className="news-card">
          <div className="news-img-box">
            <Image src="/laptop.png" alt="Smartwatch" width={300} height={200} />
          </div>
          <div className="news-meta">
            <span className="news-meta-item">
              <FiUser className="news-icon" /> Kristin
            </span>
            <span className="news-meta-item">
              <FiCalendar className="news-icon" /> 19 Dec, 2013
            </span>
            <span className="news-meta-item">
              <FiMessageSquare className="news-icon" /> 453
            </span>
          </div>
          <h3 className="news-card-title">
            Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.
          </h3>
          <p className="news-card-desc">
            Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.
          </p>
          <button className="news-btn">
            READ MORE <FiArrowRight />
          </button>
        </div>

        <div className="news-card">
          <div className="news-img-box">
            <Image src="/monitor.png" alt="Motherboard" width={300} height={200} />
          </div>
          <div className="news-meta">
            <span className="news-meta-item">
              <FiUser className="news-icon" /> Robert
            </span>
            <span className="news-meta-item">
              <FiCalendar className="news-icon" /> 28 Nov, 2015
            </span>
            <span className="news-meta-item">
              <FiMessageSquare className="news-icon" /> 738
            </span>
          </div>
          <h3 className="news-card-title">
            Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.
          </h3>
          <p className="news-card-desc">
            Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.
          </p>
          <button className="news-btn">
            READ MORE <FiArrowRight />
          </button>
        </div>

        <div className="news-card">
          <div className="news-img-box">
            <Image src="/spartphone.png" alt="Smartphone" width={300} height={200} />
          </div>
          <div className="news-meta">
            <span className="news-meta-item">
              <FiUser className="news-icon" /> Arlene
            </span>
            <span className="news-meta-item">
              <FiCalendar className="news-icon" /> 9 May, 2014
            </span>
            <span className="news-meta-item">
              <FiMessageSquare className="news-icon" /> 826
            </span>
          </div>
          <h3 className="news-card-title">
            Curabitur massa orci, consectetur et blandit ac, auctor et tellus.
          </h3>
          <p className="news-card-desc">
            Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.
          </p>
          <button className="news-btn">
            READ MORE <FiArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}