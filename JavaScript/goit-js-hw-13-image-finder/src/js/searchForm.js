import { insert, deleteElem } from './services';
import { fetchData } from './request';

const searchFormContainer = document.querySelector('.js_search-form');
const showSearchFormRef = searchFormContainer.querySelector('.js_show-search');
const showSearchFormLabelRef = showSearchFormRef.querySelector(
  '.js_show-search-lable',
);

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

const onSubmit = e => {
  e.preventDefault();
  fetchData(e.target.elements.query.value);
};

showSearchFormRef.addEventListener('click', onClickShow);
