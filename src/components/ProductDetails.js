import React from 'react';
import './ProductList.css';
import { useCart } from '../CartContext'; // Adjust the path if necessary

function ProductDetails({ product, onClose }) {
  const { addToCart } = useCart(); // Use CartContext

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-details">
      <button className="close-button" onClick={onClose}>×</button>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>Price: ${product.price}</h4>
      <label>Upgrade Options:</label>
      <select>
        {product.upgradeOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <button onClick={handleAddToCart}>Add to Cart</button> {/* Updated */}
    </div>
  );
}

export default ProductDetails;
