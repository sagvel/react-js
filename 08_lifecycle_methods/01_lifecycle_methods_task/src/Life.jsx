import React, { Component } from 'react';

export default class Life extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
    console.log('constructor: good place to create state');
  }

  clickHandler = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  componentDidUpdate() {
    console.log(
      'componentDidUpdate(prevProps, prevState): some updates based on new props'
    );
  }

  shouldComponentUpdate() {
    console.log(
      'shouldComponentUpdate(nextProps, nextState): decide to render or not to render'
    );
    return true;
  }

  componentWillUnmount() {
    console.log(
      'componentWillUnmount(): cleanup before DOM related to component will be removed'
    );
  }
  render() {
    console.log('return React element to build DOM');
    return (
      <>
        <div>Life </div>
        <div>{this.state.number}</div>
        <button onClick={this.clickHandler}>+</button>
      </>
    );
  }
}
