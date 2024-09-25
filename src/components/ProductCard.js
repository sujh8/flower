import React from 'react';
import './ProductList.css';

function ProductCard({ product, onViewDetails }) {
  return (
    <div className="product-card" onClick={() => onViewDetails(product)}>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button>View Details</button>
    </div>
  );
}

export default ProductCard;
