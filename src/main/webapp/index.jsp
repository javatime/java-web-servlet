<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>


<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-color: #1D3647;
	font-size:12px;
}
.hp02 {
	BORDER-RIGHT: #186294 0px solid; BORDER-TOP: #186294 0px solid; FONT-WEIGHT: bold; FONT-SIZE: 12px; BORDER-LEFT: #186294 0px solid; COLOR: #ffffff; BORDER-BOTTOM: #186294 0px solid; FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif; BACKGROUND-COLOR: #186294
}
.hp04 {
	FONT-WEIGHT: bold; FONT-SIZE: 12px; MARGIN: 0px; COLOR: #000; FONT-STYLE: normal; FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif; TEXT-DECORATION: none
}
-->
</style>
<script language="JavaScript">
function correctPNG()
{
    var arVersion = navigator.appVersion.split("MSIE")
    var version = parseFloat(arVersion[1])
    if ((version >= 5.5) && (document.body.filters)) 
    {
       for(var j=0; j<document.images.length; j++)
       {
          var img = document.images[j]
          var imgName = img.src.toUpperCase()
          if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
          {
             var imgID = (img.id) ? "id='" + img.id + "' " : ""
             var imgClass = (img.className) ? "class='" + img.className + "' " : ""
             var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
             var imgStyle = "display:inline-block;" + img.style.cssText 
             if (img.align == "left") imgStyle = "float:left;" + imgStyle
             if (img.align == "right") imgStyle = "float:right;" + imgStyle
             if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
             var strNewHTML = "<span " + imgID + imgClass + imgTitle
             + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
             + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
             + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
             img.outerHTML = strNewHTML
             j = j-1
          }
       }
    }    
}
window.attachEvent("onload", correctPNG);
</script>
<SCRIPT language=JavaScript type=text/javascript>
//window.history.forward();
function trim(sTextInput) { 
var sTmp = sTextInput.value; 	
for (var k = 0; k < sTmp.length && sTmp.charAt(k) <= " " ; k++);
sTmp = sTmp.substring(k,sTmp.length);
for (var k = sTmp.length-1; k >= 0 && sTmp.charAt(k) <= " " ; k--);
sTmp = sTmp.substring(0,k+1);
sTextInput.value = sTmp;
}

</SCRIPT>

<SCRIPT language=JavaScript 
src="js/screen_resolution.js"></SCRIPT>
<LINK href="images/favicon.ico" rel="shortcut icon">
<link href="images/skin.css" rel="stylesheet" type="text/css">
</head>
<body>
<FORM name=loginform onSubmit="return setScreenInfo();" action=cus_entrymngt_action.php method=post >
<table width="100%" height="166" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td height="42" valign="top"><table width="100%" height="42" border="0" cellpadding="0" cellspacing="0" class="login_top_bg">
      <tr>
        <td width="1%" height="21">&nbsp;</td>
        <td height="42">&nbsp;</td>
        <td width="17%">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td valign="top"><table width="100%" height="532" border="0" cellpadding="0" cellspacing="0" class="login_bg">
      <tr>
        <td width="49%" align="right"><table width="91%" height="532" border="0" cellpadding="0" cellspacing="0" class="login_bg2">
            <tr>
              <td height="138" valign="top"><table width="100%" height="427" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td height="100">&nbsp;</td>
                </tr>
                <tr>
                  <td height="80" align="right" valign="top"><a href="http://www.e-buluo.com"><img src="images/logo.png" border="0"></a></td>
                </tr>
   
              </table></td>
            </tr>
            
        </table></td>
        <td width="1%" >&nbsp;</td>
        <td width="50%" valign="top">
        <table width="100%" border="0">
  <tr>
    <td height="160">&nbsp;</td>
  </tr>
  <tr>
    <td><TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
        <TBODY>
        <TR>
          <TD width="120" height="33">           </TD>
            <TD height="33">
           <span class="login_txt_bt">译部落国际翻译管理平台</span>     </TD>
          </TR>

        <TR>
          <TD vAlign=center width="120">
            <DIV class=hp04 align=right>用户名:&nbsp;&nbsp;&nbsp;</DIV></TD>
          <TD width="702" height=33>
            <DIV class=hp04 align=left>
                      <input class=hp03 maxlength=80 size=38 
            name=sUserLogin>
                    </DIV></TD></TR>
        <TR>
          <TD width="120" vAlign=center>
            <DIV class=hp04 align=right>密　码:&nbsp;&nbsp;&nbsp;</DIV></TD>
          <TD height=38>
            <DIV class=hp04 align=left>
                      <input class=hp03 type=password 
            maxlength=20 size=38 name=sUserPassword>
                      <span class="top_hui_text"><img src="images/luck.gif" width="19" height="18"></span></DIV></TD></TR>
		<TR>
          <TD width="120" vAlign=center>
            <DIV class=hp04 align=right>验证码:&nbsp;&nbsp;&nbsp;</DIV></TD>
          <TD height=38>
            <DIV class=hp04 align=left>
                      <input class=hp03 name="txt_Validate" type="text" size="10">
                      <img src="Class/validate.php" alt="看不清楚可点击这里更换！" border="0" align="absmiddle" style="cursor : pointer;"  onClick="this.src=this.src;" /></DIV></TD></TR>
        <TR>
          <TD width="120">
            <DIV class=hp04 align=right>&nbsp;&nbsp;</DIV></TD>
          <TD height=36>
            <DIV class=hp04 align=left>
                      <input class=hp02 id=btnone onClick=trim(loginform.sUserLogin); type=submit value=登&nbsp;&nbsp;录 name=submitlogin style="cursor : pointer;height:20px">
                    &nbsp;&nbsp;
                    <input class=hp02 id=submitlogin onClick=Goto(1); type=button value=客户登录 name=submitlogin2 style="cursor : pointer;height:20px">
             &nbsp;&nbsp;
             <input class=hp02 id=submitlogin2 onClick=Goto(2); type=button value=译员登录 name=submitlogin3 style="cursor : pointer;height:20px">
             <input class=hp02 id=submitlogin3 onClick=Goto(3); type=button value=威客登录 name=submitlogin4 style="cursor : pointer;height:20px">
            </DIV></TD>
        </TR>
        <TR>
          <TD width="120">
            <DIV class=hp04 align=right>&nbsp;</DIV></TD>
          <TD height=36>
            <DIV class=hp06 align=left>
                      <div class=hp06><a 
            href="tRegister.php" target="_blank" class=hp06> 译员注册</a>
                        <input type=hidden 
            name=HTTP_USER_AGENT>
                    <a 
            href="#" target="_blank" class=hp06>客户注册</a>  <a 
            href="#" target="_blank" class=hp06>威客注册</a>  <a class=hp06 
            href="cus_forgot.php">忘了密码</a> </div>
                    </DIV></TD></TR>
        <TR>
          <TD width="120" class=hp04>&nbsp;</TD>
          <TD>
          <DIV class=hp04 align=left></DIV></TD></TR></TBODY></TABLE></td>
  </tr>
</table>

          </td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="20"><table width="100%" border="0" cellspacing="0" cellpadding="0" class="login-buttom-bg">
      <tr>
        <td align="center"><span class="login-buttom-txt">Copyright &copy; 2012-2015 www.e-buluo.com</span></td>
      </tr>
    </table></td>
  </tr>
</table>
</FORM>
</body>
</html>