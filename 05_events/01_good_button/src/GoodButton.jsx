import React from 'react';

export default function GoodButton() {
  return (
    <button className="fancy-button" onClick={() => alert('Good job!')}>
      GoodButton
    </button>
  );
}
