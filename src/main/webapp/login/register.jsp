<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>译部落国际翻译管理平台</title>
<link href="../css/style.css" rel="stylesheet" type="text/css">
</head>
<body>
<SCRIPT language="" src="../js/default.js"></SCRIPT>
<script language="javascript1.1">
function checkData() {
	if(document.all.username.value=='')
	{
		alert('请输入用户登录名');
		document.all.username.focus();
		return false;
	}
	if(document.all.email.value=='')
	{
		alert('请输入email');
		document.all.email.focus();
		return false;
	}
	if(IsMail(document.all.email.value)==false) 
	{
			alert("请输入正确的email格式！");
			document.all.email.focus();
			return false;
	}
	if(document.all.pass1.value=='')
	{
		alert('请输入密码');
		document.all.pass1.focus();
		return false;
	}	
	if(!Chkpwd(document.all.pass1,"密码",16, 6)) return false;
	if(document.all.pass2.value=='')
	{
		alert('请输入确认密码');
		document.all.pass2.focus();
		return false;
	}	
	if(document.all.pass1.value != document.all.pass2.value)
	{
		alert("密码与确认密码不一致！");
		document.all.pass2.focus();
		return false;
	}	
	if(document.all.contact.value=='')
	{
		alert('请输入联系人');
		document.all.contact.focus();
		return false;
	}	
	

	if(document.all.sex.value=='')
	{
		alert('请选择性别');
		document.all.sex.focus();
		return false;
	}

	
	if(document.all.service_id.value=='' && document.all.service_id.value=='')
	{
		alert('请选中语言服务类型');
		document.all.service_id.focus();
		return false;
	}
	if(document.all.tel.value=='' && document.all.mobile.value=='')
	{
		alert('请输入电话或者手机');
		document.all.tel.focus();
		return false;
	}



	

	return true;
}
function IsMail(ChkStr) 
{
	var isEmail1    = /^\w+([\.\-]\w+)*\@\w+([\.\-]\w+)*\.\w+$/;
  var isEmail2    = /^.*@[^_]*$/;
  
  return ((isEmail1.test(ChkStr)) && (isEmail2.test(ChkStr)));
}
function Chkpwd(objItem,txtTitle,nMaxLength,nMinLength)
{
  var  strItem=objItem.value;

  if(strItem.length>nMaxLength)  {
    alert("请设定6－16位的密码！");
    objItem.focus();
    return false;
  }
  if(strItem.length<nMinLength)  {
    alert("请设定6－16位的密码！");
    objItem.focus();
    return false;
  }
  
  for (var n=0; n<strItem.length; n++)    {
    if (strItem.charAt(n)=='-')
    {
	  alert("密码中不能含有 “-” ！");
      objItem.focus();
      return false;
    }
	if (strItem.charAt(n)=="\'")
    {
	  alert("密码中不能含有 “ ' ” ！");
      objItem.focus();
      return false;
    }
	if (strItem.charAt(n)==';')
    {
	  alert("密码中不能含有 “;” ！");
      objItem.focus();
      return false;
    }
  }
      
  return true;
}
function checkURL(){
	var id=document.getElementById("siteurl");
	if(!id.value.length<256&&!(/^(([a-z0-9][-a-z0-9]*[a-z0-9]|)\.)+[a-z]{2,6}$/i).test(id.value)){
			alert("请输入正确的域名格式！");
			id.focus();
			return false;
		}
	createRequest();
	var id=document.getElementById("siteurl");
	var url="class/GetIsUrl.php?turl=" + escape(id.value);
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=callurl;
	xmlHttp.send(null);
}
</script>
<body  style="BACKGROUND: url(../images/main014.gif) repeat-x; background-color:#EDF5FA">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="13">&nbsp;</td>
  </tr>
  <tr>
    <td><table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td width="233" rowspan="2" align="center"><a href="http://tms.e-buluo.com" target="_blank"><img src="../images/logo-union.gif" alt="乐聘翻译管理软件" border="0"></a></td>
        <td valign="top">&nbsp;</td>
      </tr>
      <tr>
        <td height="49" valign="bottom"><table width="90%" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td width="3"><img src="../images/main008.gif" ></td>
            <td width="100%" background="../images/main009.gif" class=boldwhite >&nbsp;&nbsp;&nbsp;&nbsp;<span id="responseTitle">译员注册</span></td>
            <td width="3"><img src="../images/main010.gif" ></td>
          </tr>
        </table></td>
      </tr>
    </table></td>
  </tr>
</table>
<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="233" height="385" align="center"></td>
    <td valign="top"><table width="90%" border="0" cellspacing="0" cellpadding="0" bgcolor="EFF6FA">
      <tr>
        <td ><table width="99%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td width="18%" class="t_smallfont">首 页</td>
              <td width="82%">&nbsp;</td>
            </tr>
        </table></td>
      </tr>
      <tr>
        <td height="2" bgcolor="E9EFF3"></td>
      </tr>
    </table>
      <table width="90%" cellpadding = "3"  cellspacing = "0" id = summary>
		<?$m=0;?>
