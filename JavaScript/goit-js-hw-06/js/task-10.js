"use strict";

import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .reduce((acc, skill) => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
      return acc;
    }, []).sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]