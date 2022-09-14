import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    totalItems: this.props.users.length,
    itemsPerPage: 3,
    currentPage: 0,
  };

  goNext = () => {
    console.log('next');
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
    const { totalItems, itemsPerPage, currentPage } = this.state;
    const { users } = this.props;
    const usersForRender = users.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage,
    );
    return (
      <div>
        <Pagination
          goNext={this.goNext}
          goPrev={this.goPrev}
          currentPage={currentPage}
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
