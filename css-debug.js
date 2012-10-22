/*

 Originally developed by: cleatsandcode
 Modified by: Branden Silva (www.brandensilva.com)

 */

$('body').prepend("<div id='viewport'><div id='sizeInfo'></div></div>");

	$viewport = $('#viewport');
	$sizeinfo = $('#sizeInfo');
	$spacer = $('<div />').css('height', $viewport.outerHeight() - 8);

	$viewport.before($spacer);

	$sizeinfo.html($(window).width() + 'px &#9666;&#9656;');
    
  $(window).resize(function () {

		 $sizeinfo.html($(window).width() + 'px &#9666;&#9656;');
  
  });

// Toggles tool on and off by using the "T" key.
$(document).keydown(function (e) {
    
    if (e.keyCode == 84 ) {
         $viewport.toggle();
         $spacer.toggle();
    }

});
