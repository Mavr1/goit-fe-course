"use strict";

// const countProps = function (obj) {
//   let i = 0;
//   for (const key in obj) {
//     i += 1;
//   }
//   return i;
// };

const countProps = function (obj) {
  let objArr = [];
  objArr = Object.keys(obj);
  return objArr.length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
