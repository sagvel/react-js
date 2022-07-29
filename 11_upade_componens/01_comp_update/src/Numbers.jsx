import React, { Component } from 'react';

export default class Numbers extends Component {
  render() {
    const { title, number } = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}
