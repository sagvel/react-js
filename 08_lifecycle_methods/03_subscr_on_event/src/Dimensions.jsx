import React, { Component } from 'react';

export default class Dimensions extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentDidUpdate() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    const { width, height } = this.state;
    return <div className="dimensions">{`${width}px - ${height}px`}</div>;
  }
}
