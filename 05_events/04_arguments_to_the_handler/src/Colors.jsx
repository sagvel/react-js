import React, { Component } from 'react';

export default class Colors extends Component {
  setBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };
  render() {
    const { color } = this.props;
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: color }}
          onClick={this.setBackgroundColor.bind(this, color)}
        ></button>
      </div>
    );
  }
}
