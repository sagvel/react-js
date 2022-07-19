import React from 'react';
import moment from 'moment';

export default function Profile(props) {
  const formatDate = (date) => moment(date).format('DD MMM YY');
  console.log(props);
  return (
    <div className="profile">
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
        Was born {formatDate(props.userData.birthDate)} in{' '}
        {props.userData.birthPlace}
      </div>
    </div>
  );
}
