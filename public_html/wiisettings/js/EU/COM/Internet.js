// +-ボタンのスクロールを行った後、次の入力を20フレーム強、約0.35秒待たせる
var waitCheckCSRTime = 350;

function waitFuncResult_APlist_select_Flame()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Wi_Fi_security_keycode.html";
	}
	else if( result == 2 )
	{
		location.href = "Common0205.html";
	}
	setTimeout("waitFuncResult_APlist_select_Flame()",1000);
}

function resetData_APlist_select_Flame()
{
	_commonSetFuncID(4,5);
	data = wii.resetNCD;
}

function init_APlist_select_Flame(){
data=wii.profileID+1;
_msgConnectNum(data);
setTimeout("waitFuncResult_APlist_select_Flame()",1000);
wii.funcID = 3;
wii.pageID = 16;
}

function init_Common0101(){
data=wii.profileID+1;
_msgConnectNum(data);
wii.funcID = 24;
}

function waitFuncResult_Common0102()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Common0214.html";
	}
	else if( result == 2 )
	{
		location.href = "Common0103.html";
	}
	setTimeout("waitFuncResult_Common0102()",1000);
}

function init_Common0102(){
data=wii.profileID+1;
_msgConnectNum(data);
setTimeout("waitFuncResult_Common0102()",1000);
wii.funcID = 2;
}

function init_Common0103(){
data=wii.profileID+1;
_msgConnectNum(data);
wii.funcID = 20;
}

function init_Common0105(){
data=wii.profileID+1;
_msgConnectNum(data);
wii.funcID = 24;
}

function waitFuncResult_Common0106()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "../Update/Update_EULA.html";
	}
	else if( result == 2 )
	{
		location.href = "Re_Connect_set.html";
	}
	setTimeout("waitFuncResult_Common0106()",1000);
}

function init_Common0106(){
data=wii.profileID+1;
_msgConnectNum(data);
setTimeout("waitFuncResult_Common0106()",1000);
}

function init_Common0108(){
data=wii.profileID+1;
_msgConnectNum(data);
_msgUseConnect();
}

function init_Common0109(){
data=wii.profileID+1;
_msgConnectNum(data);
wii.funcID = 24;
}

function init_Common0110(){
data=wii.profileID+1;
_msgConnectNum(data);
wii.funcID = 24;
}

function resetData_Common0201()
{
	data = wii.resetNCD;
	wii.se = 4;
}


function init_Common0201(){
data=wii.profileID+1;
_msgConnectNum(data);
}

function waitFuncResult_Common0202()
{
//	if( flag == 0 )
//	{
		result = wii.funcResult;
//	}
	if( result == 1 )
	{
		location.href = "Common0203.html";
	}
	else if( result == 2 )
	{
		location.href = "Common0204.html";
	}
//	if( flag == 0 )
//	{
		setTimeout("waitFuncResult_Common0202()",1000);
//	}
}



function waitCancelResult_Common0202()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Common0203.html";
	}
	else if( result == 2 )
	{
		location.href = "Common0204.html";
	}
	else if( result == 5 )
	{
		location.href = "Common0201.html";
	}
	wii.funcID = 31;
	setTimeout("waitCancelResult_Common0202()",1000);
}

function cancelUsb_Common0202()
{
//	flag = 1;
	wii.funcID = 31;
	wii.se = 4;
	location.href = "Common0201.html";
}

function init_Common0202(){
data=wii.profileID+1;
_msgConnectNum(data);
setTimeout("waitFuncResult_Common0202()",1000);
}

function init_Common0203(){
data=wii.profileID+1;
_msgConnectNum(data);
}

function init_Common0204(){
data=wii.profileID+1;
_msgConnectNum(data);
}
function setWiiData_Common0205()
{
	wii.se = 3;
	wii.funcID = 24;
}

function redrawAP_Common0205()
{
	wii.se = 4;
	wii.funcID = 7;
}

function init_Common0205(){
// 初期化、wiiから取得した値を反映
data=wii.profileID+1;
_msgConnectNum(data);
document.all.mySet.innerHTML = wii.ssID;
}

function init_Common0206(){
// 初期化、wiiから取得した値を反映
data=wii.profileID+1;
_msgConnectNum(data);
document.all.mySet.innerHTML = wii.ssID;
}

