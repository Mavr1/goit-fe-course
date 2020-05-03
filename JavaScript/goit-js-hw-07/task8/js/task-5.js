"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInput = () =>
  input.value !== ""
    ? (output.textContent = input.value)
    : (output.textContent = "незнакомец");

input.addEventListener("input", onInput);

console.dir(input);
console.dir(output);
