import React from 'react';
import { Link } from 'react-router-dom';
import mensWatchesData from '../data/mensWatches.json';
import './Products.css';

const MensWatches = () => {
  return (
    <div className="watches-container">
      <h2>Men's Watches</h2>
      {mensWatchesData.map((watch) => (
        <div key={watch.id} className="watch-item">
          <img src={watch.image} alt={watch.name} className="watch-image" />
          <h3>{watch.name}</h3>
          <p>Price: {watch.price}</p>
          <Link to={`/mens-watches/${watch.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MensWatches;
