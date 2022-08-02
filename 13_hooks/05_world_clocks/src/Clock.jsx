import React, { useEffect, useState } from 'react';
import moment from 'moment';

export default function Clock({ location, offset }) {
  const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };

  const formatDate = date => moment(date).format('LTS');
  const [time, setTime] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{formatDate(time)}</div>
    </div>
  );
}