function waitFuncResult_Common0207()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		wii.funcID = 9;
		location.href = "Common0106.html";
	}
	else if( result == 2 )
	{
		location.href = "Re_Connect_set.html";
	}
	setTimeout("waitFuncResult_Common0207()",1000);
	
}
function init_Common0207(){
data=wii.profileID+1;
_msgConnectNum(data);
setTimeout("waitFuncResult_Common0207()",1000);
wii.funcID = 1;
}

function init_Common0208(){
data=wii.profileID+1;
_msgConnectNum(data);
_msgClearSetting(data);
}

function waitFuncResult_Common0209()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Common0210.html";
	}
	else if( result == 10 )
	{
		location.href = "Wi_Fi_set_top.html";
	}
	else if( result == 5 ) // canceled
	{
		location.href = "Wi_Fi_set_top.html";
	}
	else if( result != 0 ) // fail
	{
		// show error dialog
		wii.funcID = 34;
	}

	setTimeout("waitFuncResult_Common0209()" , 200);
}

function init_Common0209(){
data=wii.profileID+1;
_msgConnectNum(data);
wii.funcID = 32;
setTimeout("waitFuncResult_Common0209()",1000);
//[todo]
//wii.funcID = 5;
}

function init_Common0210(){
data=wii.profileID+1;
_msgConnectNum(data);
document.all.titleName.innerHTML = "「接続先"+data+"」の設定";
wii.funcID = 20; // saving data	
}

function waitFuncResult_Common0211()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Common0212.html";
	}
	else if( result == 10 )
	{
		location.href = "Wi_Fi_set_top.html";
	}
	else if( result == 5 ) // cancel
	{
		location.href = "Wi_Fi_set_top.html";
	}
	else if( result != 0 )
	{
		// show error dialog
		wii.funcID = 44;
	}

	setTimeout("waitFuncResult_Common0211()",200);
}

function init_Common0211(){
data=wii.profileID+1;
wii.funcID = 40;
setTimeout("waitFuncResult_Common0211()",1000);
_msgConnectNum(data);
_msgWirelessSetting(data);
}

function waitFuncResult_Common0212()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Common0212b.html";
	}
	else if( result == 10 )
	{
		location.href = "Wi_Fi_set_top.html";
	}
	else if( result == 5 )
	{
		location.href = "Wi_Fi_set_top.html";
	}
	else if( result != 0 )
	{
		// show error dialog
		wii.funcID = 44;
	}

	setTimeout("waitFuncResult_Common0212()",200);
	
}
function init_Common0212(){
data=wii.profileID+1;
wii.funcID = 41;
setTimeout("waitFuncResult_Common0212()",1000);
_msgConnectNum(data);
_msgWirelessSetting(data);
}

function waitFuncResult_Common0212b()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Common0213.html";
	}
	else if( result == 10 )
	{
		location.href = "Wi_Fi_set_top.html";
	}
	else if( result == 5 )
	{
		location.href = "Wi_Fi_set_top.html";
	}
	else if( result != 0 )
	{
		// show error dialog
		wii.funcID = 44;
	}

	setTimeout("waitFuncResult_Common0212b()",200);
	
}
function init_Common0212b(){
data=wii.profileID+1;
wii.funcID = 42;
setTimeout("waitFuncResult_Common0212b()",1000);
_msgConnectNum(data);
_msgWirelessSetting(data);
}

function init_Common0213(){
data=wii.profileID+1;
_msgConnectNum(data);
_msgWirelessSetting(data);
}

function init_Common0214(){
data=wii.profileID+1;
_msgConnectNum(data);
}

function setWire_Connect_select()
{
	wii.selectWire = 1;
	wii.se = 3;
}

function init_Connect_select(){
data=wii.profileID+1;
_msgConnectNum(data);
}


function setProfileID_Connect_set_top(n)
{
	wii.profileID = n;
	wii.se = 3;
}

function jump_Connect_set_top(n)
{
	var type;
	switch(n)
	{
	case 0:
		type = wii.connectType1;
		break;
	case 1:
		type = wii.connectType2;
		break;
	case 2:
		type = wii.connectType3;
		break;
	}
	if( type == 0 )
	{
		jpURL = "Connect_select.html";
	}
	else
	{
//		wii.useID = n;
		jpURL = "Re_Connect_set.html";
	}
	location.href = jpURL;
}

