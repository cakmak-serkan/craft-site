import React from 'react';

function Cart({ cartItems }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.Price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.ProductID}>
            {item.product.ProductName} - ${item.product.Price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}

export default Cart;
