import React from 'react';

export default class User extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId =>
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data,
        });
      });

  render() {
    const { user } = this.state;
    if (!user) {
      return null;
    }

    const { avatar_url, name, location } = user;
    console.log(this.state.user);
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>

          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}
