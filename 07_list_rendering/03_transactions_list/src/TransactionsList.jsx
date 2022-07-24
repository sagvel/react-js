import React from 'react';
import Transaction from './Transaction';

export default function TransactionsList({ transactions }) {
  return (
    <ul className="transactions">
      {transactions.map(({ time, from, to, rate, amount, id }) => (
        <li key={id} className="transaction">
          <Transaction
            time={time}
            from={from}
            to={to}
            rate={rate}
            amount={amount}
          />
        </li>
      ))}
    </ul>
  );
}
