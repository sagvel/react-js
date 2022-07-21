import React from 'react';
import Online from './Online';
import Offline from './Offline';

export default function Status() {
  return (
    <>
      <Online isOnline={false} />
      <Offline isOnline={false} />
    </>
  );
}
