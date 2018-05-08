// JavaScript Document

$(function(){
	var i=0;
	$("#div-lun").hover(function() {
    clearInterval(t)},
	function() {
    t=setInterval(move,2100)
	}
)
	//克隆ul li的第一个images到末尾（append方法实现加到末尾）；实现无缝滚动效果   大致方法为：克隆（clone）---添加（append）---改变样式代码
	var clone=$("#div-lun ul li").first().clone();
	$("#div-lun ul").append(clone);
	var len=$("#div-lun ul li").length;
$("#btn-l").click( function(){
	i++;
	if(i==len){
		$("#div-lun ul").css({top:0})
		i=1;
		}
	$("#div-lun ul").animate({
		top:-i*400
	
		},1000)
	
	})

$("#btn-r").click( function(){
	i--;
	if(i==-1){
		$("#div-lun ul").css({top:-(len-1)*400})
		i=len-2
		}
	$("#div-lun ul").animate(({
		top:-i*400
	
		}),1000)
	
	})
var move=function(){
	i++;
	if(i==len){
		$("#div-lun ul").css({top:0})
		i=1;
		
		}
	$("#div-lun ul").animate({
		top:-i*400
	
		},1000)
	
	}
var t=setInterval(move,2100)
														
$("#zhuye-mean").hover(function(){
	var show=$(this).css('display')
	if(show=='none'){
		$("#zhuye-mean").css('display','block')
				}
			else{$("#zhuye-mean").css('display','none')
		}
	})
$("#menu ul li:nth-child(1)").hover(function(){
	
		var show=$("#zhuye-mean").css('display');
			if(show=='none'){
				$("#zhuye-mean").css('display','block')
				}
			else{$("#zhuye-mean").css('display','none')}
			
		
		});

		});

$("#menu-lisp").hover(function(){
	$('#menu-lisp').css({ "z-index": "5" })

$('#img li').hover(function() {
    $(this).add('<a href="#"></a>')
});

})


