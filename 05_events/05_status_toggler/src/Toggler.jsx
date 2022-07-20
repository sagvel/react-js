import React, { Component } from 'react';

export default class Toggler extends Component {
  state = {
    isOff: true,
    status: 'Off',
  };

  setToggle = () => {
    this.setState({
      isOff: !this.state.isOff,
      status: this.state.isOff ? 'On' : 'Off',
    });
  };
  render() {
    const { status } = this.state;
    console.log(this.state.isOff);
    return (
      <div className="toggler" onClick={this.setToggle}>
        {status}
      </div>
    );
  }
}
