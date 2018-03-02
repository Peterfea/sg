// JavaScript Document
//点击文本消失
$(function(){
//手机号判断
$(".phone").focusin(function(e) {
    $(this).val("")
	$("#txt-phone").text("")
});
$(".phone").focusout(function(e) {
    var phonevals = $(this).val()
	
	if(phonevals.length == 0 )
	{
		$("#txt-phone").text("*手机号不能为空")
		$(this).val("请输入手机号")
		return false
	}
	if(phonevals.length<11 || phonevals.length>11)
	{
		$("#txt-phone").text("*请输入合法的手机号")	
		$(this).val("请输入手机号")
		return false
	}
		return true	
});
//昵称判断
$(".username").focusin(function(e) {
    $(this).val("")
	$("#txt-user").text("")
});
$(".username").focusout(function(e) {
    var userrvals = $(this).val()
	if(userrvals.length == 0)
	{
		$("#txt-user").text("*昵称不能为空")	
		$(this).val("请输入昵称")
	}
});
//密码判断
$(".password").focusin(function(e) {
    $("#txt-password").text("")
	$(this).val("")
});
$(".password").focusout(function(e) {
    var passwordvals = $(this).val()
	if(passwordvals.length == 0)
	{
		$("#txt-password").text("*密码不能为空")
		$(this).val("输入密码（6-20位数字、字母组合）")	
		return false
	}
	if(passwordvals.length < 6)
	{
		$("#txt-password").text("*密码不得小于6位")
		$(this).val("输入密码（6-20位数字、字母组合）")	
		return false
	}
	if(passwordvals.length > 20)
	{
		$("#txt-password").text("*密码不得大于20位")
		$(this).val("输入密码（6-20位数字、字母组合）")	
		return false
	}
	return true
});
//确认密码
$(".passwords").focusin(function(e) {
    $(this).val("")
	$("#txt-passwords").text("")
});
$(".passwords").focusout(function(e) {
    var passwordsvals = $(this).val()
	var passwordvals = $(".password").val()
	if(passwordvals != passwordsvals )
	{
		$(this).val("确认密码")
		$("#txt-passwords").text("*两次密码不一致，请重新输入")	
	}
});
//用户登录手机号判断
$(".phones").focusin(function(e) {
    $(this).val("")
	$("#txt-phone-2").text("")
});
$(".phones").focusout(function(e) {
    var phonevals = $(this).val()
	
	if(phonevals.length == 0 )
	{
		$("#txt-phone-2").text("*手机号不正确")
		$(this).val("请输入手机号")
		return false
	}
	if(phonevals.length<11 || phonevals.length>11)
	{
		$("#txt-phone-2").text("*手机号不正确")	
		$(this).val("请输入手机号")
		return false
	}
		return true	
});
//用户登录密码判断
$(".usernames").focusin(function(e) {
    $("#txt-password-2").text("")
	$(this).val("")
});
$(".usernames").focusout(function(e) {
    var passwordvals = $(this).val()
	if(passwordvals.length == 0)
	{
		$("#txt-password-2").text("*密码不正确")
		$(this).val("输入密码")	
		return false
	}
	if(passwordvals.length < 6)
	{
		$("#txt-password-2").text("*密码不正确")
		$(this).val("输入密码")	
		return false
	}
	if(passwordvals.length > 20)
	{
		$("#txt-password-2").text("*密码不正确")
		$(this).val("输入密码")	
		return false
	}
	return true
});
})
