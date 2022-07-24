import React from 'react';
import moment from 'moment';

const formatDate = (date) => moment(date).format('YY MMM');
const formatTime = (date) => moment(date).format('HH: mm');
const formatNum = new Intl.NumberFormat('en-GB');

export default function Transaction({ time, from, to, rate, amount }) {
  return (
    <>
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">{from}</span>
      <span className="transaction__assets">{to}</span>
      <span className="transaction__rate">{formatNum.format(rate)}</span>
      <span className="transaction__amount">{formatNum.format(amount)}</span>
    </>
  );
}
