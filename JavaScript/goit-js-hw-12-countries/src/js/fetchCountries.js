import { renderQueryCountries } from './render';
import { responseListCheck } from './responseLogic';

export const fetchData = country => {
  const baseUrl = 'https://restcountries.eu/';
  const bodyFetch = 'rest/v2/name/';
  fetch(baseUrl + bodyFetch + country)
    .then(response => response.json())
    .then(data => responseListCheck(data));
};
