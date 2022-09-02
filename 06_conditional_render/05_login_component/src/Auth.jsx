import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

export default class Auth extends Component {
  state = {
    isLogin: true,
    showSpinner: false,
  };

  onLogin = () => {
    this.setState({
      isLogin: false,
      showSpinner: true,
    });
    setTimeout(() => {
      this.setState({
        showSpinner: false,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLogin: true,
      isLogout: false,
    });
  };

  render() {
    const { isLogin, showSpinner } = this.state;
    return (
      <div>
        {isLogin && <Login onLogin={this.onLogin} />}
        {!isLogin && !showSpinner && <Logout onLogout={this.onLogout} />}
        {showSpinner && <Spinner size={30} showSpinner={this.state.showSpinner} />}
      </div>
    );
  }
}
