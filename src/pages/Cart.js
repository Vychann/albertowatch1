import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, updateQuantity, removeItem, clearCart }) => {
  const handleIncrease = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecrease = (id) => {
    updateQuantity(id, -1);
  };

  const handleRemove = (id) => {
    removeItem(id);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // Logic for checkout can be added here
    clearCart(); // Clear cart after checkout
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
      <div className="cart-actions">
        <button onClick={handleCheckout} className="checkout-button">Checkout</button>
        <button onClick={clearCart} className="reset-button">Reset Cart</button>
      </div>
      <div className="back-to-products">
        <Link to="/products" className="back-button">Back to Products</Link>
      </div>
    </div>
  );
};

export default Cart;
