import React from 'react';
import Task from './Task';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function TasksList({ tasks, onUpdateTask, onDeleteTask }) {
  const sortedTasks = [...tasks].sort((a, b) => a.done - b.done);
  return (
    <ul className="list">
      {sortedTasks.map(({ id, text, done }) => (
        <li key={id} className={classNames('list-item', { 'list-item_done': done })}>
          <Task
            text={text}
            done={done}
            onUpdateTask={onUpdateTask}
            id={id}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ),
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

TasksList.defaultProps = {
  tasks: [],
};
