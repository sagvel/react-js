import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Task({ id, done, text, onUpdateTask, onDeleteTask }) {
  return (
    <>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onClick={() => onUpdateTask(id)}
      />
      <span className={classNames({ 'list-item__text': done })}>{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDeleteTask(id)}></button>
    </>
  );
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
