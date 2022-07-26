import React, { Component } from 'react';

export default class ConnectionStatus extends Component {
  state = {
    status: 'Online',
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
      status: 'Online',
      isOfline: false,
    });
  };

  setOffline = () => {
    this.setState({
      status: 'Offline',
      isOfline: true,
    });
  };

  render() {
    const { status, isOfline } = this.state;
    return <div className={'status ' + (isOfline ? 'status_offline' : '')}>{status}</div>;
  }
}
