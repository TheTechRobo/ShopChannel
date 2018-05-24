
function ParentalRestrictions_selectOK()
{
	var pageNo = wii.subPageID;

	if((pageNo < 0) || (pageNo >= 5)) 
		wii.assert = 0;

	if(4 == pageNo)
	{
		wii.pageID = 33;
		wii.flush  = 64; // x wii.WriteBack()
//		wii.funcID = 21; // savePare (instant)
		location.href = "Middle_index.html";
//		setTimeout("ParentalRestrictions_waitFuncResult_savePare()",1000);
	}
	else
	{
		wii.subPageID = pageNo + 1;
		location.href = "Restrictions.html";
//		location.reload(true);
	}
	wii.se = 3;
}

function ParentalRestrictions_waitFuncResult_savePare()
{
	wii.se = 3;
	if( 0 == wii.funcResult )
	{
		setTimeout("ParentalRestrictions_waitFuncResult_savePare()",1000);
	}
	else
	{
		location.href = "Middle_index.html";
	}
}


function ParentalRestrictions_selectBack()
{
	var pageNo = wii.subPageID;

	if((pageNo < 0) || (pageNo >= 5)) 
		wii.assert = 0;

	wii.funcID = 25;
	wii.pageID = 33;
	wii.subPageID = 0;
	location.href = "Middle_index.html";
	wii.se = 4;
}

function ParentalRestrictions_init(pageNo)
{
	if((pageNo <= 0) || (pageNo >= 5)) 
		wii.assert = 0;

	var data    = wii.restrictions;
	var bitmask = 1 << (pageNo - 1);
	_moveFrameImageExe(2, 0 != ( data & bitmask ) ? 0 : 1 );
}

function ParentalRestrictions_selectItem(n)
{
	var pageNo = wii.subPageID;
	var bitmask = 1 << (pageNo - 1);

	if((pageNo <= 0) || (pageNo >= 5)) 
		wii.assert = 0;

	wii.restrictions = (n==0) ? ( 0x80 | bitmask ) : bitmask; 
	_moveFrameImageExe(2, (n == 0) ? 1 : 0 );

	wii.se = 5;
}

function ParentalMiddleIndex_setLocation(n)
{
	if( 0 == n )
	{
		wii.rate     = 0x100;
		wii.rateSave = 0;
		wii.pageID   = 13;    
		location.href = "Re_setting_index.html";
	}
	else
	{
		wii.subPageID    = 0;
		wii.restrictions = wii.restrictions; // looks like meaningless but ..
		location.href = "Restrictions.html";
	}
	wii.se = 3;
}

function ParentalMiddleIndex_Complete()
{
	wii.se = 3;
	wii.funcID = 21;
	data = wii.initFlag;
	if( data == 0 )
	{
		location.href = "../index02.html";
	}
	else
	{
		location.href = "../Setup/ScreenSave.html";
	}
}

function ParentalMiddleIndex_init(){
	
}

function setString_Answer_Master_Keycord()
{
	_commonSetString(3,15);
	setTimeout("waitFuncResult_Answer_Master_Keycord()",1000);
}

function setFinish_Answer_Master_Keycord()
{
	data = wii.initFlag;
	if( data == 0 )
	{
		location.href = "../index02.html";
	}
	else
	{
		location.href = "../Setup/ScreenSave.html";
	}
	wii.se = 4;
}

function waitFuncResult_Answer_Master_Keycord()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Common0105.html";
	}
	else if( result == 2 )
	{
		location.href = "Common0107.html";
	}
	setTimeout("waitFuncResult_Answer_Master_Keycord()",1000);
}


function setSecA_Answer_Secret_keyword()
{
	_commonSetString(3,14);
	setTimeout("waitFuncResult_Answer_Secret_keyword()",1000);
}

function setFinish_Answer_Secret_keyword()
{
	data = wii.initFlag;
	if( data == 0 )
	{
		location.href = "../index02.html";
	}
	else
	{
		location.href = "../Setup/ScreenSave.html";
	}
	wii.se = 4;
}

function waitFuncResult_Answer_Secret_keyword()
{
	result = wii.funcResult;
	if( result == 1 )
	{
//		wii.pageID = 13;
		wii.pageID = 33;
		location.href = "Middle_index.html";
	}
	else if( result == 2 )
	{
		location.href = "Common0103.html";
	}
	setTimeout("waitFuncResult_Answer_Secret_keyword()",1000);
}

