"use strict";

let array = [];

const logItems = function (array) {
  for (const item of array) {
    const position = array.indexOf(item) + 1;
    console.log(`${position} - ${item}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
console.log("");

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
