import React, { Component } from 'react';

export default class ColorPicker extends Component {
  state = {
    textColor: '',
  };

  mouseFocus = (e) => {
    this.setState({
      textColor: e.target.dataset.color,
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
            data-color="coral"
            onPointerEnter={(e) => this.mouseFocus(e)}
            onPointerLeave={this.mouseNoFocus}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            data-color="Aqua"
            onMouseEnter={(e) => this.mouseFocus(e)}
            onMouseLeave={this.mouseNoFocus}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            data-color="Bisque"
            onMouseEnter={(e) => this.mouseFocus(e)}
            onMouseLeave={this.mouseNoFocus}
          ></button>
        </div>
      </div>
    );
  }
}