function init_Answer_Secret_keyword(){
data = wii.secQ;
document.all.textfield.value = _msgParentalString[data];
}

function setString_Answer_Secret_number()
{
	_commonSetString(3,12);
	setTimeout("waitFuncResult_Answer_Secret_number()",1000);
}

function setFinish_Answer_Secret_number()
{
	data = wii.initFlag;
	if( data == 0 )
	{
		location.href = "../index02.html";
	}
	else
	{
		location.href = "../Setup/ScreenSave.html";
	}
	wii.se = 4;
}

function waitFuncResult_Answer_Secret_number()
{
	result = wii.funcResult;
	if( result == 1 )
	{
//		wii.pageID = 13;
		wii.pageID = 33;
		location.href = "Middle_index.html";
	}
	else if( result == 2 )
	{
		location.href = "Common0102.html";
	}
	
	setTimeout("waitFuncResult_Answer_Secret_number()",1000);
}

function moveCheckImage_CERO01()
{
	wii.excse = 5;
	document.all("List01Check").style.visibility="visible";
	wii.rate = 18;
}

function init_CERO01(){
// 初期化、wiiから取得した値を反映
var data = wii.rate;
if( data == 18 )
{
	document.all("List01Check").style.visibility="visible";
}
else
{
	document.all("List01Check").style.visibility="hidden";
}
}
function moveCheckImage_CERO02(n)
{
	rate = new Array(18,17,15,12,0);
	wii.excse = 5;
	if( n == 1 )
	{
		document.all("List01Check").style.visibility="visible";
		document.all("List02Check").style.visibility="hidden";
	}
	else if( n == 2 )
	{
		document.all("List01Check").style.visibility="hidden";
		document.all("List02Check").style.visibility="visible";
	}
	wii.rate = rate[n];
}

function init_CERO02(){
// 初期化、wiiから取得した値を反映
var data = wii.rate;
document.all("List01Check").style.visibility="hidden";
document.all("List02Check").style.visibility="hidden";
if( data == 17 )
{
	document.all("List01Check").style.visibility="visible";
}
else if( data == 15 )
{
	document.all("List02Check").style.visibility="visible";
}
}
function moveCheckImage_CERO03(n)
{
	rate = new Array(18,17,15,12,0);
	wii.excse = 5;
	if( n == 3 )
	{
		document.all("List01Check").style.visibility="visible";
		document.all("List02Check").style.visibility="hidden";
	}
	else if( n == 4 )
	{
		document.all("List01Check").style.visibility="hidden";
		document.all("List02Check").style.visibility="visible";
	}
	wii.rate = rate[n];
}

function init_CERO03(){
// 初期化、wiiから取得した値を反映
var data = wii.rate;
document.all("List01Check").style.visibility="hidden";
document.all("List02Check").style.visibility="hidden";
if( data == 12 )
{
	document.all("List01Check").style.visibility="visible";
}
else if( data == 0 )
{
	document.all("List02Check").style.visibility="visible";
}
}


function setReTry_Common0102()
{
	_commonSetFuncID(3,12);
	setTimeout("waitFuncResult_Common0102()",1000);
}

function waitFuncResult_Common0102()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		wii.pageID = 14;
		location.href = "Answer_Secret_keyword.html";
	}
	else if( result == 2 )
	{
		location.href = "Answer_Secret_number.html";
	}
	setTimeout("waitFuncResult_Common0102()",1000);
}

function setReTry_Common0103()
{
	_commonSetFuncID(3,13);
	setTimeout("waitFuncResult_Common0103()",1000);
}

function waitFuncResult_Common0103()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		wii.pageID = 15;
		location.href = "Common0104.html";
	}
	else if( result == 2 )
	{
		wii.pageID = 14;
		location.href = "Answer_Secret_keyword.html";
	}
	setTimeout("waitFuncResult_Common0103()",1000);
}

function init_Common0104(){
requestNum=wii.master;
document.all.mySet.innerHTML = requestNum;
}

function setFinish_Common0106()
{
	wii.se = 3;
	data = wii.initFlag;
	if( data == 0 )
	{
		location.href = "../index02.html";
	}
	else
	{
		location.href = "../Setup/ScreenSave.html";
	}
}

