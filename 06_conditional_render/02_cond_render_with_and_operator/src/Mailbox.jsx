import React from 'react';

export default function Mailbox({ unreadMessages }) {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Mailbox</span>

      {unreadMessages.length > 0 && (
        <span className="mailbox__count">{unreadMessages.length}</span>
      )}
    </div>
  );
}
