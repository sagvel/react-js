import React from 'react';

export default function CartTitle({ userName, count }) {
  return (
    <div className="cart-title">
      {userName}, you added {count} items
    </div>
  );
}
