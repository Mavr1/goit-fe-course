"use strict";

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onDrag = () => (text.style.fontSize = `${input.value}px`);

input.addEventListener("input", onDrag);
