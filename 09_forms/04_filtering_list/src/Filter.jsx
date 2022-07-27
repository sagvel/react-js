import React from 'react';

export default function Filter({ count, filterText, onChange }) {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        value={filterText}
        onChange={event => onChange(event)}
      />
    </div>
  );
}
