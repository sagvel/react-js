import React, { Component } from 'react';
import EvenNumbers from './EvenNumbers';
import Numbers from './Numbers';
import OddNumbers from './OddNumbers';

export default class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { number } = this.state;
    return (
      <div className="app">
        <OddNumbers title="Odd number" number={number} />
        <EvenNumbers title="Even number" number={number} />
        <Numbers title="All numbers" number={number} />

        <div className="number">
          <span className="number__title">Just 17</span>
          <span className="number__value">17</span>
        </div>
      </div>
    );
  }
}
