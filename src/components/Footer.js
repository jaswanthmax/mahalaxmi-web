import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mahalaxmi Plastics. All rights reserved.</p>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
