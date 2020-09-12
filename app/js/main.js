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

(function ($) {
  var defaults = {
    topOffset: 200,
    hideDuration: 200,
    stickyClass: 'header_sticky'
  };

  $.fn.stickyHeader = function (options) {
    if (this.length == 0) return this;

    var self = this,
      settings,
      isFixed = false,
      stickyClass,
      animation = {
        normal: self.css('animationDuration'),
        reverse: '',
        getStyle: function (type) {
          return {
            animationDirection: type,
            animationDuration: this[type]
          };
        }
      };

    function init() {
      settings = $.extend({}, defaults, options);
      animation.reverse = settings.hideDuration + 'ms';
      stickyClass = settings.stickyClass;
      $(window).on('scroll', onScroll).trigger('scroll');
    }

    function onScroll() {
      if (window.pageYOffset > settings.topOffset) {
        if (!isFixed) {
          isFixed = true;
          self.addClass(stickyClass)
            .css(animation.getStyle('normal'));
        }
      } else {
        if (isFixed) {
          isFixed = false;

          self.removeClass(stickyClass)
            .each(function (index, e) {
              void e.offsetWidth;
            })
            .addClass(stickyClass)
            .css(animation.getStyle('reverse'));

          setTimeout(function () {
            self.removeClass(stickyClass);
          }, settings.hideDuration);
        }
      }
    }
    init();
    return this;
  }
  $('.header').stickyHeader();
})(jQuery);

function MobileMenu(selectorBtn, selectorMenu) {
  this.burgerBtn = $(selectorBtn);
  this.burgerMenu = $(selectorMenu);
  this.ifResize = function (that) {
    if ($(window).width() >= '992') {
      if ($(that.burgerMenu).hasClass('header__nav_active')) {
        $(that.burgerMenu).removeClass('header__nav_active');
        $(that.burgerMenu).css('display', '');
      } else if ($(that.burgerMenu).hasClass('header__nav_hidden')) {
        $(that.burgerMenu).removeClass('header__nav_hidden');
      }
    }
  }
  this.setBurgerNone = function () {
    var menuEl = $(this.burgerMenu);
    setTimeout(function () {
      $(menuEl).css('display', '');
    }, 500);
  }
  this.checkStatusMenu = function (status) {
    if (status) {
      $(this.burgerMenu).removeClass('header__nav_active');
      $(this.burgerMenu).addClass('header__nav_hidden');
      this.setBurgerNone();
    } else {
      $(this.burgerMenu).show();
      if ($(this.burgerMenu).hasClass('header__nav_hidden')) {
        $(this.burgerMenu).removeClass('header__nav_hidden');
      }
      $(this.burgerMenu).addClass('header__nav_active');
    }
  };
  this.handlerOpenMenu = function (that) {
    var isOpen = $(that.burgerMenu).hasClass('header__nav_active');
    $(window).resize(that.ifResize.bind(null, that));
    that.checkStatusMenu(isOpen);
  }
  this.burgerBtn.click(this.handlerOpenMenu.bind(null, this));
}
var mobileMenu = new MobileMenu('.btn-burger', '.header__nav');

(function ($) {
  function Accordion(selector) {
    var accordion = $(selector);
    this.allItemsHeader = $(accordion).find('.accordion-header');
    this.allItemsContent = $(accordion).find('.accordion-content');
    this.allItemsHeader.click(function () {
      var activeItem = $(accordion).find('.accordion-item.active');
      if ($(this).closest('.accordion-item').hasClass('active')) {
        $(this).closest('.accordion-item').find('.accordion-content').slideUp();
        $(this).closest('.accordion-item').removeClass('active');
      } else {
        var item = $(this).closest('.accordion-item');
        item.addClass('active');
        item.find('.accordion-content').slideDown();
        $(activeItem).find('.accordion-content').slideUp();
        $(activeItem).removeClass('active');
      }

    });
    this.allItemsContent.hide();
    this.init = function () {
      var activeItem = $(accordion).find('.accordion-item.active');
      if ($(activeItem)) {
        $(activeItem).find('.accordion-content').show();
      }
    };
    this.init();
  }
  var faqAccordion = new Accordion('.faq-accordion');

  // function menuAccordion(selector) {
  //   var accordion = $(selector);
  //   this.allItemsHeader = $(accordion).find('.mega-menu__title');
  //   this.allItemsContent = $(accordion).find('.mega-list_mob');
  //   this.allItemsHeader.click(function () {
  //     var activeItem = $(accordion).find('.mega-menu__wgt.active');
  //     if ($(this).closest('.mega-menu__wgt').hasClass('active')) {
  //       $(this).closest('.mega-menu__wgt').find('.mega-list_mob').slideUp();
  //       $(this).closest('.mega-menu__wgt').removeClass('active');
  //     } else {
  //       var item = $(this).closest('.mega-menu__wgt');
  //       item.addClass('active');
  //       item.find('.mega-list_mob').slideDown();
  //       $(activeItem).find('.mega-list_mob').slideUp();
  //       $(activeItem).removeClass('active');
  //     }

  //   });
  //   this.allItemsContent.hide();
  //   this.init = function () {
  //     var activeItem = $(accordion).find('.mega-menu__wgt.active');
  //     if ($(activeItem)) {
  //       $(activeItem).find('.mega-list').show();
  //     }
  //   };
  //   this.init();
  // }
  // var menuAccordion = new menuAccordion('.mega-menu__wrap');
})(jQuery);


