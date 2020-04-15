"use strict";

const findLongestWord = function (string) {
  let maxLength = 0;
  let maxWord = "";
  for (let item of string.split(" ")) {
    if (item.length > maxLength) {
      maxLength = item.length;
      maxWord = item;
    }
  }
  return maxWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
