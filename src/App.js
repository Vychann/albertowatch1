import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MensWatches from './pages/MensWatches';
import WomensWatches from './pages/WomensWatches';
import Products from './pages/Products';
import SellWatch from './pages/SellWatch';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MensProductDetail from './pages/MensProductDetail';
import WomensProductDetail from './pages/WomensProductDetail';

function App() {
  const [username, setUsername] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = (user) => {
    setUsername(user);
  };

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex(item => item.id === product.id);
    if (itemIndex >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    const newCartItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    setCartItems(newCartItems);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Navbar username={username} cartItemCount={cartItems.length} />
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/mens-watches/:id" element={<MensProductDetail addToCart={addToCart} />}/>
          <Route path="/womens-watches/:id" element={<WomensProductDetail addToCart={addToCart} />}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} clearCart={clearCart} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mens-watches" element={<MensWatches />} />
          <Route path="/womens-watches" element={<WomensWatches />} />
          <Route path="/sellwatch" element={<SellWatch />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <footer className="bg-dark text-white text-center py-3">
          <p>&copy; 2023 Alberto Watch Company. All rights reserved.</p>
          <p>Contact us at info@albertowatch.com or call (123) 456-7890</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
