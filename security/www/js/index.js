$(document).ready(function(){
	document.addEventListener('deviceready', function () {
		var oldBackground="main-map";
		var buttonIdList=["schedule-bottom","map","tracking","infrared","settings"];
		var backgroundIdList=["background-schedule-bottom","background-map","background-tracking","background-infrared","background-settings"];
		// Extend your app underneath the status bar (Android 4.4+ only)
	    AndroidFullScreen.showUnderStatusBar();

	    // Extend your app underneath the system UI (Android 4.4+ only)
	    AndroidFullScreen.showUnderSystemUI();

	    // Hide system UI and keep it hidden (Android 4.4+ only)
	    AndroidFullScreen.immersiveMode();
		$(".footer-block").click(function(event) {
			var newBackground = $(this);
			var newBackgroundId=newBackground.attr('id');
			if (newBackgroundId!=$("."+oldBackground).attr('id')) {
				$(".selector").css("left",newBackground.data("percentage")+"%");
				$("."+oldBackground).removeClass('main-background');
				for (var i = parseInt(newBackground.attr("data-positionButton"))-1; i >= 0; i--) {
					if ($('#'+backgroundIdList[i]).hasClass('right')) {
						$('#'+backgroundIdList[i]).removeClass('right');
					}
					$('#'+backgroundIdList[i]).addClass('left');
				}
				for (var i = parseInt(newBackground.attr("data-positionButton"))+1; i <= 4; i++) {
					if ($('#'+backgroundIdList[i]).hasClass('left')) {
						$('#'+backgroundIdList[i]).removeClass('left');
					}
					$('#'+backgroundIdList[i]).addClass('right');
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
				oldBackground="main-"+newBackgroundId;
				$("."+oldBackground).addClass('main-background');
				$("."+oldBackground).removeClass('left');
				$("."+oldBackground).removeClass('right');
				if (newBackgroundId=="settings") {
					$(".main-screen").addClass('settings');
					$("."+oldBackground).addClass('background-settings');
					$(".header").addClass('show-header');	
				}
			}
		});
	});
});