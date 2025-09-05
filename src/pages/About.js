import React from 'react';
import './About.css';  // Import the CSS file

function About() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9884480279';  // WhatsApp number from the card
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleLocationClick = () => {
    // Link to your Google Maps location
    const location = 'https://maps.app.goo.gl/MMfV55tiE56MVoKQA?g_st=aw';
    window.open(location, '_blank');
  };

  return (
    <div className="about-container">
      <div className="content-wrapper">
        <h1>About Us</h1>
        <p><strong>Business Name:</strong> MAHALAKSHMI Plastic</p>
        <p><strong>Owner:</strong> S. Malaram Solanki</p>
        <p><strong>Services:</strong> Tailoring Material, BOPP Covers, Carry Bags, and All Plastic Items</p>
        <p><strong>Location:</strong>
          <button 
            onClick={handleLocationClick} 
            className="location-button"
          >
            View on Google Maps
          </button>
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="whatsapp-button"
        >
          Contact Us on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default About;
