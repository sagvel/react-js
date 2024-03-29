import React, { Component } from 'react';

export default class ConnectionStatus extends Component {
  state = {
    status: 'online',
    isOfline: false,
  };

  componentDidMount() {
    window.addEventListener('online', this.setOnline);
    window.addEventListener('offline', this.setOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setOnline);
    window.removeEventListener('offline', this.setOffline);
  }

  setOnline = e => {
    console.log(e.target);
    this.setState({
      status: 'online',
      isOfline: false,
    });
  };

  setOffline = () => {
    this.setState({
      status: 'offline',
      isOfline: true,
    });
  };

  render() {
    const { status, isOfline } = this.state;
    return <div className={'status ' + (isOfline ? 'status_offline' : '')}>{status}</div>;
  }
}
