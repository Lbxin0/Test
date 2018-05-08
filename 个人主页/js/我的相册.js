// JavaScript Document
$(function(){
	$("#div-header ul li").hover(function() {
        $(this).addClass("libck").siblings().removeClass("libck")
    });
$("#btn1").click(function(){
	var r=confirm("确认上传图片？");
		if(r==true){
			alert("上传空间受限,请升级空间内存！！！")
			}
		else{
			alert("取消上传图片；记录消失~~~")
			}
	})
	
$("#btn2").click(function(){
	var r=confirm("确认创建相册？");
		if(r==true){
			alert("创建受限,请升级空间内存！！！")
			}
		else{
			alert("取消创建；记录消失~~~")
			}
			})
$("#btn3").click(function(){
	alert("系统维护中~~~")
	})

$("#vip").click(function(){
	alert("请先登录后台系统")
	})




	$("#tianjian-sp").click(function(){
		alert("内容禁止操作~~~")
	})






	})
function drag(ev){
	ev.dataTransfer.setData("text",ev.target.id)
}
function allow(ev){
	ev.preventDefault();
}
function drop(ev){
	ev.preventDefault();
	var data=ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data))
}


