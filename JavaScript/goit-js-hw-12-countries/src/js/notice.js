import { error, Stack } from '@pnotify/core';

const myStack = new Stack({
  dir1: 'up',
  dir2: 'right',
});

export const myAlert = () =>
  error({
    text: "I'm an alert.",
    type: 'error',
    sticker: false,
    maxTextHeight: null,
    delay: 4000,
    stack: myStack,
  });
