import React from 'react';
import './GetWellPage.css'; 

// Import images directly
import autumnChrysanthemums from './fall/aut.jpg';
import goldenSunflowers from './fall/auto.jpg';
import mapleLeaf from './fall/autoa.jpg';
import harvestBouquet from './fall/autooo.jpg';

const FallPage = () => {
  const fallFlowers = [
    { id: 1, name: "Autumn Chrysanthemums", image: autumnChrysanthemums, price: "$30" },
    { id: 2, name: "Golden Sunflowers", image: goldenSunflowers, price: "$25" },
    { id: 3, name: "Maple Leaf Arrangement", image: mapleLeaf, price: "$20" },
    { id: 4, name: "Harvest Bouquet", image: harvestBouquet, price: "$35" },
  ];

  return (
    <div className="fall-page">
      <header>
        <h1>Fall Flower Arrangements</h1>
        <p>Celebrate the season with our stunning fall flower collection.</p>
      </header>
      
      <section className="fall-flowers-grid">
        {fallFlowers.map(flower => (
          <div key={flower.id} className="fall-flower-card">
            <img src={flower.image} alt={flower.name} className="fall-flower-image" />
            <h3>{flower.name}</h3>
            <p>{flower.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FallPage;
