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
			/*if (window.AndroidFullScreen) { 
				window.AndroidFullScreen.immersiveMode(); 
				AndroidFullScreen.immersiveMode(successFunction, errorFunction);
			}*/
			if (window.AndroidFullScreen) {
			    AndroidFullScreen.setSystemUiVisibility(
			    			AndroidFullScreen.SYSTEM_UI_FLAG_LAYOUT_STABLE
							| AndroidFullScreen.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
							| AndroidFullScreen.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
							| AndroidFullScreen.SYSTEM_UI_FLAG_HIDE_NAVIGATION
							| AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN
							| AndroidFullScreen.SYSTEM_UI_FLAG_IMMERSIVE
	                    , successFunction, errorFunction
	            );
				AndroidFullScreen.showUnderStatusBar();
				AndroidFullScreen.showUnderSystemUI();
			}
		}, 5000);
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