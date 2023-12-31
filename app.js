const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    centeredSlides: 'true',

    slidesPerView: 1,
  spaceBetween: 5,
  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
      spaceBetween: 15
    },
    // when window width is >= 640px
    640: {
        
        watchSlidesProgress: true,
      slidesPerView: 2.5,
      spaceBetween: 20
    }
  }

  });