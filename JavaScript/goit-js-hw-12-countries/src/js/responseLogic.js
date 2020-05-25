import { myAlert } from './notice';
import { renderQueryCountries, renderUniqCountry, insert } from './render';

export const responseListCheck = responseList => {
  if (responseList.length > 1 && responseList.length < 11) {
    renderQueryCountries(responseList);
    return;
  }

  if (responseList.length === 1) {
    renderUniqCountry(responseList);
    return;
  }

  if (responseList.length > 11) {
    insert('.js_countries', '');
    myAlert('Please specify you request');
    return;
  }

  myAlert("Can't find your country");
  return;
};
