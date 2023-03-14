const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    scrollDirection: 'horizontal',
    simulateTouch: true,
    loopFillGroupWithBlank: true,
    loop: true,
    loopedSlides: 4,
    slideToClickedSlide: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1
        },

        696: {
            slidesPerView: 2
        },

        1030: {
            slidesPerView: 3
        }
    }
  });