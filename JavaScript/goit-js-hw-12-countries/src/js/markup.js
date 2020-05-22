export const countryMarkupTemplate = countryName => `<li>${countryName}</li>`;

export const uniqCountryMarkupTemplate = ([
  { name, capital, population, languages, flag },
]) => {
  return `<img class = "flag" width = "400" src="${flag}" alt="flag of {name}">
<h2 class="js_name">${name}</h2>
<p class="js_capital">${capital}</p>
<p class="js_population">${population}</p>
<ul class="js_languages">
${languages.reduce((acc, item) => {
  acc += `<li class="languages-item">${item.name}</li>`;
  return acc;
}, '')}
</ul>
`;
};
