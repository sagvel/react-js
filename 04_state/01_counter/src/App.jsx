import React from 'react';
import Counter from './Counter';

export default function App() {
  return (
    <>
      <Counter start={10} intertval={3000} />
      <Counter start={23} intertval={2000} />
      <Counter start={-67} intertval={1000} />
    </>
  );
}