function setReTry_Common0107()
{
	_commonSetFuncID(3,14);
	setTimeout("waitFuncResult_Common0107()",1000);
}

function waitFuncResult_Common0107()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		data = wii.initFlag;
		if( data == 0 )
		{
			location.href = "../index02.html";
		}
		else
		{
			location.href = "../Setup/ScreenSave.html";
		}
	}
	else if( result == 2 )
	{
		location.href = "Answer_Master_Keycord.html";
	}
	setTimeout("waitFuncResult_Common0107()",1000);
}



function changeString_Input_Secret_keyword01(n)
{
	data = wii.secQ;
	data += n;
	document.all.textfield.value = _msgParentalString[data];
	
	if( data < 0 )
	{
		data = 0;
	}
	else if( data > 5 )
	{
		data = 5;
	}

	if( data == 0 )
	{
		document.all("ListUP").style.visibility="hidden";
		document.all("ListDW").style.visibility="visible";
	}
	else if( data == 5 )
	{
		document.all("ListUP").style.visibility="visible";
		document.all("ListDW").style.visibility="hidden";
	}
	else
	{
		document.all("ListUP").style.visibility="visible";
		document.all("ListDW").style.visibility="visible";
	}
	wii.secQ = data;
	wii.se = 1;
}

function init_Input_Secret_keyword01(){
data = wii.secQ;
if( data == 0 )
{
	document.all("ListUP").style.visibility="hidden";
	document.all("ListDW").style.visibility="visible";
}
else if( data == 5 )
{
	document.all("ListUP").style.visibility="visible";
	document.all("ListDW").style.visibility="hidden";
}
else
{
	document.all("ListUP").style.visibility="visible";
	document.all("ListDW").style.visibility="visible";
}
document.all.textfield.value = _msgParentalString[data];
}

function setSecA_Input_Secret_keyword02()
{
	_commonSetString(3,13);
	setTimeout("waitFuncResult_Input_Secret_keyword02()",1000);
}

function waitFuncResult_Input_Secret_keyword02()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_Input_Secret_keyword02()",1000); break;
	case 3: wii.pageID = 32;
		location.href = "Middle_index.html"; break;
	}
}

function init_Input_Secret_keyword02(){
text = wii.secA;
data = wii.secQ;
document.all.textfield.value = _msgParentalString[data];
document.all.textarea.value = text;
}

function setString_Input_Secret_number01()
{
	wii.pageID = 11;
	_commonSetString(3,10);
	setTimeout("waitFuncResult_Input_Secret_number01()",1000);
}

function waitFuncResult_Input_Secret_number01()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_Input_Secret_number01()",1000); break;
	case 3: location.href = "Input_Secret_number02.html"; break;
	}
}

function setString_Input_Secret_number02()
{
	_commonSetString(3,11);
	wii.pageID = 13;
	setTimeout("waitFuncResult_Input_Secret_number02()",1000);
}

function waitFuncResult_Input_Secret_number02()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0:
	case 3: setTimeout("waitFuncResult_Input_Secret_number02()",1000);           break;
	case 1: location.href = "Input_Secret_keyword01.html"; break;
	case 2: location.href = "Common0101.html";             break;
	}
}


function setPare_Last_Check()
{
//	wii.funcID = 21;
	wii.se = 3;
	data = wii.initFlag;
	if( data == 0 )
	{
		location.href = "../index02.html";
	}
	else
	{
		location.href = "../Setup/ScreenSave.html";
	}
}

function init_Last_Check(){
var rate = wii.rate;
var data = wii.secQ;
var st   = wii.secA;
var ogn  = wii.ogn;
var lang = wii.language;
document.all.textarea.value = _msgParentalString[data];
document.all.textfield.value = st;

_drawRating(ogn,rate,lang);
}

function setFlag_Parental_Control_index(n)
{
	if( n == 1 )
	{
		wii.se = 3;
		wii.pageID = 10;
	}
	else
	{
		wii.se = 4;
		data = wii.initFlag;
		if( data == 0 )
		{
			location.href = "../index02.html";
		}
		else
		{
			location.href = "../Setup/ScreenSave.html";
		}
	}
	wii.pare_flag = Number(n);
}


function setSE_Rating_select_flame_D()
{
	data = wii.rateSave;
	_commonSetPageID(4,13);
}

