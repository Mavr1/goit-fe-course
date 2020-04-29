"use strict";

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((friendsArr, user) => {
    if (user.friends.includes(friendName)) {
      friendsArr = [...friendsArr, user.name];
    }
    return friendsArr;
  }, []);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