<form id=f name=f action="register" method=post onSubmit="return checkData();" >
      <tr bgcolor="#EDF5FA" height="20">
        <td width="9%"  align=center nowrap = "yes" class = tbcolhead><LABEL for="edit-name">注册信息</LABEL></td>
        <td width="15%" align=left  class = tbcolhead >&nbsp;</td>
        <td width="76%" align=left  class = tbcolhead >&nbsp;</td>
      </tr>
      <tr bgcolor="ffffff" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center><LABEL for="edit-mail"></LABEL></td>
        <td align=left  class = tbcolhead ><strong>用户名:*</strong></td>
        <td align=left  class = tbcolhead ><input name="username" type="text"  class="reg_input" id="username" /></td>
      </tr>
      <tr bgcolor="#EDF5FA" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center><LABEL for="edit-pass-pass1"></LABEL></td>
        <td align=left  class = tbcolhead ><strong>邮件地址:*</strong></td>
        <td align=left  class = tbcolhead ><input name="email" type="text"  class="reg_input" id="email" /></td>
      </tr>
      <tr bgcolor="#FFFFFF" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>密码:*</strong></td>
        <td align=left  class = tbcolhead ><input name="pass1" type="password"  class="reg_input" id="pass1" /></td>
      </tr>
      <tr bgcolor="#EDF5FA" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>确认密码:*</strong></td>
        <td align=left  class = tbcolhead ><input name="pass2" type="password"  class="reg_input" id="pass2" /></td>
      </tr>
      <tr bgcolor="#FFFFFF" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>联系信息</td>
        <td align=left  class = tbcolhead >&nbsp;</td>
        <td align=left  class = tbcolhead >&nbsp;</td>
      </tr>
      <tr bgcolor="#EDF5FA" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>姓名:*</strong></td>
        <td align=left  class = tbcolhead ><input name="contact" type="text"  class="reg_input" id="contact" /></td>
      </tr>
      <tr bgcolor="#FFFFFF" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>性别:</strong></td>
        <td align=left  class = tbcolhead ><select name="sex" class="reg_input">
				
				<option value="">请选择</option>
                <option value="1" selected>男</option>
                <option value="2" >女</option>
				<option value="3" >不详</option>

              </select></td>
      </tr>
	  <tr bgcolor="#EDF5FA" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center><LABEL for="edit-pass-pass1"></LABEL></td>
        <td align=left  class = tbcolhead ><strong>服务类型:*</strong></td>
        <td align=left  class = tbcolhead ><select name="service_id" class="reg_input">
          <option value="">请选择</option>
          
        </select></td>
		
      </tr>
      <tr bgcolor="#FFFFFF" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>手机:*</strong></td>
        <td align=left  class = tbcolhead ><input name="mobile" type="text"  class="reg_input" id="mobile" /></td>
      </tr>
      <tr bgcolor="#EDF5FA" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>固定电话:*</strong></td>
        <td align=left  class = tbcolhead ><input name="tel" type="text"  class="reg_input" id="tel" /></td>
      </tr>
      <tr bgcolor="#FFFFFF" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>QQ:</strong></td>
        <td align=left  class = tbcolhead ><input name="QQ" type="text"  class="reg_input" id="QQ" /></td>
      </tr>
      <tr bgcolor="#EDF5FA" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>MSN:</strong></td>
        <td align=left  class = tbcolhead ><input name="MSN" type="text"  class="reg_input" id="MSN" /></td>
      </tr>
	        <tr bgcolor="#FFFFFF" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>MSN:</strong></td>
        <td align=left  class = tbcolhead ><input name="MSN" type="text"  class="reg_input" id="MSN" /></td>
      </tr>
       <tr bgcolor="#EDF5FA" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead ><strong>是否为审译用户:</strong></td>
        <td align=left  class = tbcolhead ><input type="radio" id="service_type" name="service_type" value="1" />是<input type="radio" id="service_type" name="service_type" value="0" checked/>否 </td>
      </tr>
      <tr bgcolor="#FFFFFF" height="20">
        <td nowrap = "yes" class = tbcolhead  align=center>&nbsp;</td>
        <td align=left  class = tbcolhead >&nbsp;</td>
        <td align=left  class = tbcolhead ><label>
          <input type="submit" name="Submit" value="提 交" class="FormElements_Dark">
          <input type="reset" name="Submit2" value="重 置" class="FormElements_Dark">
        </label></td>
      </tr>
	  </form>
    </table></td>
  </tr>
</table>
</body>
</html>