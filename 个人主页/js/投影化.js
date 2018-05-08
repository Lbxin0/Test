// JavaScript Document
$(function(){


var aimg=['url(images/g3.jpg)','url(images/g1.jpg)','url(images/g2.jpg)','url(images/g4.jpg)']
	
    
	$("#dv-1-b img").mouseover(function(){
		
		var i=$(this).index()+1;
		/*alert(i)*/
		

    	$(this).addClass("imgbd").siblings().removeClass("imgbd");
		$("#dv-1-t").css("background","url(images/g"+i+".jpg")
		})
		

	})