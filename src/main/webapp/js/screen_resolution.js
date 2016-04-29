function setScreenInfo() {
  	var width = document.createElement( "input" );
  	width.name = "screenWidth";
  	width.type = "hidden";
  	width.value = window.screen.width

  	var height = document.createElement( "input" );
  	height.name = "screenHeight";
  	height.type = "hidden";
  	height.value = window.screen.height
  	
  	document.forms[0].appendChild( width );
  	document.forms[0].appendChild( height );
	if(document.all.sUserLogin.value=='')
	{
		alert('please input userID');
		document.all.sUserLogin.focus();
		return false;
	}
	if(document.all.sUserPassword.value=='')
	{
		alert('please input password');
		document.all.sUserPassword.focus();
		return false;
	}
	if(document.all.txt_Validate.value=='')
	{
		//alert('please input validate code');
		//document.all.txt_Validate.focus();
		//return false;
	}
	//return false;
}
function Goto(id){
	
	if(document.all.sUserLogin.value=='')
	{
		alert('请输入用户名');
		document.all.sUserLogin.focus();
		return false;
	}
	if(document.all.sUserPassword.value=='')
	{
		alert('请输入密码');
		document.all.sUserPassword.focus();
		return false;
	}
	if(document.all.txt_Validate.value=='')
	{
		//alert('请输入验证码');
		//document.all.txt_Validate.focus();
		//return false;
	}
	if(id==1){
	document.all.loginform.action="cus_client_action.php?user_status=0";
	}
	if(id==2){
	document.all.loginform.action="cus_trans_action.php";
	}
	if(id==3){
	document.all.loginform.action="cus_client_action.php?user_status=1";
	}
	document.all.loginform.submit();
	
}