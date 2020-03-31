"use strict";
console.log("Задание 4");

const credits = 23580;
const pricePerDroid = 3000;
let droidQuantity;
let totalPrice;
let balance;
let message;

droidQuantity = prompt(
  "Введите количество дроидов, которые вы хотите приобрести"
);

totalPrice = droidQuantity * pricePerDroid;
balance = credits - totalPrice;

if (droidQuantity === null) {
  message = "Отменено пользователем!";
} else if (totalPrice <= credits && droidQuantity > -1) {
  message = `Вы купили ${droidQuantity} дроидов, на счету осталось ${balance} кредитов.`;
} else {
  message = "Недостаточно средств на счету!";
}

console.log(message);
console.log("");
