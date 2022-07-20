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
    const { textColor } = this.state;
    return (
      <div>
        <div className="picker__title">{textColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            data-color="coral"
            onMouseEnter={(e) => this.mouseFocus(e)}
            onMouseLeave={this.mouseNoFocus}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            data-color="aqua"
            onMouseEnter={(e) => this.mouseFocus(e)}
            onMouseLeave={this.mouseNoFocus}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            data-color="bisque"
            onMouseEnter={(e) => this.mouseFocus(e)}
            onMouseLeave={this.mouseNoFocus}
          ></button>
        </div>
      </div>
    );
  }
}
