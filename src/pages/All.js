import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initAllData } from "../utils/initAllProducts";
import "./Category.css";

function All() {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered product
  const navigate = useNavigate();

  // Load products from localStorage
  const loadProducts = () => {
    const stored = JSON.parse(localStorage.getItem("allProducts")) || [];
    setProducts(stored);
  };

  useEffect(() => {
    // Always reset localStorage and load products
    initAllData();
    loadProducts();

    // Listen for storage updates (optional if other tabs update)
    const handleStorage = () => loadProducts();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="category-container">
      <h1 class="vv">All Products Collection</h1>
      <div className="category-grid">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="category-card"
            onClick={() => navigate(`/all/${product.id}`)}
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

export default All;
