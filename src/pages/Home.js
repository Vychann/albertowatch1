import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SliderMenu from '../components/SliderMenu';

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to Alberto Watch Company</h1>
        <p>Discover the finest selection of luxury timepieces.</p>
        <Link to="/products" className="shop-now-button">Shop Now</Link>
      </div>
      <SliderMenu />
    </div>
  );
};

export default Home;
