import React from 'react';
import UsersList from './components/UsersList';
import users from './api/users';

const App = () => {
  return <UsersList users={users} />;
};

export default App;
