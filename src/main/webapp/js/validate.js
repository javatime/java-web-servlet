//Trim
function Trim(sVal)
{
 while ((sVal.length>0)  && (sVal.charAt(0)==' '))
   sVal=sVal.substring(1, sVal.length);
 while ((sVal.length>0)  && (sVal.charAt(sVal.length-1)==' '))
   sVal=sVal.substring(0, sVal.length-1);
 return  sVal;
}

/***********************************************************
 Comment: Validate the E-Mail
 Input:   (must)ChkStr -- The E-mail  Address
 Returns: true -- nonlicet
      false  -- licit
 Editor:  cndragon  2000-12-13
 Modify:
***********************************************************/
function IsMail(ChkStr) 
{
	var isEmail1    = /^\w+([\.\-]\w+)*\@\w+([\.\-]\w+)*\.\w+$/;
  var isEmail2    = /^.*@[^_]*$/;
  
  return ((isEmail1.test(ChkStr)) && (isEmail2.test(ChkStr)));
}

function ChkTxt(objItem, strTitle)
{
  if(Trim(objItem.value).length==0)
  {
  alert('������' + strTitle + '��' );
  objItem.focus();
  return false;
  }
  
  return true;
}

function StrCmp( sFirst, sSecond )
{
  var  sou  = new String( sFirst );
  var  dest = new String( sSecond );
  
  if ( sou.length  != dest.length )
    return false;
    
  var  i =  0;
  
  while (  sou.charAt(  i )  == dest.charAt(  i )  )
  {
    if ( i == sou.length ) break;
    i++;
  }
  
  if ( i == sou.length )
    return true;
  else
    return false;
}


function ConfirmDelete(objChk,strJsDelType)
{
  var i;
  var blnFlag;
  
  if(StrCmp(objChk,  'undefined'))
  {
  return false;  
  }
  else if(objChk.length  > 1)  
  {
  blnFlag  = false;
  for(i=0;i<objChk.length;i++)
  {
    if(objChk[i].checked)
    {
    blnFlag  = true;
    break;
    }
  }
  }
  else
  {
  blnFlag  = objChk.checked;
  }
  if(blnFlag)
  return confirm("��ȷ��Ҫɾ����");
  else
  {
  alert("��ѡ��Ҫɾ����" + strJsDelType +  "��");
  return false;
  }
}

//check  if the string is only digit
function ChkDigit(objDigit,txtTitle)
{
  var  strDigit=objDigit.value;
  /*
  for  (nIndex=0; nIndex<strDigit.length; nIndex++)
  {
    cCheck = strDigit.charAt(nIndex);
    if (isNaN(cCheck))
    {
      alert(txtTitle + "ֻ��ʹ����������");
      objDigit.focus();
      return false;
    }
  }
  */
  if(isNaN(strDigit))
  {
    alert(txtTitle + "ֻ��ʹ�����֣�");
    objDigit.focus();
    return false;
  }
  return true;
}
function ChkPositive(objDigit, txtTitle)
{
  if(!ChkDigit(objDigit, txtTitle))  return false;
  else
  {
  if(parseInt(objDigit.value)<0)
  {
    alert(txtTitle + "����ʹ�ø�����");
    objDigit.focus();
    return false;
  }
  }
  return true;
}

function ChkIDCard(objID)
{
  var  strID =  objID.value;
  
  if (strID.length !=  15 && strID.length != 18)
  {
    alert("���֤��ֻ��Ϊ 15 λ�� 18 λ���֣����������룡");
    objID.focus();
    return false;
  }

  return true;
}

//check  if the string is beyond  limit
function Chklen(objItem,  txtTitle, nMaxLength,nMinLength)
{
  var  strItem=objItem.value;

  if(strItem.length>nMaxLength)  {
  alert(txtTitle + "�����������ƣ������������� " + nMaxLength +  " ���֣�");
    objItem.focus();
    return false;
  }
  if(strItem.length<nMinLength)  {
  alert(txtTitle + "����̫�٣�������Ҫ���� " + nMinLength  + "  ���֣�");
    objItem.focus();
    return false;
  }
  return true;
  
}

function getlen(strChecked)
{
  alert('���������� ' +  strChecked.length +  ' ���֡�');   
}

