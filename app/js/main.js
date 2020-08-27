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

var swiper = new Swiper('.post-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.post-slider-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.post-slider__nav-btn_next',
    prevEl: '.post-slider__nav-btn_prev',
  },
});

const time = 1000;
const step = 10;

function outNum(num, elem) {
  let element = document.querySelector('#' + elem);
  let number = 0;

  let t = Math.round(time/(num/step));
  let interval = setInterval(() => {
    number = number + step;
    if(number == num) {
      clearInterval(interval);
    }
    element.innerHTML = number;
  },
  t);
}



var element = document.querySelector('#target');

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    outNum(50, 'out-1');
    outNum(500, 'out-2');
    outNum(1000, 'out-3');
    outNum(3000, 'out-4');
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);



 









    