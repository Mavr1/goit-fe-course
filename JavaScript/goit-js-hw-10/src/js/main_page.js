import dishesData from '../menu.json';
import cardTemplate from '../templates/card.hbs';

const dishListRef = document.querySelector('.js-menu');

const dishListMarkup = cardTemplate(dishesData);

dishListRef.innerHTML = dishListMarkup;