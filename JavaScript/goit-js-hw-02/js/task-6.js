"use strict";

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Введено не число");
  }

  if (input !== null && input !== "") {
    numbers.push(input);
  }
}

if (numbers.length > 0) {
  for (let number of numbers) {
    total = total + Number(number);
  }
  console.log(`Общая сумма чисел: ${total}`);
} else {
  console.log("Массив пустой");
}

console.log(numbers);
