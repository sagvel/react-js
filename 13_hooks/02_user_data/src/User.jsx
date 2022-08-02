import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error();
        }
        return res.json();
      })
      .then(data => {
        setUserData(data);
      });
  }, []);
  if (!userData) {
    return null;
  }
  const { name, location, avatar_url } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}
