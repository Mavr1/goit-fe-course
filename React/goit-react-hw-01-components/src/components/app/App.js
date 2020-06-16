import React from 'react';
import styles from './App.module.css';
import Profile from '../profile/Profile';
import Statistics from '../statistics/Statistics';
import { FriendList } from '../friendlist/FriendList';
import { FriendListItem } from '../friendlist/FriendList';
import TransactionHistory from '../transactions/TransactionHistory';
import user from '../../util/user.json';
import statisticalData from '../../util/statistical-data.json';
import friends from '../../util/friends.json';
import transactions from '../../util/transactions.json';

function App() {
  return (
    <div className={styles.container}>
      <div className="task-1">
        <h2>Задание 1 - Профиль социальной сети</h2>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className="task-2">
        <h2>Задание 2 - Секция статистики</h2>
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
      <div className="task-3">
        <h2>Задание 3 - Список друзей</h2>
        <FriendList>
          <FriendListItem friends={friends} />
        </FriendList>
      </div>
      <div className="task-4">
        <h2>Задание 4 - История транзакций</h2>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
