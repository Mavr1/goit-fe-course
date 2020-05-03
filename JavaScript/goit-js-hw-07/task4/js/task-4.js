"use strict";

const btnDec = document.querySelector("button[data-action='decrement']");
const btnInc = document.querySelector("button[data-action='increment']");
const counter = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

btnDec.addEventListener("click", decrement);
btnInc.addEventListener("click", increment);
