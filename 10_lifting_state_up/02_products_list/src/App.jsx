import React from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

export default class App extends React.Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="page">
        <h1 className="title">
          Hello, {this.state.userData.firstName} {this.state.userData.lastName}
        </h1>
        <main className="content">
          {/* <!-- ShoppingCart --> */}
          <ShoppingCart userName={this.state.userData.firstName} />
          {/* <!-- Profile --> */}
          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}
