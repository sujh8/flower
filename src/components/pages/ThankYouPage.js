// src/components/pages/ThankYouPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext'; // Update the path if necessary
import './ThankYouPage.css';

// Import images directly
import thankYouBouquet from './flowerboquit/thank.jpg';
import gratitudeFlowers from './flowerboquit/thank1.jpg';
import appreciationArrangement from './flowerboquit/thank2.jpg';
import heartfeltWishes from './flowerboquit/thank.jpg';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const thankYouFlowers = [
    { id: 1, name: "Thank You Bouquet", image: thankYouBouquet, price: "$30" },
    { id: 2, name: "Gratitude Flowers", image: gratitudeFlowers, price: "$25" },
    { id: 3, name: "Appreciation Arrangement", image: appreciationArrangement, price: "$20" },
    { id: 4, name: "Heartfelt Wishes", image: heartfeltWishes, price: "$35" },
  ];

  const handleBuyNow = (flower) => {
    addToCart(flower);
    navigate('/cart');
  };

  return (
    <div className="thank-you-page">
      <header>
        <h1>Thank You Flower Arrangements</h1>
        <p>Express your gratitude with our beautiful selection of thank you flowers.</p>
      </header>
      
      <section className="thank-you-flowers-grid">
        {thankYouFlowers.map(flower => (
          <div key={flower.id} className="thank-you-flower-card">
            <img src={flower.image} alt={flower.name} className="thank-you-flower-image" />
            <h3>{flower.name}</h3>
            <p>{flower.price}</p>
            <button className="buy-button" onClick={() => handleBuyNow(flower)}>Buy Now</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ThankYouPage;
