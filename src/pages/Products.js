import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <h2>ALBERTO WATCHES</h2>
      <div className="product-categories">
        <div className="category-item">
          <Link to="/mens-watches" className="category-link">
            <h3>Men's Watches</h3>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/womens-watches" className="category-link">
            <h3>Women's Watches</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
