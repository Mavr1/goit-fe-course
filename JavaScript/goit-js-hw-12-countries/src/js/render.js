import { countryMarkupTemplate, uniqCountryMarkupTemplate } from './markup';

export const insert = (element, markup) => {
  const countriesListRef = document.querySelector(`${element}`);
  countriesListRef.innerHTML = `${markup}`;
};

export const renderQueryCountries = countriesArr => {
  const countryMarkup = countriesArr.reduce((acc, item) => {
    return (acc += countryMarkupTemplate(item.name));
  }, '');
  insert('.js_countries', countryMarkup);
};

export const renderUniqCountry = countryArr => {
  const markup = uniqCountryMarkupTemplate(countryArr);
  console.log(markup);
  insert('.js_countries', markup);
};
