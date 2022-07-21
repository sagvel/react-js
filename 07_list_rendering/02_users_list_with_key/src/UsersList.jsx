import React, { Component } from 'react';
import User from './User';

export default class UsersList extends Component {
  state = {
    sorting: null,
  };

  toggleSort = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    const { sorting } = this.state;
    const { users } = this.props;
    let userList;
    if (sorting) {
      userList = [...users].sort((a, b) =>
        sorting === 'asc' ? a.age - b.age : b.age - a.age
      );
    } else {
      userList = users;
    }
    return (
      <div>
        <button className="btn" onClick={this.toggleSort}>
          {sorting || '-'}
        </button>
        <ul className="users">
          {userList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