function init_Connect_set_top(){
// 初期化、wiiから取得した値を反映
var data = wii.useID;
_moveFrameImageExe(3,data);
var type1 = wii.connectType1;
var type2 = wii.connectType2;
var type3 = wii.connectType3;
if( type1 < 3 )
{
	_msgConnectType1Setting(type1);
}
else
{
	_drawConnectType(0,type1-3);
}
if( type2 < 3 )
{
	_msgConnectType2Setting(type2);
}
else
{
	_drawConnectType(1,type2-3);
}
if( type3 < 3 )
{
	_msgConnectType3Setting(type3);
}
else
{
	_drawConnectType(2,type3-3);
}
}

// Basic認証文字列決定
function setString_Hand_Basic_keycode()
{
	wii.setstring = 8;
	wii.se = 3;
	setTimeout("waitFuncResult_Hand_Basic_keycode()",1000);
}

// Basic認証文字列判定待ち
function waitFuncResult_Hand_Basic_keycode()
{
	result = wii.funcResult;
	if( result == 3 )
	{
		location.href = "Hand_Proxy_keycode.html";
	}
	else if( result == 0 )
	{
		setTimeout("waitFuncResult_Hand_Basic_keycode()",1000);
	}
}

// Basic認証初期化関数
function init_Hand_Basic_keycode(){
data=wii.profileID+1;
_msgConnectNum(data);
document.all.textfield.value=wii.basicName;
document.all.password.value=wii.basicPass;
}

function moveCheckImage_Hand_Connect_select(n)
{
	_moveFrameImage1Exe(2,n);
	if( n == 0 )
	{
		wii.changeConnectType = 1;
	}
	else
	{
		wii.changeConnectType = 2;
	}
	wii.se = 3;
}

function resetData_Hand_Connect_select()
{
	wii.se = 4;
	data = wii.resetNCD;
}

function JSLeftScroll_Hand_Connect_select()
{
	_commonLeftScroll();
	wii.setstring = 4;
	wii.pageID = 9;
}

function JSRightScroll_Hand_Connect_select()
{
	_commonRightScroll();
	wii.setstring = 4;
}

function checkCSRKey_Hand_Connect_select()
{
	if (event.keyCode == 39)
	{
		location.href = "Hand_Wi_Fi_select_security.html";
		JSRightScroll_Hand_Connect_select();
	}
	else if (event.keyCode == 37)
	{
		location.href = "Hand_MTU_keycode.html";
		JSLeftScroll_Hand_Connect_select();
	}
}

function waitcheckCSRKey_Hand_Connect_select()
{
	window.document.onkeydown = checkCSRKey_Hand_Connect_select;
}

function init_Hand_Connect_select(){
data=wii.profileID+1;
_msgConnectNum(data);
data=wii.connectType;
if( data == 1 )
{
	_moveFrameImage1Exe(2,0);
}
else
{
	_moveFrameImage1Exe(2,1);
}
document.form1.textfield.value=wii.ssID;

setTimeout("waitcheckCSRKey_Hand_Connect_select()",waitCheckCSRTime);
}

function init_Hand_DNS_keycode(){
data=wii.profileID+1;
_msgConnectNum(data);
document.all.textfield.value=wii.dns1;
document.all.textfield2.value=wii.dns2;
}

function moveCheckImage_Hand_DNS_select(n)
{
	_moveFrameImageExe(2,n);
	if(n == 1)
	{
		document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05_Dark.gif)";
		document.all("List02").style.visibility="hidden";
	}
	else
	{
		document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05.gif)";
		document.all("List02").style.visibility="visible";
	}
	wii.autoDNS = Number(n);
	wii.se = 3;
}

function resetData_Hand_DNS_select()
{
	wii.se = 4;
	data = wii.resetNCD;
}

function JSRightScroll_Hand_DNS_select()
{
	wii.pageID = 9;
	_commonRightScroll();
}

function checkCSRKey_Hand_DNS_select()
{
	if (event.keyCode == 39)
	{
		location.href = "Hand_Proxy_select.html";
		JSRightScroll_Hand_DNS_select();
	}
	else if (event.keyCode == 37)
	{
		location.href = "Hand_IPAddress_select.html";
		_commonLeftScroll();
	}
}

function waitcheckCSRKey_Hand_DNS_select()
{
	window.document.onkeydown = checkCSRKey_Hand_DNS_select;
}

function init_Hand_DNS_select(){
data=wii.profileID+1;
_msgConnectNum(data);
ip=wii.autoIP;
if(ip == 0)
{
	document.getElementById("mySet2").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List04_Dark.gif)";
	document.all("List01").style.visibility="hidden";
}
else
{
	document.getElementById("mySet2").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List04.gif)";
	document.all("List01").style.visibility="visible";
}

