import React from 'react';

export default function CreateTask() {
  return (
    <div className="create-task">
      <input className="create-task__input" type="text" value="" />
      <button className="btn create-task__btn">Create</button>
    </div>
  );
}
