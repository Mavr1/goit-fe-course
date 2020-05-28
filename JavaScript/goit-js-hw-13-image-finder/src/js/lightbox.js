import * as basicLightbox from 'basiclightbox';

const galleryRef = document.querySelector('.js_gallery');

const onClickLarge = e => {
  if (e.target.nodeName !== 'IMG') return;
  const modal = basicLightbox.create(
    `
    <img src="${e.target.dataset.sourcelarge}" width="1000">
    <button class="js_modal-close">Close</button>
  `,
    {
      closable: true,
      onShow: instance => {
        instance.element().querySelector('.js_modal-close').onclick =
          instance.close;
      },
    },
  );
  modal.show();
};

galleryRef.addEventListener('click', onClickLarge);
