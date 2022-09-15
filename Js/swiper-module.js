export const swiper = new Swiper('.swiper', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    720: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
