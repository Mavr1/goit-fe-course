"use strict";

import galleryItems from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".lightbox");
const modalLightboxRef = modalRef.querySelector(".lightbox__content");
const modalImgRef = modalRef.querySelector(".lightbox__image");
const closeModalBtnRef = modalRef.querySelector(
  "button[data-action='close-lightbox']"
);

const createMarkup = (dataObj) => {
  return dataObj.reduce((markup, item, index) => {
    markup += `<li class="gallery__item">
        <a
        class="gallery__link"
        href="${item.original}"
        >
        <img
        class="gallery__image"
        src="${item.preview}"
      data-source="${item.original}"
      data-number="${index}"
      alt="${item.description}"
      />
      </a>
      </li>`;
    return markup;
  }, "");
};

const addMarkup = (elem, markup) => {
  elem.insertAdjacentHTML("beforeend", markup);
};

let currentImgNumber;
const onClickImagePreview = (event) => {
  event.preventDefault();
  const imgOriginalSource = event.target.dataset.source;
  const imgAlt = event.target.getAttribute("alt");
  currentImgNumber = Number(event.target.dataset.number);
  if (event.target.nodeName !== "IMG") return;
  modalImgRef.setAttribute("src", imgOriginalSource);
  modalImgRef.setAttribute("alt", imgAlt);
  modalRef.classList.add("is-open");
  modalLightboxRef.addEventListener("click", onClickModalLightbox);
  closeModalBtnRef.addEventListener("click", onClickModalCloseBtn);
  window.addEventListener("keydown", onModalEsc);
  window.addEventListener("keydown", onModalNext);
  window.addEventListener("keydown", onModalPrev);
};

const closeModal = () => {
  modalRef.classList.remove("is-open");
  modalImgRef.setAttribute("src", "");
  modalRef.removeEventListener("click", onClickModalLightbox);
  closeModalBtnRef.removeEventListener("click", onClickModalCloseBtn);
  window.removeEventListener("keydown", onModalEsc);
  window.removeEventListener("keydown", onModalNext);
  window.removeEventListener("keydown", onModalPrev);
};

const onClickModalCloseBtn = () => closeModal();

const onClickModalLightbox = (event) =>
  event.target === event.currentTarget && closeModal();

const onModalEsc = (event) => event.code === "Escape" && closeModal();

const modalFlip = (futureImg) => {
  const imgAlt = futureImg.getAttribute("alt");
  const imgOriginalSource = futureImg.dataset.source;
  modalImgRef.setAttribute("src", imgOriginalSource);
  modalImgRef.setAttribute("alt", imgAlt);
};

const onModalNext = (event) => {
  const allImgs = [...document.querySelectorAll(".gallery__image")];
  if (event.code === "ArrowRight" && currentImgNumber < allImgs.length - 1) {
    const nextImg = allImgs.find(
      (img) => Number(img.dataset.number) === currentImgNumber + 1
    );
    currentImgNumber += 1;
    modalFlip(nextImg);
  }
};

const onModalPrev = (event) => {
  const allImgs = [...document.querySelectorAll(".gallery__image")];
  if (event.code === "ArrowLeft" && currentImgNumber > 0) {
    const prevImg = allImgs.find(
      (img) => Number(img.dataset.number) === currentImgNumber - 1
    );
    currentImgNumber -= 1;
    modalFlip(prevImg);
  }
};

const galleryMarkup = createMarkup(galleryItems);

addMarkup(galleryRef, galleryMarkup);

galleryRef.addEventListener("click", onClickImagePreview);
