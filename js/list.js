// JavaScript Document
window.onload=function(){
	var a = $(window).width()
		
}
//图片自动切换
var a = 0
function change(){
	if(a == 4)
	{
		a = 0
		$("header").children("img").eq(0).show().siblings("img").hide()
		$("header ul li").eq(0).addClass("on").siblings("li").removeClass("on")	
	}
	else
	{
	$("header").children("img").eq(a).show().siblings("img").hide()
	$("header ul li").eq(a).addClass("on").siblings("li").removeClass("on")
	++a	
	}
}
var timer = setInterval(change,2000)
$(function(){
	$(".left").mouseenter(function(){
		clearInterval(timer)	
	}).mouseleave(function(){
		var b = $(".on").index()
		a = b
		timer = setInterval(change,2000)	
	})
	$(".right").mouseenter(function(){
		clearInterval(timer)	
	}).mouseleave(function(){
		var b = $(".on").index()
		a = b
		timer = setInterval(change,2000)	
	})
	$("#right").mouseenter(function(){
		clearInterval(timer)	
	}).mouseleave(function(){
		var b = $(".on").index()
		a = b
		timer = setInterval(change,2000)	
	})
	$("#left").mouseenter(function(){
		clearInterval(timer)	
	}).mouseleave(function(){
		var b = $(".on").index()
		a = b
		timer = setInterval(change,2000)	
	})
	$("#left").click(function(){
		var c = $(".on").index()
		$("header").children("img").eq(c-1).show().siblings("img").hide()
		$("header ul li").eq(c-1).addClass("on").siblings("li").removeClass("on")	
	})	
	$("#right").click(function(){
		var c = $(".on").index()
		if(c == 3)
		{
		c = 0
		$("header").children("img").eq(0).show().siblings("img").hide()	
		$("header ul li").eq(0).addClass("on").siblings("li").removeClass("on")
		}
		else
		{
		$("header").children("img").eq(c+1).show().siblings("img").hide()
		$("header ul li").eq(c+1).addClass("on").siblings("li").removeClass("on")	
		}
	})	
})
//图片突出显示
$(function(){
	$("#img-1").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(0).css({"left":b,"top":a-c})
		$(".img-top").eq(0).show().siblings(".img-top").hide()		
	})	
	$("#img-2").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(1).css({"left":b,"top":a-c})
		$(".img-top").eq(1).show().siblings(".img-top").hide()		
	})
	$("#img-3").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(2).css({"left":b,"top":a-c})
		$(".img-top").eq(2).show().siblings(".img-top").hide()		
	})	
	$("#img-4").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(3).css({"left":b,"top":a-c})
		$(".img-top").eq(3).show().siblings(".img-top").hide()		
	})
	$("#img-5").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(4).css({"left":b,"top":a-c})
		$(".img-top").eq(4).show().siblings(".img-top").hide()		
	})
	$("#img-6").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(5).css({"left":b,"top":a-c})
		$(".img-top").eq(5).show().siblings(".img-top").hide()		
	})			
	$("#img-7").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(6).css({"left":b,"top":a-c})
		$(".img-top").eq(6).show().siblings(".img-top").hide()		
	})			
	$("#img-8").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(7).css({"left":b,"top":a-c})
		$(".img-top").eq(7).show().siblings(".img-top").hide()		
	})			
	$("#img-9").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(8).css({"left":b,"top":a-c})
		$(".img-top").eq(8).show().siblings(".img-top").hide()		
	})			
	$("#img-10").mouseenter(function(){
		var a = $(this).offset().top
		var b = $(this).offset().left
		var c = $(window).scrollTop()
		$(".blackscreen").show()
		$(".img-top").eq(9).css({"left":b,"top":a-c})
		$(".img-top").eq(9).show().siblings(".img-top").hide()		
	})							
	$(".bigger").click(function(){
	$(".four").toggleClass("hover3")
	$(".three").toggleClass("hover2")
	$(".two").toggleClass("hover1")	
})
$(".backarticle").click(function(){
	$(".blackscreen").hide()	
})	
})