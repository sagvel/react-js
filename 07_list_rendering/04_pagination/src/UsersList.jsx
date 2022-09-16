import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    itemsPerPage: 3,
    currentPage: 0,
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const { itemsPerPage, currentPage } = this.state;
    const { users } = this.props;
    const totalItems = users.length;
    const usersForRender = users.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage,
    );
    return (
      <div>
        <Pagination
          goNext={this.goNext}
          goPrev={this.goPrev}
          currentPage={currentPage + 1}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
        />

        <ul className="users">
          {usersForRender.map(({ id, name, age }) => (
            <li className="user" key={id}>
              <User name={name} age={age} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
