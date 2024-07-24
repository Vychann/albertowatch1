import React from 'react';
import { useParams, Link } from 'react-router-dom';
import mensWatchesData from '../data/mensWatches.json';
import './ProductDetail.css';

const MensProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = mensWatchesData.find((p) => p.id === parseInt(id));

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>Price: {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <div className="back-button">
        <Link to="/mens-watches" className="back-button">Back to Men's Watches</Link>
      </div>
    </div>
  );
};

export default MensProductDetail;
