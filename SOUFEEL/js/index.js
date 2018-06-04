$(document).ready(function(){
    $("#floatLClick").click(function(){
      $(".floatR").toggle()
    });
    $("#logonav").bind('click',function(){
      $(".navItem").slideToggle()
    })
  });