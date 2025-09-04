import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jewellery from "./pages/Jewellery";
import Packaging from "./pages/Packaging";
import Textile from "./pages/Textile";
import All from "./pages/All";
import ProductDetail from "./pages/ProductDetail";  // <-- Import ProductDetail
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/textile" element={<Textile />} />
        <Route path="/all" element={<All />} />

        {/* Product detail pages */}
        <Route path="/jewellery/:productId" element={<ProductDetail category="jewellery" />} />
        <Route path="/packaging/:productId" element={<ProductDetail category="packaging" />} />
        <Route path="/textile/:productId" element={<ProductDetail category="textile" />} />
        <Route path="/all/:productId" element={<ProductDetail category="all" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
