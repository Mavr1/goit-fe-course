import React from 'react';
import T from 'prop-types';

import '../friendlist/FriendList.css';

export const FriendList = ({ children }) => (
  <ul className="friend-list">{children}</ul>
);

export const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className="friendList-item" key={id}>
        {isOnline ? (
          <span className="status onLine"></span>
        ) : (
          <span className="status offLine"></span>
        )}
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
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
