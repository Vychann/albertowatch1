import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../components/logo/logo.jpg'; // Adjust the path according to your directory structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/sellwatch" className="nav-link">Sell Watch</Link>
      <div className="cart-login">
        <Link to="/cart" className="nav-link">Cart (0)</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Alberto Watches Logo" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
