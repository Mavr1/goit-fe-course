import React from 'react';
import T from 'prop-types';

import { Styles } from './TransactionHistoryStyles';

// console.dir(Styles);
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
          <Styles.td>{item.type}</Styles.td>
          <Styles.tdRight>{item.amount}</Styles.tdRight>
          <Styles.tdRight>{item.currency}</Styles.tdRight>
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
