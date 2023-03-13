const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    scrollDirection: 'horizontal',
    simulateTouch: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });