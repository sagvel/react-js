import React from 'react';

export default class CreateTask extends React.PureComponent {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleCreateTask = () => {
    this.props.addTask(this.state.value);
    this.setState({
      value: '',
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <button className="btn create-task__btn" onClick={this.handleCreateTask}>
          Create
        </button>
      </div>
    );
  }
}

// 1 Handle value from input and save to state
// 2 Create new task
// 3 Add new task to the data
