// JavaScript Document
$(function(){
/*	alert("5")*/
$("#name").focus(function(){
	$("#name1").css("display","block")
	})
$("#name").blur(function(){
	$("#name1").css("display","none")
	})
})
$(function(){
	$("#text1").focus(function(){
	$("#name2").css("display","block")
	})
$("#text1").blur(function(){
	$("#name2").css("display","none")
	})
})
$(function(){
	$("#text2").focus(function(){
	$("#name3").css("display","block")
	})
$("#text2").blur(function(){
	$("#name3").css("display","none")
	})
})
$(function(){
	$("#email").focus(function(){
	$("#name4").css("display","block")
	})
	$("#email").blur(function(){
	$("#name4").css("display","none")
	})
$("#back").mousedown(function(){
	$(this).css("background","rgba(52,183,229,1)")
	
	})
$("#back").mouseup(function(){
	$(this).css("background","rgba(179,179,179,1)")
	
	})
$("#back").click(function(){
	window.location.href="U灵主页.html"
	})
})