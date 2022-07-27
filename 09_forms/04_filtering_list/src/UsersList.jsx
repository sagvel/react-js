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

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      filterText: value.trim(),
    });
  };

  filterUsers = text => {
    const { users } = this.state;
    this.setState({
      users: users.filter(({ name }) => name.includes(text)),
    });
  };

  render() {
    const { users, filterText } = this.state;
    const usersRender = users.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase()),
    );
    return (
      <div>
        <Filter
          count={usersRender.length}
          filterText={filterText}
          onChange={this.handleChange}
        />

        <ul className="users">
          {usersRender.map(({ id, name, age }) => (
            <li key={id} className="user">
              <User name={name} age={age} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
