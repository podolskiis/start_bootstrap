'use strict';

/**
 * Global variables
 */
var userAgent = navigator.userAgent.toLowerCase(),
  initialDate = new Date(),

  $document = $(document),
  $window = $(window),
  $html = $('html'),

  isIE = userAgent.indexOf('msie') != -1 ? parseInt(userAgent.split('msie')[1]) : userAgent.indexOf('trident') != -1 ? 11 : userAgent.indexOf('edge') != -1 ? 12 : false,
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent),
  isTouch = 'ontouchstart' in window,

  plugins = {
    fieldIcon:        $('.b-field-icon'),
    bsModal:          $('[data-toggle="modal"]'),
  };

/**
 * iOS/WebKit
 * @description: fixes on iOS devices
 */
if (isIos) {
  var b = document.getElementsByTagName('html');
  for (var i = 0; i < b.length; i++) b[i].classList.add('is-ios');
}

/**
 * isScrolledIntoView
 * @description: check the element whas been scrolled into the view
 */
function isScrolledIntoView(elem) {
  return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
}

/**
 * Initialize All Scripts
 */
$document.ready( function () {





// BS-MODAL
if (plugins.bsModal.length) {
  (function(){
    var $b = plugins.bsModal;
    $('.modal').on('show.bs.modal', function (e) {
      $('body').addClass('modal-open modal-open--'+$(this).attr('id'));
      $b.addClass('active');
    })
    .on('hidden.bs.modal', function (e) {
      $('body').removeClass('modal-open modal-open--'+$(this).attr('id'));
      $b.removeClass('active');
    });
    $b.on('click', function(event) {
      if ($(this).is('[data-close="previous-modal"]')) {
        $('.modal').modal('hide');
      }
    });
  }());
}


// Focus field-icon
if (plugins.fieldIcon.length) {
  plugins.fieldIcon.each(function(index, el) {
    $(this).on('focus', '.b-field-icon__field', function() {
      $(this).parent().addClass('focus');
      $(this).on('blur', function() {
        $(this).parent().removeClass('focus');
      });
    });
  });
}


}); // END READY
