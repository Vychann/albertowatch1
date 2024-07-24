import React from 'react';
import { Link } from 'react-router-dom';
import womensWatchesData from '../data/womensWatches.json';
import './Products.css';

const WomensWatches = () => {
  return (
    <div className="watches-container">
      <h2>Women's Watches</h2>
      {womensWatchesData.map((watch) => (
        <div key={watch.id} className="watch-item">
          <img src={watch.image} alt={watch.name} className="watch-image" />
          <h3>{watch.name}</h3>
          <p>Price: {watch.price}</p>
          <Link to={`/womens-watches/${watch.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default WomensWatches;
