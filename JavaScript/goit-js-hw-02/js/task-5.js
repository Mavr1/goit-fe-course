"use strict";

const checkForSpam = function (message) {
  let spamWords = ["spam", "sale"];
  let messageLow = message.toLowerCase();
  for (let spamWord of spamWords) {
    if (messageLow.includes(spamWord)) {
      return messageLow.includes(spamWord);
    }
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
