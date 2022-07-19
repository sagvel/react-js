import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const formatDate = (date) => moment(date).format('LTS');

export default class Clock extends Component {
  state = {
    time: getTimeWithOffset(this.props.offset),
  };

  componentDidMount() {
    this.timerId = setInterval(
      () =>
        this.setState({
          time: getTimeWithOffset(this.props.offset),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{formatDate(this.state.time)}</div>
      </div>
    );
  }
}
