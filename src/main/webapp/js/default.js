//
function GoToLocation(GoToUrl) {
		Global_URLJS = GoToUrl
		if (Global_URLJS != "") {
		parent.document.all.frame_mainMenu.src= Global_URLJS
		//eval(Global_Class).className="clientleft";
		//eval(Global_Class).disabled="false"; 
		this.focus();
	}

}
function OpenOrCloseIt(o){
	menuobj=o.substr(3,o.length-1);
	ico=eval("menu"+menuobj);
	if(ico.style.display == '')
	{
		ico.style.display	= 'none';
		eval(o).src="images/left04.gif";
	}else{
		ico.style.display	= '';
		//alert(ico);
		eval(o).src="images/left03.gif";
		for(i=1;i<=9;i++){
			obj="menu1"+i;
			if(ico!=eval(obj)){
				eval(obj).style.display='none';
				eval("img1"+i).src="images/left04.gif";
			}
		}
	}
}
function ChanageClass(x){
	eval(x).src="images/main004.gif";
}
function ChanageMoveClass(x,y){
	if(!y)
	eval(x).src="images/main005.gif";
	else
	eval(x).src="images/main004.gif";
}
function MenuClass(x){
	eval(x).className="btnmenunone1";
}
function MenuMoveClass(x){
	eval(x).className="";
}

function GoToLocationf(GoToUrl) {
	Global_URLJS = GoToUrl
	alert(document.all.frames["frame_mainMenu"]);
	if (!frames["frame_mainMenu"].bChange) {
		
		KernelLocation()
		}
	else {
		if (!frames["frame_mainMenu"].ConfirmSave()) {
			frames["frame_mainMenu"].bChange=false
			KernelLocation()
		}
	}
			
}

function KernelLocation() {

	if (Global_URLJS != "") {
		parent.document.all.frame_mainMenu.src= parent.Global_URLJS
		//window.location= parent.Global_URLJS
		this.focus();
	}

}

function cjolBoard(n){
	for(i=0;i<mainTable.tBodies.length;i++){ 
    mainTable.tBodies[i].style.display="none";
	//mainTable.tBodies[i].style.height="450"; 
	}	
    mainTable.tBodies[n].style.display="block"; 
	if(n==0){
		tdCN_Resume.className="clientright03";
		tdCN_CoverLetter.className="clientright04";
		tdEN_CoverLetter.className="clientright04";
		tdEN_Bbs.className="clientright04";
		tdEN_Msg.className="clientright04";
	}
	if(n==1){
		tdCN_Resume.className="clientright041";
		tdCN_CoverLetter.className="clientright03";
		tdEN_CoverLetter.className="clientright04";
		tdEN_Bbs.className="clientright04";
		tdEN_Msg.className="clientright04";
	}
	if(n==2){
		tdCN_Resume.className="clientright041";
		tdCN_CoverLetter.className="clientright04";
		tdEN_CoverLetter.className="clientright03";
		tdEN_Bbs.className="clientright04";
		tdEN_Msg.className="clientright04";
	}
	if(n==3){
		tdCN_Resume.className="clientright041";
		tdCN_CoverLetter.className="clientright04";
		tdEN_CoverLetter.className="clientright04";
		tdEN_Bbs.className="clientright03";
		tdEN_Msg.className="clientright04";
	}
	if(n==4){
		tdCN_Resume.className="clientright041";
		tdCN_CoverLetter.className="clientright04";
		tdEN_CoverLetter.className="clientright04";
		tdEN_Bbs.className="clientright04";
		tdEN_Msg.className="clientright03";
	}
}
function showDate()
{
var d = new Date();  
document.write("<div class=\"date_div\">"+(d.getMonth()+1)+"月"+d.getDate()+"日");
switch(d.getDay())
{
 case 0:
  document.write("  <font color=#FF0000>星期日");
  break;
 case 1:
  document.write("  <font color=#000000>星期一");
  break;
 case 2:
  document.write("  <font color=#000000>星期二");
  break;
 case 3:
  document.write("  <font color=#000000>星期三");
  break;
 case 4:
  document.write("  <font color=#000000>星期四");
  break;
 case 5:
  document.write("  <font color=#000000>星期五");
  break;
 case 6:
  document.write("  <font color=#FF0000>星期六");
  break;
}
 document.write("</font></div>");
}
var ActiveItem="";
function mOclk(src,clrOver,clrIn){
	ActiveItem.bgColor = clrIn; 
	src.getElementsByTagName("input")[0].click();
	if (src.getElementsByTagName ("input")[0].checked) { 
		src.style.cursor = 'hand'; 
		src.bgColor = clrOver; 
	}
	else
	src.bgColor = clrIn;  
	//ActiveItem=src;
}
function mOclkx(src,clrOver,clrIn){
	ActiveItem.bgColor = clrIn; 
	if (!src.contains(event.fromElement)) { 
		src.style.cursor = 'hand'; 
		src.bgColor = clrOver; 
	}
	ActiveItem=src;
}
function CheckAll(form)
  {
  for (var i=0;i<form.elements.length;i++)
    {
    var e = form.elements[i];
    if (e.name != 'chkall')
       e.checked = form.chkall.checked;
    }
  }
function Refresh(){
	document.execCommand('Refresh')
}

function norightclick(e) 
{
 if (window.Event) 
 {
  if (e.which == 2 || e.which == 3)
   return false;
 }
 else
  if (event.button == 2 || event.button == 3)
  {
   event.cancelBubble = true
   event.returnValue = false;
   return false;
  }
}
function GoPage(frm){
	var p=frm.the_page.value;
	var str=frm.stringstr.value;
	if(p=='')
	p=1;
	window.location='?the_page='+p+'&'+str;
}