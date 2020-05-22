import { myAlert } from './notice';
import { renderQueryCountries, renderUniqCountry } from './render';

export const responseListCheck = responseList => {
  if (responseList.length > 1 && responseList.length < 11) {
    renderQueryCountries(responseList);
    return;
  }

  if (responseList.length === 1) {
    renderUniqCountry(responseList);
    return;
  }

  return myAlert();
};
