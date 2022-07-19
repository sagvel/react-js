import React from 'react';

export default function Greeting(props) {
  const yearsOld = new Date().getFullYear() - props.birthDate.getFullYear();
  return (
    <div>
      My name is {props.firstName} {props.lastName}. I'm {yearsOld} old
    </div>
  );
}