function FormatDate(sDate, intLength){
  var mDate    =  Trim(sDate);
  var arrDate =  mDate.split('-');
  var mYear    =  parseInt(arrDate[0],10);
  var mMonth  =  parseInt(arrDate[1],10);
  var mDay    =  parseInt(arrDate[2],10);
  if(mMonth  < 10) mMonth = '0' + mMonth;
  if(mDay <  10)  mDay = '0' + mDay;
  if(intLength==15)  mYear =  mYear %  100;
  var sVal = mYear.toString() +  mMonth.toString() +  mDay.toString();
  //alert(sVal);
  return sVal;
}

// yyyy-mm-dd
function IsDate(sDate) {
var  mDate  = Trim(sDate);
var  mLen  = mDate.length;

if ( mLen <  8 || mLen >  11 )   return false;

mDate =  mDate.replace(/(\/)/g, "-");
mDate =  mDate.replace("��",  "-");
mDate =  mDate.replace("��",  "-");
mDate =  mDate.replace("��",  "");
if ( mDate.search(/\d{4}-\d{1,2}-\d{1,2}/gi) ==  -1 ) return  false;

var  arrDate  = mDate.split('-');
var  mYear  = parseInt(arrDate[0],10);
var  mMonth  = parseInt(arrDate[1],10) -  1;  
var  mDay  = parseInt(arrDate[2],10);

var  today =  new  Date();
if (mYear<1900 || mYear  >= 2100) return  false;

var  objDate  = new Date(mYear,mMonth,mDay);
if(objDate.getFullYear() !=  mYear || objDate.getMonth()  != mMonth || objDate.getDate() != mDay )
  return false;

return true;
}

// yyyy-mm
function IsMonth(sDate)  {
var  mDate  = Trim(sDate);
var  mLen  = mDate.length;

if ( mLen <  6 || mLen >  7 )    return false;

mDate =  mDate.replace(/(\/)/g, "-");
if ( mDate.search(/\d{4}-\d{1,2}/gi) ==  -1 ) return  false;

var  arrDate  = mDate.split('-');
var  mYear  = parseInt(arrDate[0],10);
var  mMonth  = parseInt(arrDate[1],10) -  1;  

if (mYear<1900 || mYear>2100) return false;

var  objDate  = new Date(mYear,mMonth,1);
if(objDate.getFullYear() !=  mYear || objDate.getMonth()  != mMonth)
  return false;

return true;
}

// hh:mm
function IsTime(sTime) {
var  mTime  = Trim(sTime);
var  mLen  = mTime.length;

if ( mLen <  3 || mLen >  5 )  return false;
if ( mTime.search(/\d{1,2}:\d{1,2}/gi) == -1 ) return false;

var  arrDate  = mTime.split(':');
var  mHour   = parseInt(arrDate[0],10);
var  mMinute   = parseInt(arrDate[1],10);   

if ( mHour < 0 || mHour  > 23 ||  mMinute  < 0  || mMinute > 59  ) return false;

return true;
}

// 0: yyyy-mm-dd  1: yyyy-mm-dd  hh:mm 2: hh:mm 3: yyyy-mm
function IsDateTime(sDate,sType) {
switch (sType.toString(10))  {
case '0':  // yyyy-mm-dd
  return IsDate(sDate);
case '1':  // yyyy-mm-dd hh:mm

  var  mDate  = Trim(sDate);
  var  mLen  = mDate.length;

  if ( mLen <  12 || mLen > 16  ) return false;
  if ( mDate.search(/\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}/gi) ==  -1 ) return  false;

  var  arrDate  = mDate.split('  ');
  
  if ( IsDate( arrDate[0]  ) == false || IsTime( arrDate[1]) == false )
    return false;
  break;
case '2':  // hh:mm
  return IsTime(sDate);
case '3':  // yyyy-mm
  return IsMonth(sDate);
default:
  return false;
}
return true;
  
}

function SetOther(objText, objItem)
{
  objText.value  = "";
  objText.disabled = objItem.checked;
}

/*
function CheckAll(frm, chkItemName,  objChkAll)
{
for  (var i=0;i<frm.elements.length;i++)
  {
  var e  = frm.elements[i];
  if (e.name ==  chkItemName)
   e.checked = objChkAll.checked;
  }
}
*/
function CheckAll(objItem, objAll)
{
  if(!StrCmp(objItem, 'undefined'))
  {
  if(objItem.length >  1)
  {
    for(var i=0;i<objItem.length;i++)
    objItem[i].checked = objAll.checked;
  }
  else
    objItem.checked =  objAll.checked;
  }
}

