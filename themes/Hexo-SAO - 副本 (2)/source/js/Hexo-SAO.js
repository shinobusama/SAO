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
 			$(".menu-inner-list").css({
 				"left":"100%",
 				"opacity":"0",
 				"width":"0"
 			});
 			$(".menu-inner-list-li").css({
 				"left":"241px",
 				"opacity":"0",
 				"width":"0"
 			});
 			$(".menu-li-a").css({
 				"opacity":"0",
 				"padding-left":"0px"
			});
 			$(".menu-icon-li-span").css(
 				"transform","scale(1)"
 			);
 			$(".menu-icon-1").css({
 				"background":"url(../images/home2_normal.png)",
 				"background-size": "30px",
				"background-repeat": "no-repeat",
				 "background-color":"#fff"
 			});
 			$(".menu-icon-2").css({
 				"background":"url(../images/apps4_normal.png)",
 				"background-size": "30px",
				"background-repeat": "no-repeat",
				"background-color":"#fff"
 			});
 			$(".menu-icon-3").css({
 				"background":"url(../images/info_normal.png)",
 				"background-size": "30px",
				"background-repeat": "no-repeat",
				"background-color":"#fff"
 			});
 			$(".menu-icon-4").css({
 				"background":"url(../images/move_normal.png)",
 				"background-size": "30px",
				"background-repeat": "no-repeat",
				"background-color":"#fff"
 			});
 			$(".menu-icon-5").css({
 				"background":"url(../images/sim_normal.png)",
 				"background-size": "30px",
				"background-repeat": "no-repeat",
				"background-color":"#fff"
 			});
 			$(".menu-icon-6").css({
 				"background":"url(../images/skills_normal.png)",
 				"background-size": "30px",
				"background-repeat": "no-repeat",
				"background-color":"#fff"
 			});
 			$(".myCanvas-li").css({
 				"right":"30px",
 				"top": "-12px",
 				"opacity":"0",
 				"transition-delay":"0"
 			})
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
 			$(".menu-inner-list").css({
 				"left":"0",
 				"opacity":"1",
 				"width":"100%"
 			});
 			$(".menu-inner-list-li").css({
 				"left":"1px",
 				"opacity":"1",
 				"width":"240px"
 			});
 			$(".menu-li-a").css({
 				"opacity":"1",
 				"padding-left":"20px"
			});
 			$(".menu-icon-li-span").css({
 				"transform":"scale(0.7)",
 				"background":"#fff"
 			});
 			$(".myCanvas-li").css({
 				"right":"30px",
 				"top": "-12px",
 				"opacity":"1",
 				"width":"100%"
 			})
 			menuBoolean = !menuBoolean;	
 		}
 	});
 	setTimeout(function(){
 		$(".linkstart").css({
 			"opacity":"0",
 			"z-index":"1"
 		});
 		$(".welcome").css(
 			"transform","scaleX(0)"
 		);
 		$(".spinner-container").css(
 			"animation-play-state","paused"
 		)
 	},2000)
});