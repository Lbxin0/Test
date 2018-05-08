// JavaScript Document
/*alert(0)
*/$(function(){
	var clone=$("#con-left ul li").first().clone();
	$("#con-left ul").append(clone);
	var len=$("#con-left ul li").length
	var i=0;
	var j=0;
	
	$("#con-left").hover(function(){
		clearInterval(t)
		},
		function(){
		t=setInterval(move,2200)
		})
$("#btn2").click(function(){
/*	alert(i)*/
	i++;
	
	if(i==len){
		$("#con-left ul").css("left","0")
		i=1
		}
	$("#con-left ul").animate({
		left:-i*500
		},1200)
		
	})
	
	
$("#btn3").click(function(){
	i--;
	if(i==-1){
		$("#con-left ul").css("left","-(len-1)*500")
		i=len-1
		}
	$("#con-left ul").animate({
		left:-i*500
		},1200)
	})
var move=function(){
	i++;
	var len=$("#con-left ul li").length
	if(i==len){
		$("#con-left ul").css("left","0")
		i=1
		
		}
	$("#con-left ul").animate({
		left:-i*500
	
		},1000)

	}
var t=setInterval(move,2200)
/*$("#rtxt ul").hover(function(){
	alert(j)
	})*/
var txli=$("#rtxt ul li").length;
$("#rtxt").hover(function(){
	clearInterval(x)
	},
	function(){
	t=setInterval(txmove,1200)
	})
	var clonetx=$("#rtxt ul li").first().clone();
	$("#rtxt ul").append(clonetx);
var txmove=function(){
	j++;
	if(j==txli-6){
		$("#rtxt ul").css("top","0");
		j=0
		}
	$("#rtxt ul").animate({
	top:-j*32
	},1000)
	}	
var x=setInterval(txmove,1200)
	
	
$("#dv1 ul li").hover(function(){
	$(this).addClass("whi").siblings().removeClass("whi");
	})
	
$("#dv1-r span").hover(function(){
	
	$(this).addClass("hx").siblings().removeClass("hx")
	}
	,function(){
	
	$(this).removeClass("hx")
	}
	)
$("#span2").hover(function(){
	$("#spb")
	})	
	
$("#span2").hover(function(){
	$("#view").css("display","block")
	
	},
	function(){
	$("#view").css("display","none")
	
	})

$("#view").hover(function(){
	$(this).css("display","block")
	},
	function(){
	$(this).css("display","none")
	})
	
$("#btn1").hover(function(){
	$(this).css("background","rgba(245,90,0,1)")
	},
	function(){
	$(this).css("background","rgba(255,96,0,1)")
	})
$("#btn1").click(function(){
		alert("系统修复中~~~")
	})
	
$("#aa").hover(function(){
	$(this).css("color","rgba(255,96,0,1)")
	},
	function(){
	$(this).css("color","rgba(255,255,255,1)")
	})
	
$("#tuijian li,#tuijian1 li").hover(function(){
	$(this).css("color","rgba(255,96,0,1)").siblings().css("color","rgba(255,255,255,1)")
	},
	function(){
	$(this).css("color","rgba(255,255,255,1)")
	})
$("#more-l ul li").hover(function(){
	$(this).css("color","red").siblings().css("color","rgba(39,126,196,1)")
	$(this).css("cursor","pointer")
	},
	function(){
	$(this).css("color","rgba(39,126,196,1)")
	})

$("#more-m ul li").hover(function(){
	$(this).css("color","red").siblings().css("color","rgba(39,126,196,1)")
	$(this).css("cursor","pointer")
	},
	function(){
	$(this).css("color","rgba(39,126,196,1)")
	})
	
$("#more-r ul li").hover(function(){
	$(this).css("color","red").siblings().css("color","rgba(39,126,196,1)")
	$(this).css("cursor","pointer")
	},
	function(){
	$(this).css("color","rgba(39,126,196,1)")
	})
	

$("#more-l ul li").click(function(){
	alert("系统维护中，请稍后~~~")
	})
})