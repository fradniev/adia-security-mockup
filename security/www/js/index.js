var oldBackground="main-map";
var buttonIdList=["schedule-bottom","map","tracking","infrared","settings"];
var backgroundIdList=["background-schedule-bottom","background-map","background-tracking","background-infrared","background-settings"];
var removeClassesId=["select-schedule", "select-map", "select-tracking", "select-infrared", "select-settings"];
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
document.addEventListener('deviceready', function () {

		// Is this plugin supported?
AndroidFullScreen.isSupported(successFunction, errorFunction);

// Is immersive mode supported?
AndroidFullScreen.isImmersiveModeSupported(successFunction, errorFunction);

// The width of the screen in immersive mode
AndroidFullScreen.immersiveWidth(trace, errorFunction);

// The height of the screen in immersive mode
AndroidFullScreen.immersiveHeight(trace, errorFunction);

// Hide system UI until user interacts
AndroidFullScreen.leanMode(successFunction, errorFunction);

// Show system UI
AndroidFullScreen.showSystemUI(successFunction, errorFunction);

// Extend your app underneath the status bar (Android 4.4+ only)
AndroidFullScreen.showUnderStatusBar(successFunction, errorFunction);

// Extend your app underneath the system UI (Android 4.4+ only)
AndroidFullScreen.showUnderSystemUI(successFunction, errorFunction);

// Hide system UI and keep it hidden (Android 4.4+ only)
AndroidFullScreen.immersiveMode(successFunction, errorFunction);
});
window.addEventListener('native.keyboardshow', keyboardUp);
window.addEventListener('native.keyboardhide', keyboardDown);
function goToView(id){
	var newBackground = document.getElementById(id);
	var main = document.getElementById("main");
	var header = document.getElementById("header-id");
	var selector = document.getElementById("button-select");
	if (id!=oldBackground) {
		selector.style.transform = "translate3d("+newBackground.dataset.percentage+"%,0,0)";
		switch(id){
			case "schedule-bottom":
				removeClasses(main);
				main.classList.add("select-schedule");
				removeHeaderClass(header);
			break;
			case "map":
				removeClasses(main);
				main.classList.add("select-map");
				removeHeaderClass(header);
			break;
			case "tracking":
				removeClasses(main);
				main.classList.add("select-tracking");
				removeHeaderClass(header);
			break;
			case "infrared":
				removeClasses(main);
				main.classList.add("select-infrared");
				removeHeaderClass(header);
			break;
			case "settings":
				removeClasses(main);
				main.classList.add("select-settings");
				header.classList.add('show-header');
			break;
		}
	}
	oldBackground=id;
};
function removeClasses(main){
	removeClassesId.map(item => main.classList.remove(item));
}
function removeHeaderClass(header){
	if (header.classList.contains("show-header")) {
		header.classList.remove('show-header');
	}
}
function keyboardUp(elem){
	var backSettings=document.getElementById("background-settings");
	var textAreaTop= document.body.scrollHeight+elem.keyboardHeight;
	backSettings.style.height = textAreaTop+"px";
}
function focusThis(elem){
	setTimeout(function(){
		elem.scrollIntoView(true);
	},300);
}
function keyboardDown(elem){
	var backSettings=document.getElementById("background-settings");
	backSettings.style.height = "auto";
	document.getElementById("main").scrollTo(0, 0);
}