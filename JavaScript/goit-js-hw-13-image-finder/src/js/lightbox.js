import * as basicLightbox from 'basiclightbox';

const galleryRef = document.querySelector('.js_gallery');

const onClickLarge = e => {
  if (e.target.nodeName !== 'IMG') return;
  console.dir(e.target);
  const modal = basicLightbox.create(`
    <img src="${e.target.dataset.sourcelarge}" width="1000">
  `);
  modal.show();
};

galleryRef.addEventListener('click', onClickLarge);
