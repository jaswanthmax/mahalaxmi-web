export const initAllData = () => {
  const products = [
    {
      id: 1,
      name: "Cotton Handloom Saree",
      price: "₹3,499",
      description: "Soft cotton saree handwoven with traditional designs.",
      mainImage: "/img-textile/textile1.jpg",
      category: "textile",
      thumbnails: [
        "/img-textile/textile1.jpg",
        "/img-textile/textile1-1.jpg",
        "/img-textile/textile1-2.jpg",
      ],
    },
    {
  id: 2,
  name: "Cotton Handloom Saree",
  price: "₹3,499",
  description: "Soft cotton saree handwoven with traditional designs.",
  mainImage: "/img-textile/textile1.jpg",
  category: "textile",
  thumbnails: [
    "/img-textile/textile1.jpg",
    "/img-textile/textile1-1.jpg",
    "/img-textile/textile1-2.jpg",
    "/img-textile/textile1-3.jpg",
  ],
},
   
   

  ]

  // **Always overwrite localStorage**
  localStorage.setItem("allProducts", JSON.stringify(products));
};
