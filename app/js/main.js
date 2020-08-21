'use strict';

var swiper1 = new Swiper('.slider__cases', {
  slidesPerView: 1,
  spaceBetween: 90,
  navigation: {
    nextEl: '.section-header__btn-slider_next-cases',
    prevEl: '.section-header__btn-slider_prev-cases',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
      },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
      },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    2240: {
      slidesPerView: 5,
      spaceBetween: 60
    }
  }
});

var swiper2 = new Swiper('.slider-reviews', {
  // cssMode: true,
  allowTouchMove: false,

  navigation: {
    nextEl: '.section-header__btn-slider_next-reviews',
    prevEl: '.section-header__btn-slider_prev-reviews',
  },
  mousewheel: false,
  keyboard: true,
});

var swiper3 = new Swiper('.slider-reviews__cases', {
  slidesPerView: 1,
  spaceBetween: 90,
  navigation: {
    nextEl: '.slider-reviews__cases--btn_next',
    prevEl: '.slider-reviews__cases--btn_prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
      },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
      },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    2240: {
      slidesPerView: 5,
      spaceBetween: 60
    }
  },
  allowTouchMove: true,
});

var swiper4 = new Swiper('.slider__instagram', {
  slidesPerView: 1,
  spaceBetween: 90,
  navigation: {
    nextEl: '.section-header__btn-slider_next-cases',
    prevEl: '.section-header__btn-slider_prev-cases',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
      },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
      },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    2240: {
      slidesPerView: 5,
      spaceBetween: 60
    }
  }
});

var swiper5 = new Swiper('.slider__web-portfolio', {
  slidesPerView: 1,
  spaceBetween: 90,
  navigation: {
    nextEl: '.section-header__btn-slider_next-web',
    prevEl: '.section-header__btn-slider_prev-web',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
      },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
      },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    2240: {
      slidesPerView: 5,
      spaceBetween: 60
    }
  }
});

var swiper6 = new Swiper('.slider__single-service', {
  slidesPerView: 1,
  spaceBetween: 90,
  navigation: {
    nextEl: '.section-header__btn-slider_next-single-service',
    prevEl: '.section-header__btn-slider_prev-single-service',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
      },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
      },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    2240: {
      slidesPerView: 5,
      spaceBetween: 60
    }
  }
});




 









    