data=wii.autoDNS;
if(data == 1)
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05_Dark.gif)";
	document.all("List02").style.visibility="hidden";
}
else
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05.gif)";
	document.all("List02").style.visibility="visible";
}
_moveFrameImageExe(2,data);

setTimeout("waitcheckCSRKey_Hand_DNS_select()",waitCheckCSRTime);
}

function init_Hand_IPAddress_keycode(){
data=wii.profileID+1;
_msgConnectNum(data);
document.all.textfield22.value=wii.ipAddr;
document.all.textfield2.value=wii.subnet;
document.all.textfield3.value=wii.gateway;
}
function moveCheckImage_Hand_IPAddress_select(n)
{
	_moveFrameImageExe(2,n);
	if(n == 1)
	{
		document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05_Dark.gif)";
		document.all("List03").style.visibility="hidden";
	}
	else
	{
		document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05.gif)";
		document.all("List03").style.visibility="visible";
	}
	wii.autoIP = Number(n);
	wii.se = 3;
}

function resetData_Hand_IPAddress_select()
{
	wii.se = 4;
	data = wii.resetNCD;
}

function checkCSRKey_Hand_IPAddress_select()
{
	if (event.keyCode == 39)
	{
		location.href = "Hand_DNS_select.html";
		_commonRightScroll();
	}
	else if (event.keyCode == 37)
	{
		location.href = "Hand_Wi_Fi_select_security.html";
		_commonLeftScroll();
	}
}

function waitcheckCSRKey_Hand_IPAddress_select()
{
	window.document.onkeydown = checkCSRKey_Hand_IPAddress_select;
}

function init_Hand_IPAddress_select(){
data=wii.profileID+1;
_msgConnectNum(data);
data=wii.autoIP;
if(data == 1)
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05_Dark.gif)";
	document.all("List03").style.visibility="hidden";
}
else
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05.gif)";
	document.all("List03").style.visibility="visible";
}
_moveFrameImageExe(2,data);

setTimeout("waitcheckCSRKey_Hand_IPAddress_select()",waitCheckCSRTime);
}

function setPage_Hand_MTU_keycode()
{
	wii.pageID = 4;
	wii.setstring = 9;
	_commonRightScroll();
}

function JSLeftScroll_Hand_MTU_keycode()
{
	wii.setstring = 9;
	_commonLeftScroll();
}

function resetData_Hand_MTU_keycode()
{
	wii.se = 4;
	data = wii.resetNCD;
}

function checkCSRKey_Hand_MTU_keycode()
{
	if (event.keyCode == 39)
	{
		location.href = "Hand_Connect_select.html";
		setPage_Hand_MTU_keycode();
	}
	else if (event.keyCode == 37)
	{
		location.href = "Hand_Proxy_select.html";
		JSLeftScroll_Hand_MTU_keycode();
	}
}

function waitcheckCSRKey_Hand_MTU_keycode()
{
	window.document.onkeydown = checkCSRKey_Hand_MTU_keycode;
}

function init_Hand_MTU_keycode(){
data=wii.profileID+1;
_msgConnectNum(data);
document.all.textfield2.value=wii.mtu;

setTimeout("waitcheckCSRKey_Hand_MTU_keycode()",waitCheckCSRTime);
}

// Proxy文字列決定
function setString_Hand_Proxy_keycode()
{
	wii.setstring = 7;
	wii.se = 3;
	setTimeout("waitFuncResult_Hand_Proxy_keycode()",1000);
}

// Proxy文字列判定待ち
function waitFuncResult_Hand_Proxy_keycode()
{
	result = wii.funcResult;
	if( result == 3 )
	{
		location.href = "Hand_Proxy_select.html";
	}
	else if( result == 0 )
	{
		setTimeout("waitFuncResult_Hand_Proxy_keycode()",1000);
	}
}

function moveCheckImage_Hand_Proxy_keycode(n)
{
	_moveFrameImageExe(2,n);
	if(n == 0)
	{
		document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05_Dark.gif)";
		document.all("List02").style.visibility="hidden";
	}
	else
	{
		document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05.gif)";
		document.all("List02").style.visibility="visible";
	}
	wii.autoBasic = n;
	wii.se = 3;
}

