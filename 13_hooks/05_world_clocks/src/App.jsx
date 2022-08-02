import React from 'react';
import Clock from './Clock';

export default function App() {
  return (
    <>
      <Clock location="Kyiv" offset={2} />
      <Clock location="New York" offset={-5} />
      <Clock location="London" offset={0} />
    </>
  );
}
