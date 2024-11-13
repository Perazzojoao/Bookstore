import React from "react";

const CartPage: React.FC = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li>
          <h3>Book Title 1</h3>
          <p>Author: Author Name 1</p>
          <p>Price: $19.99</p>
          <p>Quantity: 1</p>
          <button>Remove</button>
        </li>
        <li>
          <h3>Book Title 2</h3>
          <p>Author: Author Name 2</p>
          <p>Price: $25.99</p>
          <p>Quantity: 2</p>
          <button>Remove</button>
        </li>
      </ul>
      <h3>Total: $71.97</h3>
      <button>Clear Cart</button>
    </div>
  );
};

export default CartPage;
