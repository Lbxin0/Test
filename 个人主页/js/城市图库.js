// JavaScript Document
$(function(){
$("#hd-ul ul li").hover(function(){
	$(this).css("background","rgba(0,204,0,1)").siblings().css("background","transparent")
	})
	
$("#dv-img img").hover(function(){
	$(this)
	
	})
	
$("#dv-img img").eq(0).hover(function(){
	$("#hidd").fadeIn(10)
	}
	,function(){
	$("#hidd").fadeOut()
	})
	
$("#more").click(function(){
	alert("内容补充中~~~")
	})

$("#dv-img img").hover(function(){
	$(this).css("opacity","0.8").siblings().css("opacity","0.7")
	},
	function(){
	$(this).css("opacity","1")
	})
	
$("#advice").click(function(){
	alert("你妹\n有个屁意见啊\n你大爷的\n给俺憋着！！！")
	})
})