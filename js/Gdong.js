$(function() {
	$(document).scroll(function() {
//		获取滚动距离
		var Stop = $(document).scrollTop();
//		获取屏幕高度
		var Cheight = $(window).height();
//		滚动距离大于等于文档高度减去屏幕高度
//		获取文档高度
		var Mone=$("#Mone").height();
		var Monet=$("#Mone").offset().top;
		var Mtwo=$("#Mtwo").height();
		var Mtwot=$("#Mtwo").offset().top;
		var Mthree=$("#Mthree").height();
		var Mthreet=$("#Mthree").offset().top;
		var Mfour=$("#Mfour").height();
		var Mfourt=$("#Mfour").offset().top;
		var Mfive=$("#Mfive").height();
		var Mfivet=$("#Mfive").offset().top;
		var Msixe=$("#Msixe").height();
		var Msixet=$("#Msixe").offset().top;
		var Msever=$("#Msever").height();
		var Msevert=$("#Msever").offset().top;
		var Jleft=$("#main").offset().left+1205;

		if(Stop>=Mone+Monet){
			$("#nav").css({
				"position":"fixed",
				"top":"0",
				"left":Jleft
			})
		}else{
			$("#nav").css({
				"position":"absolute",
				"top":"500px",
				"left":"1205px"
			})
		}
		$("#nav li").removeClass("bei");
		if(Stop>=Msevert){
			$("#nav li:eq(6)").addClass("bei");
		}else if(Stop>=Msixet){
			$("#nav li:eq(5)").addClass("bei");
		}else if(Stop>=Mfivet){
			$("#nav li:eq(4)").addClass("bei");
		}else if(Stop>=Mfourt){
			$("#nav li:eq(3)").addClass("bei");
		}else if(Stop>=Mthreet){
			$("#nav li:eq(2)").addClass("bei");
		}else if(Stop>=Mtwot){
			$("#nav li:eq(1)").addClass("bei");
		}else if(Stop>=Monet){
			$("#nav li:eq(0)").addClass("bei");
		}
	})

})