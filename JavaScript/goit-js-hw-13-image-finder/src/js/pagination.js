import { fetchData } from './request';
import { query } from './searchForm';

const moreButtonRef = document.querySelector('.js_view-more-button');

export const showButton = () => {
  moreButtonRef.classList.replace('hide', 'show');
};

export const pageIncr = () => {
  query.page += 1;
};

const onclickMore = () => {
  pageIncr();
  fetchData(query.request, query.page);
};

moreButtonRef.addEventListener('click', onclickMore);
