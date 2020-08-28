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
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.post-slider__nav-btn_next',
    prevEl: '.post-slider__nav-btn_prev',
  },
});


var counter = $('.label-wgt__active-num');
counter.html('01');
var totalNum = $('.label-wgt__total-num');
var total = $('.swiper-slide').length;
if(total < 10){
  total = '0' + total;
}
totalNum.html(total);
swiper.on('transitionStart', function () {
  var index = this.activeIndex + 1;
  if(index < 10){
    index = '0' + index;
  }
  counter.html(index);
});

// var time = 1000;
// var step = 10;

// function outNum(elems) {
//   var elements = document.querySelectorAll(elems);
//   var numbers = [];
//   var nums = [];
//   for(var i = 0; i < elements.length; i++){
//     nums.push(elements[i].dataset.num);
//     var t = Math.round(time/(nums[i]/step));
//     function test(i){
//     var interval = setInterval(function(){
//       numbers[i] = numbers[i] + step;
//       if(numbers[i] == nums[i]) {
//         clearInterval(interval);
//       }
//       elements[i].innerHTML = numbers[i];
//     },
//     t);
//   }test(i);
//   }
// }



// var element = document.querySelector('.advantages-points');
// function visible () {
//   // Все позиции элемента
//   var targetPosition = {
//       top: window.pageYOffset + element.getBoundingClientRect().top,
//       left: window.pageXOffset + element.getBoundingClientRect().left,
//       right: window.pageXOffset + element.getBoundingClientRect().right,
//       bottom: window.pageYOffset + element.getBoundingClientRect().bottom
//     },
//     // Получаем позиции окна
//     windowPosition = {
//       top: window.pageYOffset,
//       left: window.pageXOffset,
//       right: window.pageXOffset + document.documentElement.clientWidth,
//       bottom: window.pageYOffset + document.documentElement.clientHeight
//     };
    
//   if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//     targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//     targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//     targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//     // Если элемент полностью видно, то запускаем следующий код
//         outNum('.advantages-counter');
//         window.removeEventListener('scroll', visible);
//   } else {
//     // Если элемент не видно, то запускаем этот код
//     console.clear();
//   };
// };

// // Запускаем функцию при прокрутке страницы
// window.addEventListener('scroll', visible);

// // А также запустим функцию сразу. А то вдруг, элемент изначально видно
// visible ();

// var number = document.querySelectorAll('.advantages-counter'),
//     numberTop = number.getBoundingClientRect().top,
//     start = +number.innerHTML, end = +number.dataset.max;

// window.addEventListener('scroll', function onScroll() {
//     if(window.pageYOffset > numberTop - window.innerHeight / 2 ) {
//       this.removeEventListener('scroll', onScroll);
//       var interval = setInterval(function() {
//         number.innerHTML = ++start;
//         if(start == end) {
//           clearInterval(interval);
//         }
//       }, 5);
//     });
// });


// for ( let i of document.querySelectorAll(".advantages-counter") ) {

//   let numberTop = i.getBoundingClientRect().top,
//       start = +i.innerHTML,
//       end = +i.dataset.max;

//   window.addEventListener('scroll', function onScroll() {
//     if(window.pageYOffset > numberTop - window.innerHeight / 1) {
//       this.removeEventListener('scroll', onScroll);
//       let interval = this.setInterval(function() {
//         i.innerHTML = ++start;
//         if(start == end) {
//           clearInterval(interval);
//         }
//     }, 5);
//     }
//   });
// }

(function($){
	$(document).ready(function() {
		// Code
    $(function () { 
      var target_block = $(".section-about"); // Ищем блок 
      var blockStatus = true;  
      $(window).scroll(function() { 
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height())); 
        if(scrollEvent && blockStatus) {  
          blockStatus = false; 
          $('.advantages-counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 2500,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
          
            });  
            
            
          
          });
        } 
      }); 
    }); 

    $(function(){
      $('#services-btn').hover(function(){
        $('.mega-menu').addClass('active'); //показываем всплывающее окно
      });
      $('.mega-menu__link').mouseleave(function() {
        $('.mega-menu').removeClass('active');
      });
    });

	});
})(jQuery);









    