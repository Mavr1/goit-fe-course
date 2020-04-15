"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Введено не число");
  } else {
    numbers.push(input);
  }
} while (input !== null);

for (let number of numbers) {
  total = total + Number(number);
}

console.log(numbers);
console.log(`Общая сумма чисел: ${total}`);