// Proxy初期化関数
function init_Hand_Proxy_keycode(){
document.all.textfield.value=wii.proxy;
document.all.textfield22.value=wii.proxyPort;
data=wii.profileID+1;
_msgConnectNum(data);
data=wii.autoBasic;
if(data == 0)
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05_Dark.gif)";
	document.all("List02").style.visibility="hidden";
}
else
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05.gif)";
	document.all("List02").style.visibility="visible";
}
_moveFrameImageExe(2,data);

}

function moveCheckImage_Hand_Proxy_select(n)
{
	_moveFrameImageExe(2,n);
	if(n == 0)
	{
		document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05_Dark.gif)";
		document.all("List02").style.visibility="hidden";
	}
	else
	{
		document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05.gif)";
		document.all("List02").style.visibility="visible";
	}
	wii.autoProxy = n;
	wii.se = 3;
}

function JSRightScroll_Hand_Proxy_select()
{
	wii.pageID = 9;
	_commonRightScroll();
}

function resetData_Hand_Proxy_select()
{
	wii.se = 4;
	data = wii.resetNCD;
}

function checkCSRKey_Hand_Proxy_select()
{
	if (event.keyCode == 39)
	{
		location.href = "Hand_MTU_keycode.html";
		JSRightScroll_Hand_Proxy_select();
	}
	else if (event.keyCode == 37)
	{
		location.href = "Hand_DNS_select.html";
		_commonLeftScroll();
	}
}

function waitcheckCSRKey_Hand_Proxy_select()
{
	window.document.onkeydown = checkCSRKey_Hand_Proxy_select;
}

function init_Hand_Proxy_select(){
data=wii.profileID+1;
_msgConnectNum(data);
data=wii.autoProxy;
if(data == 0)
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05_Dark.gif)";
	document.all("List02").style.visibility="hidden";
}
else
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05.gif)";
	document.all("List02").style.visibility="visible";
}
_moveFrameImageExe(2,data);

setTimeout("waitcheckCSRKey_Hand_Proxy_select()",waitCheckCSRTime);
}

function setSecurityKey_Hand_Wi_Fi_security_keycode()
{
	setTimeout("waitFuncResult_Hand_Wi_Fi_security_keycode()",1000);
	_commonSetString(3,3);
}

function setBackSecKey_Hand_Wi_Fi_security_keycode()
{
	wii.backSecKey = 0;
	wii.se = 4;
}

function waitFuncResult_Hand_Wi_Fi_security_keycode()
{
	result = wii.funcResult;
	if( result == 3 )
	{
		location.href = "Hand_Wi_Fi_select_security.html";
	}
	else if( result == 0 )
	{
		setTimeout("waitFuncResult_Hand_Wi_Fi_security_keycode()",1000);
	}
}

function init_Hand_Wi_Fi_security_keycode(){
data=wii.profileID+1;
_msgConnectNum(data);
document.all.textfield.value = wii.securityKey;
data=wii.selectSecKey;
_msgSecurityType(data);
}

function setWiiData_Hand_Wi_Fi_select_security(n)
{
	wii.se = 3;
	_moveFrameImageExe(4,n);
	wii.pageID = 3;
	wii.selectSecKey = Number(n+1);
}
function resetData_Hand_Wi_Fi_select_security()
{
	wii.se = 4;
	data = wii.resetNCD;
}

function JSLeftScroll_Hand_Wi_Fi_select_security()
{
	_commonLeftScroll();
	wii.pageID = 4;
}

function checkCSRKey_Hand_Wi_Fi_select_security()
{
	if (event.keyCode == 39)
	{
		location.href = "Hand_IPAddress_select.html";
		_commonRightScroll();
	}
	else if (event.keyCode == 37)
	{
		location.href = "Hand_Connect_select.html";
		JSLeftScroll_Hand_Wi_Fi_select_security();
	}
}

function waitcheckCSRKey_Hand_Wi_Fi_select_security()
{
	window.document.onkeydown = checkCSRKey_Hand_Wi_Fi_select_security;
}

function init_Hand_Wi_Fi_select_security(){
data=wii.profileID+1;
_msgConnectNum(data);
data=wii.selectSecKey - 1;
_moveFrameImageExe(4,data);
type=wii.connectType;
name2 = new Array("mySet1","mySet2","mySet3","mySet4");
name1 = new Array("List01","List02","List03","List04");
if( type != 1 )
{
	_moveFrameImageExe(4,data);
	for( i = 0; i < 4; i++ )
	{
		document.getElementById(name2[i]).style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05.gif)";
		document.all(name1[i]).style.visibility="visible";
	}
}
else
{
	_moveFrameImageExe(4,5);
	for( i = 0; i < 4; i++ )
	{
		document.getElementById(name2[i]).style.backgroundImage = "url(../../../COMMON/BTN/Btn_List05_Dark.gif)";
		document.all(name1[i]).style.visibility="hidden";
	}

}
setTimeout("waitcheckCSRKey_Hand_Wi_Fi_select_security()",waitCheckCSRTime);
}

