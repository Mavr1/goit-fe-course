import { galleryMarkup } from './gallery';

export const fetchData = (request, page) => {
  const baseUrl = 'https://pixabay.com/';
  const bodyFetch = `api/?image_type=photo&orientation=horizontal&q=${request}&page=${page}&per_page=12&key=`;
  const key = '16728948-c39c5dcc25e25d8fd8d200637';
  fetch(baseUrl + bodyFetch + key)
    .then(response => response.json())
    .then(data => galleryMarkup(data.hits));
};
