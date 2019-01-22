$(document).ready(function(){
	document.addEventListener('deviceready', function () {
		var oldBackground="main-map";
		var buttonIdList=["schedule-bottom","map","tracking","infrared","settings"];
		var backgroundIdList=["background-schedule-bottom","background-map","background-tracking","background-infrared","background-settings"];
		function successFunction()
		{
		    console.info("It worked!");
		}
		 
		function errorFunction(error)
		{
		    console.error(error);
		}
		 
		function trace(value)
		{
		    console.log(value);
		}
		setTimeout(function(){
            /*AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN
                    , successFunction, errorFunction
            );
            AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    , successFunction, errorFunction
            );
		    AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                    , successFunction, errorFunction
            );*/
			// Extend your app underneath the status bar (Android 4.4+ only)
		    AndroidFullScreen.showUnderStatusBar();

		    // Extend your app underneath the system UI (Android 4.4+ only)
		    AndroidFullScreen.showUnderSystemUI();
		    AndroidFullScreen.immersiveMode();
		}, 2000);
		$(".footer-block").click(function(event) {
			var newBackground = $(this);
			var newBackgroundId=newBackground.attr('id');
			if (newBackgroundId!=$("."+oldBackground).attr('id')) {
			$(".selector").css("transform","translateX("+newBackground.data("percentage")+"%)");
				switch(newBackgroundId){
					case "schedule-bottom":
						$(".main-screen").addClass("select-schedule").removeClass("select-map select-tracking select-infrared select-settings");
						if ($(".header").hasClass("show-header")) {
							$(".header").removeClass('show-header');
						}
					break;
					case "map":
						$(".main-screen").addClass("select-map").removeClass("select-schedule select-tracking select-infrared select-settings");
						if ($(".header").hasClass("show-header")) {
							$(".header").removeClass('show-header');
						}
					break;
					case "tracking":
						$(".main-screen").addClass("select-tracking").removeClass("select-schedule select-map select-infrared select-settings");
						if ($(".header").hasClass("show-header")) {
							$(".header").removeClass('show-header');
						}
					break;
					case "infrared":
						$(".main-screen").addClass("select-infrared").removeClass("select-schedule select-map select-tracking select-settings");
						if ($(".header").hasClass("show-header")) {
							$(".header").removeClass('show-header');
						}
					break;
					case "settings":
						$(".main-screen").addClass("select-settings").removeClass("select-schedule select-map select-tracking select-infrared ");
						$(".header").addClass('show-header');
					break;
				}
			}
			/*if (newBackgroundId!=$("."+oldBackground).attr('id')) {
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
				}*
				if ($(this).data("position")<$("."+oldBackground).data("position")) {
					$("."+oldBackground).addClass('right');
				} else {
					$("."+oldBackground).addClass('left');
				}
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
			}*/
		});
	});
});