import { countryMarkupTemplate, uniqCountryMarkupTemplate } from './markup';

export const renderQueryCountries = countriesArr => {
  const countryMarkup = countriesArr.reduce((acc, item) => {
    return (acc += countryMarkupTemplate(item.name));
  }, '');
  const countriesListRef = document.querySelector('.js_countries');
  countriesListRef.innerHTML = countryMarkup;
};

export const renderUniqCountry = countryArr => {
  const markup = uniqCountryMarkupTemplate(countryArr);
  console.log(markup);
  const countriesListRef = document.querySelector('.js_countries');
  countriesListRef.innerHTML = markup;
};
