import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  // Category data with routes
  const categories = [
    {
      title: "Hangers Display",
      image: "/img home/bumerang-hanger-natural__0925727_pe788849_s5.avif",
      route: "/jewellery",
    },
    {
      title: "mannequin Display",
      image: "/img home/mannequin-mall-male-abstract-athletic-mannequin-mm-hef00eg-14377197955_1600x.webp",
      route: "/packaging",
    },
    {
      title: "Textile Display",
      image: "/img home/Textile-Display-1-compressed.jpg",
      route: "/textile",
    },
    {
      title: "All Packaging & Display",
      image: "/img home/all-packaging-materialspng-1.png",
      route: "/all",
    },
  ];

  return (
    <div className="home-container">
      <h1>Our Products</h1>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.route} className="category-card">
            <img src={cat.image} alt={cat.title} />
            <h3>{cat.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
