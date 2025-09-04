import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initJewelleryData } from "../utils/initJewelleryData";
import "./Category.css";

function Jewellery() {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const loadProducts = () => {
    const stored = JSON.parse(localStorage.getItem("jewelleryProducts")) || [];
    setProducts(stored);
  };

  useEffect(() => {
    initJewelleryData(); // always reset
    loadProducts();

    const handleStorage = () => loadProducts();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="category-container">
      <h1>Hanger Collection</h1>
      <div className="category-grid">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="category-card"
            onClick={() => navigate(`/jewellery/${product.id}`)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={
                hoveredIndex === index && product.thumbnails[1]
                  ? product.thumbnails[1]
                  : product.mainImage
              }
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jewellery;
