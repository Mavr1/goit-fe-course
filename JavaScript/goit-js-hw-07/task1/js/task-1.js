"use strict";

const liItemsRef = document.querySelectorAll(".item");
const categoriesNumber = liItemsRef.length;
console.log(`В списке ${categoriesNumber} категории.`);
console.log("");

const headingRef = document.querySelectorAll(".item h2");

// const fn = function (items) {
//   for (let item of items) {
//     console.log(item.textContent);
//     console.log(item.nextElementSibling.children.length);
//   }
// };

const fn = (items) =>
  items.forEach((item) => {
    console.log(item.textContent);
    console.log(item.nextElementSibling.children.length);
  });

fn(headingRef);
