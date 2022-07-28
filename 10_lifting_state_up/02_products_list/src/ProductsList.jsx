import React from 'react';

export default function ProductsList({ cartItems }) {
  const total = cartItems.reduce((sum, { price }) => sum + price, 0);
  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(({ id, name, price }) => (
          <li className="products__list-item" key={id}>
            <span className="products__item-name">{name}</span>
            <span className="products__item-price">${price}</span>
          </li>
        ))}
      </ul>
      <div className="products__total">Total: ${total}</div>
    </div>
  );
}
