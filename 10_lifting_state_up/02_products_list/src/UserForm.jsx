import React from 'react';

export default function UserForm({ userData, handleChange }) {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
        onChange={handleChange}
      />
    </form>
  );
}
