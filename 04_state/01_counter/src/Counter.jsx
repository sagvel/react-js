import React, { Component } from 'react';
import './counter.scss';

export default class Counter extends Component {
  state = {
    counter: this.props.start,
  };
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, this.props.intertval);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}
