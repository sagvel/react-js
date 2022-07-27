import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

export default class UsersList extends Component {
  state = {
    count: 0,
    users: [],
  };

  componentDidMount() {
    this.setState({
      count: this.props.users.length,
      users: this.props.users,
      filterText: '',
    });
  }

  componentDidUpdate() {
    // this.filterUsers(this.state.filterText);
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      filterText: event.target.value.trim(),
    });
  };

  filterUsers = text => {
    this.setState({
      users: this.state.users.filter(user => user.name.includes(text)),
    });
  };

  render() {
    const { users } = this.state;
    const usersRender = users.filter(user =>
      user.name.toLowerCase().includes(this.state.filterText.toLowerCase()),
    );
    return (
      <div>
        <Filter
          count={usersRender.length}
          filterText={this.state.filterText}
          onChange={this.handleChange}
        />

        <ul className="users">
          {usersRender.map(user => (
            <li key={user.id} className="user">
              <User name={user.name} age={user.age} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
