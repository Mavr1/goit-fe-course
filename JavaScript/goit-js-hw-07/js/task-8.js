"use strict";

const input = document.querySelector("#controls").children[0];
const creatBtn = document.querySelector("button[data-action='render'");
const clearBtn = document.querySelector("button[data-action='destroy'");
const boxes = document.querySelector("#boxes");

const createBoxes = function (amount) {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    arr[i] = document.createElement("div");
    arr[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    arr[i].style.height = `${30 + i * 10}px`;
    arr[i].style.width = `${30 + i * 10}px`;
    arr = [...arr, arr[i]];
  }
  boxes.append(...arr);
  input.value = null;
};

const destroyBoxes = () => (boxes.innerHTML = "");

creatBtn.addEventListener("click", () => createBoxes(input.value));
clearBtn.addEventListener("click", destroyBoxes);
