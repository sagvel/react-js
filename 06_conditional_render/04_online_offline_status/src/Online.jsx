import React from 'react';

export default function Online({ isOnline }) {
  if (isOnline) {
    return (
      <div className="status">
        <span className="status__text">All good!</span>
      </div>
    );
  }
  return <></>;
}
