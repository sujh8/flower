import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Faithful Blessings Bouquet',
    description: 'A symbolic white lily bouquet with a cross-adorned vase.',
    price: 60,
    imageUrl: '/images/fl10.jpg',
    upgradeOptions: ['Standard', 'Deluxe', 'Premium'],
  },
  {
    id: 2,
    name: 'Classic All White Arrangement',
    description: 'A luxurious all-white arrangement of roses, lilies, and greenery.',
    price: 79.99,
    imageUrl: '/images/fl1.jpg',
    upgradeOptions: ['Standard', 'Deluxe', 'Premium'],
  },
  {
    id: 3,
    name: 'Classic All White Arrangement',
    description: 'A luxurious all-white arrangement of roses, lilies, and greenery.',
    price: 79.99,
    imageUrl: '/images/fl9.jpg',
    upgradeOptions: ['Standard', 'Deluxe', 'Premium'],
  },
  {
    id: 4,
    name: 'Classic All White Arrangement',
    description: 'A luxurious all-white arrangement of roses, lilies, and greenery.',
    price: 79.99,
    imageUrl: '/images/fl8.jpg',
    upgradeOptions: ['Standard', 'Deluxe', 'Premium'],
  },
  {
    id: 5,
    name: 'Classic All White Arrangement',
    description: 'A luxurious all-white arrangement of roses, lilies, and greenery.',
    price: 79.99,
    imageUrl: '/images/fl7.jpg',
    upgradeOptions: ['Standard', 'Deluxe', 'Premium'],
  },
];

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1 className="top-sales-heading">Top Sales</h1>
      <div className="product-list">
        {selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
