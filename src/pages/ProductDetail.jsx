import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css"

const LOCAL_STORAGE_KEYS = {
  jewellery: "jewelleryProducts",
  packaging: "packagingProducts",
  textile: "textileProducts",
  all: "allProducts",
};

function ProductDetail({ category }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const key = LOCAL_STORAGE_KEYS[category];
    if (!key) return;

    const stored = localStorage.getItem(key);
    if (stored) {
      const products = JSON.parse(stored);
      const selected = products.find((p) => p.id === parseInt(productId, 10));
      setProduct(selected);
      if (selected) setMainImage(selected.mainImage);
    }
  }, [category, productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="image-detail-view">
      <div className="sidebar-thumbnails">
        {product.thumbnails.slice(0, 4).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className="thumbnail-img"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      <div className="main-image-container">
        <button className="close-btn" onClick={() => navigate(`/${category}`)}>
          &times;
        </button>
        <img src={mainImage} alt="Selected" className="main-image" />
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
