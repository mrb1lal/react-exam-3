import Image from "next/image";
import "./CategoryCrads.css";
export default function CategoryCards() {
  const categoriesData = [
    { id: 1, title: "Mobile", img: "/spartphone.png", active: true },
    { id: 2, title: "Cosmetics", img: "/headphones.png", active: false },
    { id: 3, title: "Electronics", img: "/laptop.png", active: false },
    { id: 4, title: "Furniture", img: "/monitor.png", active: false },
    { id: 5, title: "Watches", img: "/camera.png", active: false },
    { id: 6, title: "Decor", img: "/Xiaomi.png", active: false },
  ];

  const rows = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="cat-grid-section">
      <div className="cat-grid-container">
        {rows.map((rowIndex) => (
          <div className="cat-grid-row" key={rowIndex}>
            {categoriesData.map((item) => (
              <div
                key={`${rowIndex}-${item.id}`}
                className={`cat-card-item ${item.id === 1 && rowIndex === 1 ? "active-border" : ""}`}
              >
                <div className="cat-circle-box">
                  <Image src={item.img} alt={item.title} width={60} height={60} />
                </div>
                <h4 className="cat-card-name">{item.title}</h4>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
