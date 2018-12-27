$(document).ready(function(){
	var oldBackground="main-map";
	$(".footer-block").click(function(event) {
		$(".selector").css("left",$(this).data("percentage")+"%");
		$("."+oldBackground).removeClass('main-background');
		$("."+oldBackground).addClass('left');
		if (oldBackground=="main-settings") {
			$(".header").removeClass('show-header');
			$("."+oldBackground).removeClass('background-settings');
		}
		oldBackground="main-"+$(this).attr('id');
		$("."+oldBackground).addClass('main-background');
		if ($("."+oldBackground).hasClass('left')) {
			$("."+oldBackground).removeClass('left');
		} else {
			$("."+oldBackground).removeClass('right');
		}
		if ($(this).attr('id')=="settings") {
			$("."+oldBackground).addClass('background-settings');
			$(".header").addClass('show-header');	
		}
	});
});