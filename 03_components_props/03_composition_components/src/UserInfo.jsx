import React from 'react';
import Avatar from './Avatar';
import './userInfo.scss';

export default function UserInfo(props) {
  console.log(props);
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
}