function changeString_Re_Input_Secret_keyword01(n)
{
	data = wii.secQ;
	data += n;
	document.all.textfield.value = _msgParentalString[data];
	
	if( data < 0 )
	{
		data = 0;
	}
	else if( data > 5 )
	{
		data = 5;
	}

	if( data == 0 )
	{
		document.all("ListUP").style.visibility="hidden";
		document.all("ListDW").style.visibility="visible";
	}
	else if( data == 5 )
	{
		document.all("ListUP").style.visibility="visible";
		document.all("ListDW").style.visibility="hidden";
	}
	else
	{
		document.all("ListUP").style.visibility="visible";
		document.all("ListDW").style.visibility="visible";
	}
	
	wii.secQ = data;
	wii.se = 1;
}

function setSE_Re_Input_Secret_keyword01()
{
	data = wii.secQSave;
	_commonSetPageID(4,13);
}

function init_Re_Input_Secret_keyword01(){
data = wii.secQ;
if( data == 0 )
{
	document.all("ListUP").style.visibility="hidden";
	document.all("ListDW").style.visibility="visible";
}
else if( data == 5 )
{
	document.all("ListUP").style.visibility="visible";
	document.all("ListDW").style.visibility="hidden";
}
else
{
	document.all("ListUP").style.visibility="visible";
	document.all("ListDW").style.visibility="visible";
}
document.all.textfield.value = _msgParentalString[data];
}

function setString_Re_Input_Secret_keyword02()
{
	_commonSetString(3,13);
	setTimeout("waitFuncResult_Re_Input_Secret_keyword02()",1000);
}

function waitFuncResult_Re_Input_Secret_keyword02()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_Re_Input_Secret_keyword02()",1000); break;
	case 3: location.href = "Re_Setting_index.html"; break;
	}
}
function init_Re_Input_Secret_keyword02(){
text = wii.secA;
data = wii.secQ;
document.all.textfield.value = _msgParentalString[data];
document.all.textarea.value = text;
}

function setString_Re_Input_Secret_number01()
{
	wii.pageID = 11;
	_commonSetString(3,10);
	setTimeout("waitFuncResult_Re_Input_Secret_number01()",1000);
}

function waitFuncResult_Re_Input_Secret_number01()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_Re_Input_Secret_number01()",1000); break;
	case 3: location.href = "Re_Input_Secret_number02.html"; break;
	}
}

function setString_Re_Input_Secret_number02()
{
	_commonSetString(3,11);
	wii.pageID = 13;
	setTimeout("waitFuncResult_Re_Input_Secret_number02()",1000);
}

function waitFuncResult_Re_Input_Secret_number02()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0:
	case 3: setTimeout("waitFuncResult_Re_Input_Secret_number02()",1000);     break;
	case 1: location.href = "Re_Setting_index.html";
		wii.pageID = 13;                         break;
	case 2: location.href = "Common0108.html";       break;
	}
}

function setFinish_Re_Parental_Control_index()
{
	data = wii.initFlag;
	if( data == 0 )
	{
		location.href = "../index02.html";
	}
	else
	{
		location.href = "../Setup/ScreenSave.html";
	}
	wii.se = 4;
}


function setBackRate_Re_Rating_select_flame_D()
{
	data = wii.rateSave;
	_commonSetPageID(4,13);
}

function setPare_Re_Setting_index()
{
	wii.se = 3;
//	wii.funcID = 21;
	wii.pageID = 33;
	location.href = "Middle_index.html";
}

function saveSecQ_Re_Setting_index()
{
	wii.secQSave = 0;
	wii.se = 3;
}

function saveRate_Re_Setting_index()
{
	wii.rateSave = 0;
	wii.se = 3;
	ogn = wii.ogn;
	switch(ogn)
	{
	case 3:	location.href = "USK/Re_Rating_select.html"; break;
	case 4:	location.href = "PEGI_General/Re_Rating_select.html"; break;
	case 5:	location.href = "PEGI_Finland/Re_Rating_select.html"; break;
	case 6:	location.href = "PEGI_Portugal/Re_Rating_select.html"; break;
	case 7:	location.href = "PEGI_BBFC/Re_Rating_select.html"; break;
	case 8: location.href = "OFLC_AUS/Re_Rating_select.html"; break;
	case 9: location.href = "OFLC_NZ/Re_Rating_select.html"; break;
	}
}

