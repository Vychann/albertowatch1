import React from 'react';
import './SellWatch.css';

const SellWatch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="sell-watch-container">
      <h1>Sell Your Watch</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" name="brand" required />
        </div>
        <div>
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" name="model" required />
        </div>
        <div>
          <label htmlFor="serialNumber">Serial Number:</label>
          <input type="text" id="serialNumber" name="serialNumber" required />
        </div>
        <div>
          <label htmlFor="condition">Condition:</label>
          <select id="condition" name="condition" required>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <p>Where is the best place to sell luxury watches?</p>
        <p>
          When it comes to selling luxury watches, it is important to consider a reputable company. Bob’s Watches has a reputation as a trusted and renowned watch dealer, providing a secure and convenient platform for selling luxury timepieces.
        </p>
      </div>
      <div className="video">
        <h2>Watch Selling Process</h2>
        <video controls width="600">
          <source src="/videos/your-video-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SellWatch;