$(".custom-select").each(function () {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
  template += '<div class="custom-options">';
  $(this).find("option").each(function () {
    template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
  });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
  $(this).parents(".custom-options").addClass("option-hover");
}, function () {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
  $('html').one('click', function () {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function () {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});

(function ($) {
  $(document).ready(function () {
    // Code
    $(function () {
      // if ($('body').hasClass('section-about')) {
      var target_block = $(".section-about"); // Ищем блок 
      var blockStatus = true;
      $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
          blockStatus = false;
          $('.advantages-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-count');

            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },

              {

                duration: 2500,
                easing: 'linear',
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
                }

              });



          });
        }
      });

    });

    $(function () {
      $('#services-btn').hover(function () {
        $('.mega-menu').addClass('active');
        $('.mega-menu').removeClass('mega-menu_slideOut');
        $('.mega-menu').addClass('mega-menu_slideIn');
      });
      // $('mega-menu__close-btn').click(function () {
      //   $('.mega-menu').removeClass('active');
      //   $('.mega-menu').removeClass('slideIn');
      //   $('.mega-menu').addClass('slideOut');
      // });
      $('.mega-menu__link').mouseleave(function () {
        $('.mega-menu').removeClass('active');
      });

      $(".mega-menu .mega-menu__close-btn").click(function () {
        $(this).parent().removeClass('active');
        $(this).parent().removeClass('mega-menu_slideIn');
        $(this).parent().addClass('mega-menu_slideOut');
      })
    });
  });


})(jQuery);

// jQuery extend functions for popup
(function ($) {
  $.fn.openPopup = function (settings) {
    var elem = $(this);
    // Establish our default settings
    var settings = $.extend({
      anim: 'fade'
    }, settings);
    elem.show();
    elem.find('.popup-content').addClass(settings.anim + 'In');
  }

  $.fn.closePopup = function (settings) {
    var elem = $(this);
    var overlay = $('.popup-overlay');
    $(overlay).remove();
    $(elem).removeClass('active');
    // Establish our default settings
    var settings = $.extend({
      anim: 'fade'
    }, settings);
    elem.find('.popup-content').removeClass(settings.anim + 'In').addClass(settings.anim + 'Out');

    setTimeout(function () {
      elem.hide();
      elem.find('.popup-content').removeClass(settings.anim + 'Out')
    }, 500);
  }

  $.fn.popupAnim = function (elem) {
    $('body').css('overflow', '');
    return (!$(this).attr('data-animation') || $(this).data('animation') == null) ? 'fade' : $(this).data('animation');
  }


}(jQuery));

$('.open-popup').click(function () {
  $('#' + $(this).data('id')).addClass('active');
  $('#' + $(this).data('id')).openPopup({
    anim: $(this).popupAnim(this)
  });
  $('body').css('overflow', 'hidden');
  $('body').append('<div class="popup-overlay"></div>');
  $(document).mouseup(function (e) {
    var div = $(".popup-content");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('#' + $(div).closest('.popup.active').attr('id')).closePopup({
        anim: $(div).closest('.popup.active').popupAnim($(div).closest('.popup.active'))
      });
    }
  });
});
$('.close-popup, .accept-popup').click(function () {
  $('#' + $(this).closest('.popup').attr('id')).closePopup({
    anim: $(this).popupAnim(this)
  });
});


//Ticker

(function ($) {
  var raf = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (cb) {
    setTimeout(cb, 1000 / 30)
  };
  var ticker = $('.tickerlist');
  $(ticker).each(function (index, elem) {
    var tickerItem = $(elem).find('.tickeritem');
    var itemCount = $(tickerItem).length;
    var tickertWidth = 0;
    var margin = 0;
    var marginMaxVel = 2;
    var marginVel = marginMaxVel;
    var marginAcc = .1;

    function setupTicker() {

      for (var i = 0; i < itemCount; i++) {
        var itemWidth = tickerItem.eq(i).outerWidth();
        tickertWidth = tickertWidth + itemWidth;
      }
      $(elem).css('width', tickertWidth * 2);

      tickerItem.clone().prependTo($(elem));
    }

    function initializeTicker() {
      setupTicker();
      animate();

      $(elem).on('mouseover', function () {
        marginAcc = -.2;
      }).on('mouseout', function () {
        marginAcc = .2;
      });
    }

    function animate() {
      if ($(elem).closest('.ticker').hasClass('ticker-services_right')) {
        $(elem).css('margin-right', margin);
      }
      if ($(elem).closest('.ticker').hasClass('ticker-services_left')) {
        $(elem).css('margin-left', margin);
      }

      marginVel += marginAcc;
      if (marginVel >= marginMaxVel) marginVel = marginMaxVel;
      if (marginVel <= 0) marginVel = 0;

      margin -= marginVel;
      if (margin <= -tickertWidth) {
        margin = 0;
      }
      raf(animate);
    }

    initializeTicker();
  });

})(jQuery);

(function ($) {
  $('.order-form__datepicker').datepicker();
})(jQuery);

//Radio counter

$(document).ready(function () {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});


/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 3000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});