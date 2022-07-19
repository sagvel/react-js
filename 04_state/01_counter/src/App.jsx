import React from 'react';
import Counter from './Counter';

export default function App() {
  return (
    <>
      <Counter start={10} interval={1000} />
      <Counter start={23} interval={500} />
      <Counter start={-67} interval={100} />
    </>
  );
}
