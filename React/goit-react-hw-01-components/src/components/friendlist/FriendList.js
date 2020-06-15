import React from 'react';
import '../friendlist/FriendList.css';

export const FriendList = ({ children }) => (
  <ul class="friend-list">{children}</ul>
);

export const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li class="friendList-item" key={id}>
        {isOnline ? (
          <span class="status onLine"></span>
        ) : (
          <span class="status offLine"></span>
        )}
        <img class="avatar" src={avatar} alt="" width="48" />
        <p class="name">{name}</p>
      </li>
    ))}
  </>
);
