export const initJewelleryData = () => {
  const products = [
    {
      id: 1,
      name: "Silver Pearl Earrings",
      price: "₹2,499",
      description: "Delicate silver earrings with natural pearls.",
      mainImage: "/hangers/518M0535B2L.jpg",
      thumbnails: [
        "/hangers/518M0535B2L.jpg",
        "/hangers/21hk01CLqwL._SS100_.jpg",
      ],
    },

  ];

  localStorage.setItem("jewelleryProducts", JSON.stringify(products));
};
