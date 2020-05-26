import { insert, deleteElem, clearElem } from './services';
import { fetchData } from './request';
import { showButton } from './pagination';

const searchFormContainer = document.querySelector('.js_search-form');
const showSearchFormRef = searchFormContainer.querySelector('.js_show-search');
const showSearchFormLabelRef = showSearchFormRef.querySelector(
  '.js_show-search-lable',
);
const galleryRef = document.querySelector('.js_gallery');

const searchFormMarkup = `
<form class="search-form" id="search-form">
<input type="text" name="query" autocomplete="off" placeholder="Search images..."/>
<button type="submit" class="js_searchFormSubmit">Search</button>
</form>`;

const onClickShow = () => {
  if (showSearchFormLabelRef.textContent === 'Show search form') {
    showSearchFormLabelRef.textContent = 'Hide search form';
    insert(searchFormContainer, searchFormMarkup);
    const form = searchFormContainer.querySelector('#search-form');
    form.addEventListener('submit', onSubmit);
    return;
  }

  const form = document.querySelector('#search-form');
  showSearchFormLabelRef.textContent = 'Show search form';
  deleteElem(form);
};

export const query = {
  request: '',
  page: 0,
};

const onSubmit = e => {
  clearElem(galleryRef);
  query.page = 1;
  query.request = e.target.elements.query.value;
  e.preventDefault();
  fetchData(query.request, query.page);
  showButton();
  e.target.reset();
};

showSearchFormRef.addEventListener('click', onClickShow);
