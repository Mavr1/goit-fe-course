"use strict";

const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const addLogin = function (allLogins, login) {
  const isLoginValid = function (login) {
    if (login.length > 3 && login.length < 16) {
      return true;
    }
    return false;
  };

  const isLoginUnique = function (allLogins, login) {
    for (let loginIncom of allLogins) {
      if (loginIncom === login) {
        return false;
      }
    }
    return true;
  };

  if (isLoginValid(login) === false) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  if (isLoginUnique(allLogins, login) === false) {
    return "Такой логин уже используется!";
  }

  allLogins.push(login);
  return "Логин успешно добавлен!";
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(allLogins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(allLogins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(allLogins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(allLogins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
