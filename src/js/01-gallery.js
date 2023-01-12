import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const getGallery = document.querySelector('.gallery');

const getGalleryItems = galleryItems.map(({ preview, original, description }) => {
   console.log(preview);
   return `<a class="gallery__item"  href="${original}">
               <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
               />
         </a>`
}).join('');
getGallery.insertAdjacentHTML("afterbegin", getGalleryItems);

var lightbox = new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
 });