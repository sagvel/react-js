import React from 'react';
import Clock from './Clock';

export default function App() {
  return (
    <>
      <Clock location="London" offset={0} />
      <Clock location="Kyiv" offset={2} />
      <Clock location="New York" offset={-5} />
    </>
  );
}
