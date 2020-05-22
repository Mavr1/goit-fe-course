import { fetchData } from './fetchCountries';
import { debounce } from 'lodash';

const inputRef = document.querySelector('.js_input');

const debouncedInput = _.debounce(() => {
  fetchData(inputRef.value);
}, 1000);

inputRef.addEventListener('input', debouncedInput);
