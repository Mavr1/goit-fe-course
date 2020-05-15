import { load } from './services';
import { save } from './services';

const toggleTheme = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const setTheme = themeToSet => {
  body.classList.remove(load('theme'));
  body.classList.add(themeToSet);
  themeToSet === theme.DARK && (toggleTheme.checked = true);
  save('theme', themeToSet);
};

(() => {
  if (load('theme')) {
    setTheme(load('theme'));
    return;
  }
  setTheme(theme.LIGHT);
})();

const onThemeSwitch = () => {
  if (load('theme') === theme.LIGHT) {
    setTheme(theme.DARK);
    return;
  }
  setTheme(theme.LIGHT);
};

toggleTheme.addEventListener('change', onThemeSwitch);
