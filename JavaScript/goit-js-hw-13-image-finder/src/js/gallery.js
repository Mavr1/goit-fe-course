import { insert } from './services';

export const galleryMarkup = objData => {
  const markup = objData.map(item => callback(item)).join('');
  insert('.js_gallery', markup);
};

const callback = image => {
  return `<li class="gallery__item">
  <div class="photo-card">
    <img src="${image.webformatURL}" alt="${image.tags}" data-sourceLarge= "${image.largeImageURL}" width = "350"/>
    <div class="stats">
      <p class="stats-item">
        <i class="material-icons">thumb_up</i>
        ${image.likes}
      </p>
      <p class="stats-item">
        <i class="material-icons">visibility</i>
        ${image.views}
      </p>
      <p class="stats-item">
        <i class="material-icons">comment</i>
        ${image.comments}
      </p>
      <p class="stats-item">
        <i class="material-icons">cloud_download</i>
        ${image.downloads}
      </p>
    </div>
  </div>
</li>`;
};
