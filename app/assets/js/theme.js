'use strict';
// fixes: iOS/WebKit
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
	var ios = document.getElementsByTagName('html');
	for(i = 0; i < ios.length; i++){ios[i].classList.add('is-ios')}
}

// jQuery
$(function(){
var // GLOBAL VARIABLES
	// $gObj = $(''),
	$gHtml = $('html');


// script...





// FOCUS FIELD-ICON
(function(){
	$('.b-field-icon').each(function(index, el) {
		$(this).on('focus', '.b-field-icon__field', function() {
			$(this).parent().addClass('focus');
			$(this).on('blur', function() {
				$(this).parent().removeClass('focus');
			});
		});
	});
}());


// WINDOW-LOAD
(function(){
	$(window).on('load', function() {
		$gHtml.addClass('is-ready');
	}).trigger('load');
}());


}); // END READY
