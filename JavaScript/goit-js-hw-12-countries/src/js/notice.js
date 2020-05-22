import { error, Stack } from '@pnotify/core';

const myStack = new Stack({
  dir1: 'up',
  dir2: 'right',
});

export const myAlert = message =>
  error({
    text: message,
    type: 'error',
    sticker: false,
    maxTextHeight: null,
    delay: 4000,
    stack: myStack,
  });
