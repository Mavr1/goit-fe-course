import React from 'react';
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
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
      </li>
    ))}
  </>
);
