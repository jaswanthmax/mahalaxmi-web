export const initJewelleryData = () => {
  const products = [
    {
      id: 1,
      name: "Silver Pearl Earrings",
      price: "₹2,499",
      description: "Delicate silver earrings with natural pearls.",
      mainImage: "/hangers/21hk01CLqwL._SS100_.jpg",
      thumbnails: [
        "/hangers/518M0535B2L.jpg",
        "/hangers/21hk01CLqwL._SS100_.jpg",
      ],
    },
    {
      id: 2,
      name: "Gold Plated Necklace",
      price: "₹3,999",
      description: "Elegant gold plated necklace for special occasions.",
      mainImage: "/img-jewellery/jewel2.jpg",
      thumbnails: [
        "/img-jewellery/jewel2.jpg",
        "/img-jewellery/jewel2-1.jpg",
        "/img-jewellery/jewel2-2.jpg",
      ],
    },
    {
  id: 3,
  name: "Gold Plated Necklace",
  price: "₹3,999",
  description: "Elegant gold plated necklace for special occasions.",
  mainImage: "/img-jewellery/jewel2.jpg",
  thumbnails: [
    "/img-jewellery/jewel2.jpg",
    "/img-jewellery/jewel2-1.jpg",
    "/img-jewellery/jewel2-2.jpg",
  ],
},
  ];

  localStorage.setItem("jewelleryProducts", JSON.stringify(products));
};
