import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h3>Total: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
