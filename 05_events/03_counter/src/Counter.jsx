import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.decrCount = this.decrCount.bind(this);
  }

  incrCount() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrCount() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  resetCounter = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <button
          data-action="decrease"
          className="counter__button"
          onClick={this.decrCount}
        >
          -
        </button>
        <span className="counter__value" onClick={this.resetCounter}>
          {this.state.counter}
        </span>
        <button
          data-action="increase"
          className="counter__button"
          onClick={this.incrCount.bind(this)}
        >
          +
        </button>
      </div>
    );
  }
}
