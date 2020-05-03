"use strict";

const listRef = document.querySelector("#ingredients");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const insert = function (elem, items) {
  let arr = [];
  for (let i = 0; i < items.length; i += 1) {   // я думал как здесь использовать map или reduce, но не получилось
    arr[i] = document.createElement("li");
    arr[i].textContent = items[i];
    arr = [...arr, arr[i]];
  }

  elem.append(...arr);
};

insert(listRef, ingredients);
