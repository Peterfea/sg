// JavaScript Document
//顶部图片切换
var a = 0
function toppic(){
	if(a == 5)
	{
		a = 0
		$("#header .pic-wrap").eq(0).show().siblings(".pic-wrap").hide()
	    $("#header .txt ul li").eq(0).addClass("on").siblings("li").removeClass("on")	
	}
	$("#header .pic-wrap").eq(a).show().siblings(".pic-wrap").hide()
	$("#header .txt ul li").eq(a).addClass("on").siblings("li").removeClass("on")
	++a	
}
var timer = setInterval(toppic,3000)
  //鼠标进入文本介绍部分，计时器停止
$(function(){
	$("#header .txt ul li").mouseenter(function(){
		clearInterval(timer)
		var isindex = $(this).index()
		$(this).addClass("on").siblings("li").removeClass("on")
		$("#header .pic-wrap").eq(isindex).show().siblings(".pic-wrap").hide()	
	}).mouseleave(function(){
		var current = $("#header .txt .on").index()
		if(current == 4)
		{
			a = 0	
		}
		else
		{
			a = current + 1	
		}
		a = current + 1
		timer = setInterval(toppic,3000)	
	})	
//独家精选部分效果
$("#pic").mouseenter(function(){
	$(this).children(".black").stop(true,false).animate({left:0},800)
	$(this).children(".white").stop(true,false).animate({right:0},800)
	$(this).children(".tit-blue").stop(true,false).delay(900).animate({top:20})	
}).mouseleave(function(){
	$(this).children(".tit-blue").stop(true,false).animate({top:-200})
	$(this).children(".black").stop(true,false).delay(600).animate({left:-230})
	$(this).children(".white").stop(true,false).delay(600).animate({right:-230})	
})	
$(".select .piclist-box").mouseenter(function(){
	$(this).children(".black").stop(true,false).animate({left:0},800)
	$(this).children(".white").stop(true,false).animate({right:0},800)
	$(this).children(".tit-blue").stop(true,false).delay(900).animate({top:20})	
}).mouseleave(function(){
	$(this).children(".tit-blue").stop(true,false).animate({top:-200})
	$(this).children(".black").stop(true,false).delay(600).animate({left:-230})
	$(this).children(".white").stop(true,false).delay(600).animate({right:-230})	
})
//同步影院部分效果
$("#load").click(function(){
	var cheight = $(".cinema").height()
	if(cheight == 400)
	{
	$(".cinema").animate({height:700})
	$(".moviebox-list-wrap-2").eq(0).fadeIn()
	}
	if(cheight == 700)
	{
	$(".cinema").animate({height:1000})
	$(".moviebox-list-wrap-2").eq(1).fadeIn()
	$(this).html('<a href="list.html">查看更多</a>')
	}
})	
//全球拾趣部分效果
$(".interest .picbox-flip").mouseleave(function(){
	$(this).toggleClass("run")	
}) 
$("#pic-top").mouseenter(function(){
	$(this).children(".line1").stop(true,false).animate({width:589})
	$(this).children(".line2").stop(true,false).animate({height:340})
	$(this).children(".line3").stop(true,false).animate({height:340})
	$(this).children(".line4").stop(true,false).animate({width:589})		
}).mouseleave(function(){
	$(this).children(".line1").stop(true,false).animate({width:0})
	$(this).children(".line2").stop(true,false).animate({height:0})
	$(this).children(".line3").stop(true,false).animate({height:0})
	$(this).children(".line4").stop(true,false).animate({width:0})	
	})
})
//滚动条
