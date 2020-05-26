export const insert = (element, markup) => {
  if (typeof element === 'object') {
    element.insertAdjacentHTML('beforeend', markup);
    return;
  }

  document.querySelector(`${element}`).insertAdjacentHTML('beforeend', markup);
};

export const deleteElem = element => {
  if (typeof element === 'object') {
    element.outerHTML = '';
    return;
  }

  const parent = document.querySelector(`${element}`);
  parent.outerHTML = '';
};

export const clearElem = element => {
  if (typeof element === 'object') {
    element.innerHTML = '';
    return;
  }

  const parent = document.querySelector(`${element}`);
  parent.innerHTML = '';
};
