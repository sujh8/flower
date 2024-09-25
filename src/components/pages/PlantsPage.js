// src/components/pages/PlantsPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext'; // Ensure the path is correct
import './PlantsPage.css';

import AloeVera from './plant/plant.jpg';
import SnakePlant from './plant/plant1.jpg';
import PeaceLily from './plant/plant2.jpg';
import FiddleLeafFig from './plant/plantt.jpg';

const PlantsPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const plants = [
    { id: 1, name: "Aloe Vera", image: AloeVera, price: "$15" },
    { id: 2, name: "Snake Plant", image: SnakePlant, price: "$20" },
    { id: 3, name: "Peace Lily", image: PeaceLily, price: "$25" },
    { id: 4, name: "Fiddle Leaf Fig", image: FiddleLeafFig, price: "$35" }
  ];

  const handleAddToCart = (plant) => {
    addToCart(plant);
    navigate('/cart');
  };

  return (
    <div className="plants-page">
      <header>
        <h1>Explore Our Plant Collection</h1>
        <p>Bring nature into your home with our wide selection of indoor plants.</p>
      </header>
      <section className="plants-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
            <button className="buy-button" onClick={() => handleAddToCart(plant)}>Buy Now</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlantsPage;
