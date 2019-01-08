$(document).ready(function(){
	var oldBackground="main-map";
	$(".footer-block").click(function(event) {
		if ($(this).attr('id')!=$("."+oldBackground).attr('id')) {
			$(".selector").css("left",$(this).data("percentage")+"%");
			$("."+oldBackground).removeClass('main-background');
			for (var i = parseInt($(this).attr("data-positionButton"))-1; i >= 0; i--) {
				if ($('*[data-position="'+i+'"]').hasClass('right')) {
					$('*[data-position="'+i+'"]').removeClass('right');
				}
				$('*[data-position="'+i+'"]').addClass('left');
			}
			for (var i = parseInt($(this).attr("data-positionButton"))+1; i <= 5; i++) {
				if ($('*[data-position="'+i+'"]').hasClass('left')) {
					$('*[data-position="'+i+'"]').removeClass('left');
				}
				$('*[data-position="'+i+'"]').addClass('right');
			} 
			/*if ($(this).data("position")<$("."+oldBackground).data("position")) {
				$("."+oldBackground).addClass('right');
			} else {
				$("."+oldBackground).addClass('left');
			}*/
			if (oldBackground=="main-settings") {
				$(".main-screen").removeClass('settings');
				$(".header").removeClass('show-header');
				$("."+oldBackground).removeClass('background-settings');
			}
			oldBackground="main-"+$(this).attr('id');
			$("."+oldBackground).addClass('main-background');
			$("."+oldBackground).removeClass('left');
			$("."+oldBackground).removeClass('right');
			if ($(this).attr('id')=="settings") {
				$(".main-screen").addClass('settings');
				$("."+oldBackground).addClass('background-settings');
				$(".header").addClass('show-header');	
			}
		}
	});
});