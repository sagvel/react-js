import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

export default class Colors extends Component {
  setBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };
  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={this.setBackgroundColor.bind(this, RED)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={this.setBackgroundColor.bind(this, GREEN)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={this.setBackgroundColor.bind(this, BLUE)}
        ></button>
      </div>
    );
  }
}
