$(document).ready(function() {
	$('.ryu').mouseenter (function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
		.mouseleave(function() {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		});
	$('.ryu').mousedown(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		
		/* Hiding ready state and moving to throwing */
		/* Play hadouken sound */
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		/* Ryu goes back to his ready position */
		});
});

