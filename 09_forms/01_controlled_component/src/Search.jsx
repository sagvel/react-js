import React from 'react';

export default class Search extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };
  render() {
    const { value } = this.state;

    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="search__input"
          value={value}
          onChange={this.handleChange}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
