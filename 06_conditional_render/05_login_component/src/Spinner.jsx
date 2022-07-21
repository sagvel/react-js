import React from 'react';

export default function Spinner({ size }) {
  const spinnerSize = { borderWidth: size };
  return <span className="spinner" style={spinnerSize}></span>;
}
