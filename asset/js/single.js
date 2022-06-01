const thumbSwiper = new Swiper(".thumbSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const MainSwiper = new Swiper(".mainSwiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-single-next",
    prevEl: ".swiper-button-single-prev",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
});
