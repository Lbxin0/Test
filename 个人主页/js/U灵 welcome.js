// JavaScript Document
$(function(){
	$("#img-sp2").click(function(){
		$("#aler").fadeOut(1000)
	})
	$("#chfc").click(function(){
		/*alert(55)*/
		$("#aler").fadeIn(1000)
	})
	$("#hd-bt img").hover(function(){
		$("#div-group:nth-child(1)").css("margin-left","-96px")
//		alert(555)
	var aaa=$(this).attr("src");
	/*alert(aaa)*/
	$("body").css("background","url('"+aaa+"')");
	$.cookie("bg-img",src)
})
})
