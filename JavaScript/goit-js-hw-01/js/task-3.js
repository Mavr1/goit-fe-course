"use strict";
console.log("Задание 3");
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let password;

password = prompt("Введите пароль");

if ((password === ADMIN_PASSWORD)) {
  message = "Добро пожаловать!";
} else if ((password === null)) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен - неверный пароль!";
}
console.log(message);
console.log("");