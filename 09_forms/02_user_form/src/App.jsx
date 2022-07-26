import React from 'react';
import UserForm from './UserForm';

const createUser = (user, event) => {
  event.preventDefault();
  console.log(user);
};
export default function App() {
  return <UserForm onSubmit={createUser} />;
}
