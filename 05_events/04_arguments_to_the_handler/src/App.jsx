import React from 'react';
import Colors from './Colors';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

export default function App() {
  return (
    <>
      <Colors color={RED} />
      <Colors color={GREEN} />
      <Colors color={BLUE} />
    </>
  );
}
