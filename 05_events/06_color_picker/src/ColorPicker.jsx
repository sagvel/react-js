import React, { Component } from 'react';

export default class ColorPicker extends Component {
  state = {
    textColor: '',
  };

  mouseFocus = (color) => {
    this.setState({
      textColor: color,
    });
  };

  mouseNoFocus = () => {
    this.setState({
      textColor: '',
    });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.textColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.mouseFocus('Coral')}
            onMouseLeave={this.mouseNoFocus}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.mouseFocus('Aqua')}
            onMouseLeave={this.mouseNoFocus}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.mouseFocus('Bisque')}
            onMouseLeave={this.mouseNoFocus}
          ></button>
        </div>
      </div>
    );
  }
}
