import React from 'react';
import T from 'prop-types';

import '../transactions/TransactionHistory.css';

const TransactionHistory = ({ items }) => (
  <table className="transaction-history" rules="rows">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td className="col2">{item.amount}</td>
          <td className="col3">{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  item: T.arrayOf(
    T.shape({ followers: T.number, views: T.number, likes: T.number })
  ),
};

export default TransactionHistory;
