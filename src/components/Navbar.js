import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ username, cartItemCount }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {username ? (
        <span>Welcome, {username}</span>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Link to="/cart">Cart ({cartItemCount})</Link>
    </nav>
  );
};

export default Navbar;
