import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

export default class ShoppingCart extends Component {
  state = {
    cartItems: [
      { id: 1, name: 'iPhone 11', price: 999 },
      { id: 2, name: 'iPad Pro', price: 799 },
    ],
  };
  render() {
    const { cartItems } = this.state;
    const { userName } = this.props;

    return (
      <div className="column">
        <CartTitle userName={userName} count={cartItems.length} />
        <ProductsList cartItems={cartItems} />
      </div>
    );
  }
}
