export const initPackagingData = () => {
  const products = [
    {
      id: 1,
      name: "Luxury Gift Box",
      price: "₹899",
      description: "Elegant luxury gift box for premium packaging.",
      mainImage: "/man/633ff3128efdf224755bab12-mondo-mannequins-derek1ov-male.jpg",
      thumbnails: [
        "/man/abstract-male-mannequin-runway-ma-53 (1).webp",
        "/man/abstract-male-mannequin-runway-ma-53 (2).webp",
        "/man/abstract-male-mannequin-runway-ma-53 (3).webp",
        "/man/abstract-male-mannequin-runway-ma-53 (4).webp",
        "/man/abstract-male-mannequin-runway-ma-53.webp"
        
      ],
    }

  ];


  localStorage.setItem("packagingProducts", JSON.stringify(products));
};
