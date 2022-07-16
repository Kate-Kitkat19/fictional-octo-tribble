const swiper = new Swiper('.swiper', {
  pagination: '.swiper-pagination',
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30,
  observer: 'true',
  observeParents: 'true',
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  // Navigation arrows
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});
