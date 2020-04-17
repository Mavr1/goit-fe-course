"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.table(user);

console.log("")

const array = Object.keys(user);
for (const item of array) {
    console.log(item, ":", user[item])
}
