import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Hamburger button */}
        <button
          className="menu-btn"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Logo */}
        <img 
          src="\logo\ChatGPT Image Sep 5, 2025, 11_10_58 AM.png" 
          alt="Mahalaxmi Plastics Logo" 
          className="logo" 
        />

      </div>

      {/* Nav Menu */}
      <nav className={`navbar-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
