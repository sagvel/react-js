import React from 'react';
import CreateTask from './CreateTask';
import TasksList from './TasksList';

export default function App() {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTask />
        <TasksList />
      </main>
    </>
  );
}
