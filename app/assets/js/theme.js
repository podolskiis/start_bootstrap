/**
 * Global variables
 */
'use strict';
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
		fieldIcon: $('.b-field-icon'),
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
