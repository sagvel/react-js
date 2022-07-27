import React from 'react';
import UsersList from './UsersList';

const usersDaa = [
  { name: 'Tom', age: 18, id: 1 },
  { name: 'Alice', age: 21, id: 2 },
  { name: 'Bob', age: 22, id: 3 },
];
export default function App() {
  return <UsersList users={usersDaa} />;
}
