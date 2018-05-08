// JavaScript Document
$(function(){
	$("#hd-t ul li").hover(function(){
		$(this).addClass("bck").siblings().removeClass("bck")
		})
		
	$("#hd-t span").hover(function(){
		$(this).addClass("col").siblings().removeClass("col")
		})
		
$("div[id^='img']").css("cursor","pointer");
//$("div[id^='img'] img").hover(function(){
//	$(this).css("height","260px"," width","200px")
//
//	
//}
//,function(){
//	$(this).css("height","200px"," width","250px")
//	
//	}
//)
/*$("#hd-sp1").hover(function(){
	$("#dvimg1").css("display","block")
	}
	,function(){$("#dvimg1").css("display","none")}
	)
	*/
	
$("span[id^=hd-sp]").click(function(){
	$(this).css("color","red").siblings().css("color","black")
	})



	})