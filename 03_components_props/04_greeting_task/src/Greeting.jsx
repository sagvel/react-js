import React from 'react';

export default function Greeting(props) {
  const yearsOld = new Date().getFullYear() - props.birthDate.getFullYear();
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {yearsOld} years old
    </div>
  );
}
