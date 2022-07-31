import React from 'react';
import CreateTask from './CreateTask';
import { createTask, deleteTask, getTasksList, updateTask } from './tasksGateway';
import TasksList from './TasksList';

export default class App extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    getTasksList().then(res => {
      this.setState({
        tasks: res,
      });
    });
  }

  addNewTask = text => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task');
      } else {
        getTasksList().then(res => {
          this.setState({
            tasks: res,
          });
        });
      }
    });
  };

  changeTaskStatus = id => {
    const { text, done } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(response => {
      if (!response.ok) {
        throw new Error('Cant change the task status');
      } else {
        getTasksList().then(res => {
          this.setState({
            tasks: res,
          });
        });
      }
    });
  };

  onDeleteTask = id => {
    deleteTask(id).then(response => {
      if (!response.ok) {
        throw new Error('Cant change the task status');
      } else {
        getTasksList().then(res => {
          this.setState({
            tasks: res,
          });
        });
      }
    });
  };

  render() {
    const { tasks } = this.state;
    console.log(tasks);
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTask addTask={this.addNewTask} />
          <TasksList
            tasks={tasks}
            onUpdateTask={this.changeTaskStatus}
            onDeleteTask={this.onDeleteTask}
          />
        </main>
      </>
    );
  }
}
