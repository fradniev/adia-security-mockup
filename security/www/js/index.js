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
	AndroidFullScreen.showUnderStatusBar();
	AndroidFullScreen.showUnderSystemUI();
	AndroidFullScreen.immersiveMode();
});
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
	var scrollTopPadding = 1.5;
	var textAreaTop= document.body.scrollHeight*scrollTopPadding;
	backSettings.style.height = textAreaTop+"px";
	elem.scrollIntoView(true);
	//document.getElementById("main").scrollTo(0, document.body.scrollHeight*scrollTopPadding);
}
function keyboardDown(elem){
	var backSettings=document.getElementById("background-settings");
	backSettings.style.height = "auto";
	document.getElementById("main").scrollTo(0, 0);
}