"use strict";

const input = document.querySelector("#validation-input");

const onLooseFocus = function () {
  if (input.value.length !== 6) {
    input.classList.contains("valid")
      ? input.classList.replace("valid", "invalid")
      : input.classList.add("invalid");
    return;
  }
  
  input.classList.contains("invalid")
    ? input.classList.replace("invalid", "valid")
    : input.classList.add("valid");
  return;
};

input.addEventListener("blur", onLooseFocus);
