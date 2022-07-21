import React, { Component } from 'react';
import Login from './Login';
import Logout from './logout';
import Spinner from './Spinner';

export default class Auth extends Component {
  state = {
    isLogin: true,
    isLogout: false,
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
        isLogout: true,
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
    const { isLogin, isLogout, showSpinner } = this.state;
    return (
      <div>
        {isLogin && <Login onLogin={this.onLogin} />}
        {isLogout && <Logout onLogout={this.onLogout} />}
        {showSpinner && (
          <Spinner size={30} showSpinner={this.state.showSpinner} />
        )}
      </div>
    );
  }
}
