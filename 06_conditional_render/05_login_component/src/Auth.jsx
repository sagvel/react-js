import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

export default class Auth extends Component {
  state = {
    isLogin: false,
    showSpinner: false,
  };

  onLogin = () => {
    this.setState({
      isLogin: true,
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
      isLogin: false,
    });
  };

  render() {
    const { isLogin, showSpinner } = this.state;
    return (
      <div>
        {!isLogin && <Login onLogin={this.onLogin} />}
        {isLogin && !showSpinner && <Logout onLogout={this.onLogout} />}
        {showSpinner && <Spinner size={30} showSpinner={this.state.showSpinner} />}
      </div>
    );
  }
}