function init_Re_Setting_index(){
var rate = wii.rate;
var data = wii.secQ;
var st   = wii.secA;
var ogn  = wii.ogn;
var lang = wii.language;
document.all.textarea.value = _msgParentalString[data];
document.all.textfield.value = st;

_drawRating(ogn,rate,lang);
}

function moveCheckImage_ESRB01()
{
	wii.excse = 5;
	document.all("List01Check").style.visibility="visible";
	wii.rate = 20;
}

function init_ESRB01(){
var data = wii.rate;
if( data == 20 )
{
	document.all("List01Check").style.visibility="visible";
}
else
{
	document.all("List01Check").style.visibility="hidden";
}
}
function moveCheckImage_ESRB02()
{
	wii.excse = 5;
	document.all("List01Check").style.visibility="visible";
	wii.rate = 17;
}

function init_ESRB02(){
// 初期化、wiiから取得した値を反映
var data = wii.rate;
if( data == 17 )
{
	document.all("List01Check").style.visibility="visible";
}
else
{
	document.all("List01Check").style.visibility="hidden";
}
}
function moveCheckImage_ESRB03()
{
	wii.excse = 5;
	document.all("List01Check").style.visibility="visible";
	wii.rate = 13;
}

function init_ESRB03(){
// 初期化、wiiから取得した値を反映
var data = wii.rate;
if( data == 13 )
{
	document.all("List01Check").style.visibility="visible";
}
else
{
	document.all("List01Check").style.visibility="hidden";
}
}
function moveCheckImage_ESRB04()
{
	wii.excse = 5;
	document.all("List01Check").style.visibility="visible";
	wii.rate = 10;
}

function init_ESRB04(){
// 初期化、wiiから取得した値を反映
var data = wii.rate;
if( data == 10 )
{
	document.all("List01Check").style.visibility="visible";
}
else
{
	document.all("List01Check").style.visibility="hidden";
}
}
function moveCheckImage_ESRB05()
{
	wii.excse = 5;
	document.all("List01Check").style.visibility="visible";
	wii.rate = 6;
}

function init_ESRB05(){
// 初期化、wiiから取得した値を反映
var data = wii.rate;
if( data == 6 )
{
	document.all("List01Check").style.visibility="visible";
}
else
{
	document.all("List01Check").style.visibility="hidden";
}
}
function moveCheckImage_ESRB06()
{
	wii.excse = 5;
	document.all("List01Check").style.visibility="visible";
	wii.rate = 3;
}

function init_ESRB06(){
// 初期化、wiiから取得した値を反映
var data = wii.rate;
if( data == 3 )
{
	document.all("List01Check").style.visibility="visible";
}
else
{
	document.all("List01Check").style.visibility="hidden";
}
}

function init_Last_CheckUS(){
var rate = wii.rate;
var data = wii.secQ;
var st   = wii.secA;
document.all.textarea.value = _msgParentalString[data];
document.all.textfield.value = st;
_msgParentalESRBDraw(rate);
}

function init_Re_Setting_indexUS(){
var rate = wii.rate;
var data = wii.secQ;
var st   = wii.secA;
document.all.textarea.value = _msgParentalString[data];
document.all.textfield.value = st;
_msgParentalESRBDraw(rate);
}

function init_Last_CheckUS_FRA(){
var rate = wii.rate;
var data = wii.secQ;
var st   = wii.secA;
document.all.textarea.value = _msgParentalString[data];
document.all.textfield.value = st;
_msgParentalESRB_FRADraw(rate);
}

function init_Re_Setting_indexUS_FRA(){
var rate = wii.rate;
var data = wii.secQ;
var st   = wii.secA;
document.all.textarea.value = _msgParentalString[data];
document.all.textfield.value = st;
_msgParentalESRB_FRADraw(rate);
}

function askUserConfirm()
{
	wii.funcID = 26;
	wii.se = 1;
	MM_swapImgRestore();
	setTimeout("waitFuncResult_askUserConfirm()",1000);
}

function waitFuncResult_askUserConfirm()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_askUserConfirm()",1000); break;
	case 1: location.href = "Input_Secret_number01.html"; break
	case 2: location.href = "Parental_Control_index.html"; break;
	}
}
