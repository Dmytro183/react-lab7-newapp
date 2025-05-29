import React, { useState } from "react";

const Cart = ({ products }) => {
  const [cartItems, setCartItems] = useState(
    products.map(product => ({
      ...product,
      quantity: product.min || 0 // початкова кількість
    }))
  );

  const increase = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity < (item.max || Infinity)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > (item.min || 0)
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => increase(item.id)}>+</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => decrease(item.id)}>-</button>
              </td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ backgroundColor: "#d0e4f5" }}>
            <td colSpan="2"><strong>Totals</strong></td>
            <td><strong>{totalQuantity}</strong></td>
            <td><strong>{totalPrice}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