function waitFuncResult_Internet_index()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_Internet_index()",1000); break;
	case 1: location.href = "EULA_index.html"; break;
	}
}

function setParentalDialog_Internet_index()
{
	wii.se = 3;
	wii.funcID =29;
	setTimeout("waitFuncResult_Internet_index()",1000);
}

function init_Internet_index(){
wii.funcID = 91;
}

function waitFuncResult_SafeMode_Internet_index()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_SafeMode_Internet_index()",200); break;
	case 1: location.href = "EULA_index.html"; break;
	}
}

function checkSafeMode_Internet_index()
{
	_commonSetFuncID(3,103);
	setTimeout("waitFuncResult_SafeMode_Internet_index()",200);
}

function waitFuncResult_EULA_index()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_EULA_index()",1000); break;
	case 1: location.href = "Internet_index.html"; break;
	case 2: location.href = "../index02.html"; break;
	case 6: location.href = "Internet_index.html"; break;
	case 7: location.href = "Internet_index.html"; break;
	case 8: location.href = "../Update/Update_index.html"; break;
	}
}

function init_EULA_index()
{
	setTimeout("waitFuncResult_EULA_index()",1000);
}

function init_MAC_address(){
string = wii.lanMac;
data = wii.macAvailable;
if( data == 0 )
{
	string = string.fontcolor("#333333");
}
document.all.myMac.innerHTML = wii.macAddr;
document.all.myLanMac.innerHTML = string;
_msgMacAddress(data);
}

function setUseID_Re_Connect_set()
{
	wii.useID = 0;
	wii.se = 3;
}

function setWiiData_Re_Connect_set()
{
	_commonSetPageID(3,4);
	data = wii.backupNCD;
}
function init_Re_Connect_set(){
wii.funcID = 92;
data=wii.profileID+1;
_msgConnectNum(data);
con = wii.connectTest;
if(con == 0)
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List03_Dark.gif)";
	document.all("List01").style.visibility="hidden";
}
else
{
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List03.gif)";
	document.all("List01").style.visibility="visible";
}
data = wii.changeEnable;
if(data == 0)
{
	document.getElementById("mySet1").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List03_Dark.gif)";
	document.all("List03").style.visibility="hidden";
}
else
{
	document.getElementById("mySet1").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List03.gif)";
	document.all("List03").style.visibility="visible";
}
}

function setString_Wi_Fi_security_keycode()
{
	setTimeout("waitFuncResult_Wi_Fi_security_keycode()",1000);
	_commonSetString(3,3);
}

function waitFuncResult_Wi_Fi_security_keycode()
{
	result = wii.funcResult;
	if( result == 3 )
	{
		location.href = "Common0205.html";
	}
	else if( result == 0 )
	{
		setTimeout("waitFuncResult_Wi_Fi_security_keycode()",1000);
	}
}

function init_Wi_Fi_security_keycode(){
data=wii.profileID+1;
_msgConnectNum(data);
document.all.mySet.innerHTML = wii.ssID;
document.all.textfield.value = wii.dummySec;
data=wii.selectSecKey;
_msgSecurityType(data);
setTimeout("waitFuncResult_Wi_Fi_security_keycode()",1000);
}

function setWiiData_Wi_Fi_select_security(n)
{
	_moveFrameImageExe(4,n);
	wii.selectSecKey = Number(n+1);
	wii.se = 3;
}

function init_Wi_Fi_select_security(){
data=wii.profileID+1;
_msgConnectNum(data);
data=wii.selectSecKey - 1;
_moveFrameImageExe(4,data);
}

function setWiFiType_Wi_Fi_set_top(n)
{
	if( n == 0 )
	{
		wii.pageID = 4;
	}
	data = wii.backupNCD;
	wii.wifiType = Number(n);
	wii.se = 3;
}

function init_Wi_Fi_set_top(){
data=wii.profileID+1;
_msgConnectNum(data);
wii.funcID = 16;
}
