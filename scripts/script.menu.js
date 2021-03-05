$(document).ready(function(){
	$('.black_bars').click(function(){
		$('.link_for_mobile_menu').toggle(500);
	});
	$('.scale_img').click(function(){
		$(this).css("transform", "scale(1.2, 1.2)");
	});
	$('.scale_img').mouseleave(function(){
		$(this).css("transform", "scale(1, 1)");
	});
});
