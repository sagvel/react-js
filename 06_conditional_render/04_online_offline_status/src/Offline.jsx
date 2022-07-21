import React from 'react';

export default function Offline({ isOnline }) {
  if (!isOnline) {
    return (
      <div className="status">
        <span className="status__text">Offline</span>
        <button className="status__btn">Reconnect</button>
      </div>
    );
  }
  return <></>;
}