function ChkSel(objElement,  intSelect, txtTitle)
{
 if  ( objElement.value == intSelect  ) {
    alert("��ѡ��" + txtTitle + "��");
    objElement.focus();
    return false;
  }
  return true;
}

/*********************************************************
* Comment:  ��ĳһ�б���е�ѡ����ƶ�������һ�б��
* Author :  ���Ķ�
* Input   : sltFrom -- Ҫ������Ŀ���б��
*       sltTo --  Ҫ������Ŀ���б��
* Output : 
***********************************************************/
function AddOption(sltFrom,  sltTo){
  var strVal;
  var strText;
  if(sltFrom.value==0 | sltFrom.value=='') return false;
  
  for(var x=0;x<sltFrom.length;x++){
  var  opt  = sltFrom.options[x];
  if (opt.selected){
    flag = true;
    for (var y=0;y<sltTo.length;y++){
    var  myopt =  sltTo.options[y];
    if (myopt.value  == opt.value){
      flag = false;
    }
    }
    /*
    ʵ���Ѿ�ѡ��ʡ�Ժ�Ͳ���ѡ������������
    
    ����ȷ��Ҫѡ�����Ŀ�ı�ţ����ȷ������ʡ�ı�ţ�Ȼ���ж�ʡ�Ƿ��Ѿ�ѡ��
    */
    for(var  Ii = 0 ; Ii  < I  ; Ii++){
      for(var  Jj = 0 ; Jj  <= CityID[Ii].length ; Jj++){
        //ȷ������ʡ�������λ�ã����õ�����ʡ�ı��
        if(parseInt(CityID[Ii][Jj]) == parseInt(opt.value)){
          for  (var Py  = 0;Py<sltTo.length;Py++)
          {
            var  myPopt = sltTo.options[Py];
            //���ʡ�ı���Ѿ���ѡ�����򽫱����Ϊfalse
            if (myPopt.value ==  Province[Ii])
            {
              flag = false;
            }
            //�����ǰ�����ʡ����ɾ��������ѡ�����Ͻ����
            if (opt.value == Province[Ii])
            {
              //�жϵ�ǰѡ���ı���ǲ�������Ҫѡ���ʡ
              /*for (var Jjj = 0 ; Jjj <=  CityID[Ii].length ;  Jjj++)
              {
                if (myPopt.value ==  CityID[Ii][Jjj])
                  {
                    myPopt.selected  = true;
                    DelOption(sltTo);
                  }
              }
              */
              
            }
          }
        }
      }
    }
    if(flag){
    sltTo.options[sltTo.options.length]  = new Option(opt.text, opt.value, 0, 0);
    strVal=opt.value;
    strText=opt.text;
    removeExistCity(sltTo, strVal, strText);
    //sltFrom.options[x] = null;
    x--;
    }
    
  }
  }
  
}

//===================================================
//-- ȥ����ѡ�����
//===================================================
function removeExistCity(sltTo, PVal, strText)
{ 
  var flag=-1;
  var i,j,l,k;
  arrNewV = new Array;
  arrNewT = new Array;
  for(i=0;i<Province.length;i++)
  {
    if(Province[i]==PVal) flag=i;
  }
  l=0;
  if(flag!=-1)
  {
    i=0;
    for(i=0;i<sltTo.options.length;i++)
    {
      j=0;
      k=false;
      for(j=0;j<CityID[flag].length;j++)
      {
        if(CityID[flag][j]==sltTo.options[i].value)
        {
          k=true;
        }
      }
      
      if(!k)
      {
        arrNewV[l]=sltTo.options[i].value;
        arrNewT[l]=sltTo.options[i].text;
        l++;
      }
    }
    
    arrNewV[l]=PVal;
    arrNewT[l]=strText;
    
    for(i=sltTo.options.length;i>=0;i--)
    {
      sltTo.options[i]=null;
    }
    
    for(i=0;i<arrNewV.length;i++)
    {
      sltTo.options[i]= new Option(arrNewT[i], arrNewV[i], 0, 0)
    }
    return false;
  }
}

function DelOption(sltFrom){
  for(var x=sltFrom.length-1;x>=0;x--){
  var  opt  = sltFrom.options[x];
  if (opt.selected){
    sltFrom.options[x] = null;
  }
  }
}

