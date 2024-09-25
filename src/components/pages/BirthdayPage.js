// src/components/pages/BirthdayPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext'; // Ensure the path is correct
import './BirthdayPage.css';

import birthdayBouquet1 from './birthday/birth.jpg';
import birthdayBouquet2 from './birthday/birth1.jpg';
import birthdayBouquet3 from './birthday/birth2.jpg';
import birthdayBouquet4 from './birthday/birth.jpg';

const BirthdayPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const birthdayFlowers = [
    { id: 1, name: "Joyful Tulips", image: birthdayBouquet1, price: "$30" },
    { id: 2, name: "Celebration Lilies", image: birthdayBouquet2, price: "$25" },
    { id: 3, name: "Birthday Roses", image: birthdayBouquet3, price: "$20" },
    { id: 4, name: "Happy Sunflowers", image: birthdayBouquet4, price: "$35" }
  ];

  const handleAddToCart = (flower) => {
    addToCart(flower);
    navigate('/cart');
  };

  return (
    <div className="birthday-page">
      <header>
        <h1>Birthday Flower Arrangements</h1>
        <p>Make their birthday special with our beautiful birthday flower collection.</p>
      </header>
      <section className="birthday-flowers-grid">
        {birthdayFlowers.map((flower) => (
          <div key={flower.id} className="birthday-flower-card">
            <img src={flower.image} alt={flower.name} className="birthday-flower-image" />
            <h3>{flower.name}</h3>
            <p>{flower.price}</p>
            <button className="buy-button" onClick={() => handleAddToCart(flower)}>Buy Now</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BirthdayPage;
