import React, { Component } from 'react';

export default class GoodButton extends Component {
  clickHandler = (e) => {
    alert(e.target.textContent);
  };
  render() {
    return (
      <button className="fancy-button" onClick={(e) => this.clickHandler(e)}>
        Click Me
      </button>
    );
  }
}
