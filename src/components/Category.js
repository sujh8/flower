import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({ title, image, link }) => {
  return (
    <div className="category-card">
      <Link to={link} className="category-link">
        <div className="category-image-container">
          <img src={image} alt={title} className="category-image" />
          <div className="category-overlay">
            <div className="category-title">{title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
