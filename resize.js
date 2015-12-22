function bgResize() {
	var	$bg              = $("#bg"),
		aspectRatio      = $bg.width() / $bg.height();

	if ( ($(window).width() / $(window).height()) < aspectRatio ) {
		$bg
			.removeClass()
			.addClass('bgwidth');
	} else {
		$bg
			.removeClass()
			.addClass('bgheight');
	}
}

$(document).ready(function() {
	$(window).resize(bgResize);
	
	bgResize();
});