import React from 'react';
import T from 'prop-types';

import styles from '../friendlist/FriendList.module.css';

export const FriendList = ({ children }) => (
  <ul className="friend-list">{children}</ul>
);

export const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.friendListItem} key={id}>
        {isOnline ? (
          <span className={styles.statusOnLine}></span>
        ) : (
          <span className={styles.statusOffLine}></span>
        )}
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </>
);

FriendListItem.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
    })
  ),
};
