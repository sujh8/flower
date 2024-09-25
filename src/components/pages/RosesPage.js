// src/components/pages/RosesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext'; // Ensure the path is correct
import './RosesPage.css';

import roseRed from './roses/rose.jpg';
import rosePink from './roses/roseaugest.jpg';
import roseYellow from './roses/rosees.jpg';

const roses = [
  { id: 1, name: 'Pink Roses', description: 'Delicate and charming, our pink roses are ideal for celebrating love and admiration.', price: 50, imageUrl: roseRed },
  { id: 2, name: 'Blue Roses', description: 'Elegant and timeless, our blue roses symbolize friendship and joy.', price: 45, imageUrl: rosePink },
  { id: 3, name: 'Yellow Roses', description: 'Bright and cheerful, our yellow roses symbolize friendship and joy.', price: 40, imageUrl: roseYellow }
];

const RosesPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (rose) => {
    addToCart(rose);
    navigate('/cart');
  };

  return (
    <div className="roses-page">
      <header className="roses-header">
        <h1>Roses Collection</h1>
        <p>Explore our beautiful collection of roses, perfect for any occasion!</p>
      </header>
      <section className="roses-gallery">
        {roses.map((rose) => (
          <div className="roses-gallery-item" key={rose.id}>
            <img src={rose.imageUrl} alt={rose.name} />
            <h2>{rose.name}</h2>
            <p>{rose.description}</p>
            <p className="rose-price">${rose.price}</p>
            <button 
              className="add-to-cart-button" 
              onClick={() => handleAddToCart(rose)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </section>
      <section className="roses-info">
        <h2>Why Choose Our Roses?</h2>
        <ul>
          <li>Fresh and hand-picked daily</li>
          <li>Beautiful arrangements for every occasion</li>
          <li>Eco-friendly and sustainable practices</li>
          <li>Delivery available throughout the city</li>
        </ul>
      </section>
    </div>
  );
};

export default RosesPage;
