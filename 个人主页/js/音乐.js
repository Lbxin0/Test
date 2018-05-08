// JavaScript Document
$(function(){
	var i=0;
	$("#banner").hover(function(){
		clearInterval(y)},
		function(){
		y=setInterval(t,2000)
			})
	var clone=$("#banner ul li").first().clone();
	$("#banner ul").append(clone);
	var len=$("#banner ul li").length;
$("#btnl").click( function(){

	i++;
	if(i==len){
		$("#banner ul").css({top:0})
		i=1;
		}
	$("#banner ul").animate({
		top:-i*300
	
		},1000)
	
	})
$("#btn").click(function(){
   	var play=$("#mp3")[0];
   	if(play.paused){
   		play.play()
   	}else{
   		play.pause()
   	}	
   })
$("#mars").click(function(){
	/*alert(555)*/
	var play=$("#hua")[0];
	if(play.paused){
		play.play()
	}else{
		play.pause()
	}
})
$("#btnr").click( function(){
	i--;
	if(i==-1){
		$("#banner ul").css({top:-(len-1)*300})
		i=len-2
		}
	$("#banner ul").animate(({
		top:-i*300
	
		}),1000)
	
	})
	var t=function(){
		i++;
		if(i==len){
			$("#banner ul").css({top:0})
			i=1
			}
		$("#banner ul").animate({
			top:-i*300
			},1000)
		}
	
   var y=setInterval(t,2000)

$("#ul1 li").hover(function() {
    	$(this).addClass("bck").siblings().removeClass("bck");
	});
$("#btn1").click(function(){
	var r=$("#search").val();
	if( r==''){
		alert("请输入搜索内容！！！！")
			}else{
				var a=confirm("确认搜索歌曲：《 "+r+" 》 ?")
				if(a==true){
					alert("不好意思\n片库正在完善中\n请稍后")
					}
				else{
					alert("您点击了取消选项\n搜索结束")
					}
				}
		})

$("#ul1 li:nth-child(5) ul li").hover(function(e) {
    $(this).addClass("bck").siblings().removeClass("bck");
	 $(this).mouseleave(function(){
		 $(this).removeClass("bck")
		 })
});


})
