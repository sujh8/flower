import React, { useState } from 'react';
import './IconSection.css'; // Ensure this CSS file exists

const IconSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const handleCardClick = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const iconCards = [
    {
      id: 1,
      image: "/images/100-percent.png",
      title: "100% Hand-Arranged Bouquets",
      details: "Our bouquets are meticulously arranged by hand, ensuring the highest quality and attention to detail."
    },
    {
      id: 2,
      image: "/images/free-delivery.png",
      title: "Free Same-Day Delivery",
      details: "Enjoy free same-day delivery on all orders, ensuring your flowers arrive fresh and on time."
    },
    {
      id: 3,
      image: "/images/customer-service.png",
      title: "Support Your Local Florist",
      details: "By shopping with us, you're supporting local florists who put their heart into every arrangement."
    }
  ];

  return (
    <div className="icon-section">
      {iconCards.map(card => (
        <div
          key={card.id}
          className="icon-card"
          onClick={() => handleCardClick(card)}
        >
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
        </div>
      ))}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>×</button>
            <h2>{popupContent.title}</h2>
            <p>{popupContent.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IconSection;
