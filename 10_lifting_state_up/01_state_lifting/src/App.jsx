import React from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

const BASE_URL = 'https://api.github.com/users';

export default class App extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchData(this.props.userId);
  }

  fetchData = userId =>
    fetch(`${BASE_URL}/${userId}`).then(res =>
      res.json().then(data => {
        this.setState({
          userData: data,
        });
      }),
    );

  render() {
    const { userData } = this.state;

    if (!userData) {
      return null;
    }

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={userData} />
        </header>

        <UserProfile userData={userData} />
      </div>
    );
  }
}
