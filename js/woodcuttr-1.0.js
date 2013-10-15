/*

Originally developed by: cleatsandcode
Modified by: Branden Silva (www.brandensilva.com)

 */

$(window).load(function() {

	$('body').prepend("<div id='viewport'><div id='ruler'><span class='small'></span></div><div id='sizeInfo'></div></div>");


	/* Offsets used for inconsistent browser view port calculations */
	webkitoffset = 15;
	offset = 17;
	
	$viewport = $('#viewport');
	$sizeinfo = $('#sizeInfo');
	$spacer = $('<div />').css('height', $viewport.outerHeight());

	$viewport.before($spacer);

	
	if ($(document).height() > $(window).height() && ($.browser.mozilla || $.browser.msie)) {

		$sizeinfo.html($(window).width() + offset + 'px &#9666;&#9656;');

	} else {

		$sizeinfo.html($(window).width() + webkitoffset + 'px &#9666;&#9656;');

	}
	    
	/* 
	Firefox & IE calculate window size differently than Webkit Browsers when a scrollbar is present. 
	The below code normalizes the viewport sizes across all browsers so the tool functions properly. 

	Check if scrollbar exists & if the browser is Firefox or IE. Then resize calculated window width
	with offset if Firefox or IE. */

  $(window).resize(function () {

		if ($(document).height() > $(window).height() && ($.browser.mozilla || $.browser.msie)) {

			$sizeinfo.html($(window).width() + offset + 'px &#9666;&#9656;');
		
		} else {

			$sizeinfo.html($(window).width() + webkitoffset + 'px &#9666;&#9656;');
		}

  });

	/* Toggle viewport and spacer div on/off with the 'T' key */
	$(document).keydown(function (e) {

	    if (e.keyCode == 84) {
	         $viewport.toggle();
	         $spacer.toggle();
	    }
	});

});