/*********************************************************
* Comment:  �������б��е�Ҫ�����
* Author : Alex  Zhang
* Input   : obj -- Ҫ���Ķ����б�
*       maxNum -- �����  Ϊ0��ʾ��Ҫ��
*       mimNum -- ��С��  Ϊ0��ʾ��Ҫ��
*       txtTitle  --  ��ʾ�û���Title
* Output :  ���obj���Ƕ���ѡ�������Ƿ�ΪC_CODE_SELECT,
*      ���򷵻�false ,  ���򷵻�true
***********************************************************/
function CheckMulSelect(obj, maxNum, minNum, txtTitle)
{
  if(obj.multiple)
  {
  var  optionNum=obj.length;
  if(maxNum!=0 &&  optionNum>maxNum)
  {
    alert('"'+txtTitle+'"  ���ѡ��'+maxNum+'�');
    obj.focus();
    return false;
  }
  
  if(minNum!=0 &&  optionNum<minNum &&  maxNum==0)
  {
    alert('"'+txtTitle+'"  ����ѡ��'+minNum+'�');
    obj.focus();
    return false;
  }
  
  return true;
  }
  else
  {
  if(obj.value==-1)
  {
    alert('"'+txtTitle+'"  ����ѡ��');
    obj.focus();
    return false;
  }
  else
    return true;
  }
}
function IsDigit(cCheck) { return (('0'<=cCheck) && (cCheck<='9')); }

function IsAlpha(cCheck) { return ((('a'<=cCheck) && (cCheck<='z')) || (('A'<=cCheck) && (cCheck<='Z'))) }

function CheckUserName(obj)
{
	
    strUserID = obj.value;
    if (strUserID == "")
    {
        alert("�����������û���");
        obj.select();
        return false;
    }
    
    if ((strUserID.length < 3)||(strUserID.length>20))
    {
        alert("�û�������̫�̣���ѡ����λ���ϵ��û�����");
        obj.select();
        return false;
    }
    
    var firstchat=strUserID.charAt(0);
    if(!( IsDigit(firstchat) || IsAlpha(firstchat) )) {
		alert('�û������ַ�����Ϊ��ĸ������!');
		obj.select();
		return false;
    }
    
    for (nIndex=0; nIndex<strUserID.length; nIndex++)
    {
        cCheck = strUserID.charAt(nIndex);
   /*    
		if ( nIndex==0 && ( cCheck =='-' || cCheck =='_') )
        {
            alert("�û������ַ�����Ϊ��ĸ������");
            obj.select();
            return false;
        }  
   */

        if (!(IsDigit(cCheck) || IsAlpha(cCheck) || cCheck=='_' || cCheck == '-'))
        {
            //alert("�û���ֻ��ʹ��Ӣ����ĸ�������Լ�-��_���������ַ�����Ϊ��ĸ������");
			alert("�û�����ʹ��20λ������ĸ�����֡��»��ߵ���ϣ�");
            obj.select();
            return false;
        }
    }

    return true;
}

function Chkpwd(objItem,txtTitle,nMaxLength,nMinLength)
{
  var  strItem=objItem.value;

  if(strItem.length>nMaxLength)  {
    alert("���趨6��12λ�����룡");
    objItem.focus();
    return false;
  }
  if(strItem.length<nMinLength)  {
    alert("���趨6��12λ�����룡");
    objItem.focus();
    return false;
  }
  
  for (var n=0; n<strItem.length; n++)    {
    if (strItem.charAt(n)=='-')
    {
	  alert("�����в��ܺ��� ��-�� ��");
      objItem.focus();
      return false;
    }
	if (strItem.charAt(n)=="\'")
    {
	  alert("�����в��ܺ��� �� ' �� ��");
      objItem.focus();
      return false;
    }
	if (strItem.charAt(n)==';')
    {
	  alert("�����в��ܺ��� ��;�� ��");
      objItem.focus();
      return false;
    }
  }
      
  return true;
}
function mOvr(src,clrOver){ 
	if (!src.contains(event.fromElement)) { 
		src.style.cursor = 'hand'; 
		src.bgColor = clrOver; 
	}
}
function mOut(src,clrIn){ 
	if (!src.contains(event.toElement)) { 
		src.style.cursor = 'default'; 
		src.bgColor = clrIn; 
	}
}

var ActiveItem="";
function mOclk(src,clrOver,clrIn){
	ActiveItem.bgColor = clrIn; 
	if (!src.contains(event.fromElement)) { 
		src.style.cursor = 'hand'; 
		src.bgColor = clrOver; 
	}
	ActiveItem=src;
}