// menu
$(document).ready(function(){
	var menuBoolean = false;
 	$(".menu-button").click(function() {
 		/* Act on the event */
 		if(menuBoolean){
 			$(".menu-button").css({
 				"opacity":"0.5",
 				"transform":"scale(1)"
 			});
 			$("#menu-outer").css({
 				"transform":"translate3d(-260px,0,0)",
 				"opacity":"0.5"
 			});
 			$(".menu-inner-list-li").css({
 				"width":"0px"
 			});
 			$(".menu-li-a").css({
 				"opacity":"0",
 				"padding-left":"0px"
			});
 			$(".menu-icon-li-span").css(
 				"opacity","1"
 			);
 			$(".myCanvas-cicle").css(
 				"transform","scale(0)"
 			);
 			$(".myCanvas").css(
 				"opacity","0"
 			)
 			menuBoolean = !menuBoolean;	
 		}else {
 			$(".menu-button").css({
 				"opacity":"1",
 				"transform":"scale(1.4)"
 			});
 			$("#menu-outer").css({
 				"transform":"translate3d(0,0,0)",
 				"opacity":"1"
 			});
 			$(".menu-inner-list-li").css({
 				"width":"240px"
 			});
 			$(".menu-li-a").css({
 				"opacity":"1",
 				"padding-left":"20px"
			});
 			$(".menu-icon-li-span").css(
 				"opacity","0"
 			);
 			$(".myCanvas-cicle").css(
 				"transform","scale(1)"
 			);
 			$(".myCanvas").css(
 				"opacity","1"
 			)
 			menuBoolean = !menuBoolean;	
 		}
 	});
});