import React from 'react';

export default function Message({ text }) {
  return <>{text.length > 0 && <div className="message">{text}</div>}</>;
}
