"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector("body");

let startID;
const startChange = () => {
  const setColor = () => {
    let color;
    color = colors[randomIntegerFromInterval(0, 5)];
    bodyRef.style.backgroundColor = color;
  };
  startRef.setAttribute("disabled", "disabled");
  startID = setInterval(setColor, 1000);
};

const stopChange = () => {
  clearInterval(startID);
  startRef.removeAttribute("disabled", "disabled");
};

startRef.addEventListener("click", startChange);
stopRef.addEventListener("click", stopChange);
