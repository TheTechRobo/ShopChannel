
function setCountry_EU_Country_flame_D()
{
	_commonSetFuncID(3,83);
	setTimeout("waitFuncResult_EU_Country_flame_D()",1000);
}

function waitFuncResult_EU_Country_flame_D()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_EU_Country_flame_D()",1000); break;
	case 1: data = wii.initFlag;
		wii.WriteBack();
		if( data == 0 )
		{
			top.location.href = "../index03.html";
		}
		else
		{
			top.location.href = "../Parental_Control/Parental_Control_index.html";
		}
		break;
	}
}

function setSE_EU_Country_flame_D()
{
	wii.countrySave = 0;
	wii.se = 4;
	data = wii.initFlag;
	if( data == 0 )
	{
		top.location.href = "../index03.html";
	}
	else
	{
		top.location.href = "../Setup/Nickname_set.html";
	}
}


function moveCheckImage_EU_Country_select01(n)
{
	wii.excse = 5;
	_moveFrameImageExe(4,n);
	wii.country = n + 1 + 63;
}

function init_EU_Country_select01(){
var data = wii.country - 1 - 63;
if( data < 4 )
{
	_moveFrameImageExe(4,data);
}
}
function moveCheckImage_EU_Country_select02(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5+63;
}

function init_EU_Country_select02(){
var data = wii.country-5-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select03(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*2+63;
}

function init_EU_Country_select03(){
var data = wii.country-5*2-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select04(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*3+63;
}

function init_EU_Country_select04(){
var data = wii.country-5*3-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select05(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*4+63;
}

function init_EU_Country_select05(){
var data = wii.country-5*4-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select06(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*5+63;
}

function init_EU_Country_select06(){
var data = wii.country-5*5-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select07(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*6+63;
}

function init_EU_Country_select07(){
var data = wii.country - 5*6-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select08(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*7+63;
}

function init_EU_Country_select08(){
var data = wii.country-5*7-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select09(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*8+63;
}

function init_EU_Country_select09(){
var data = wii.country-5*8-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select10(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*9+63;
}

function init_EU_Country_select10(){
var data = wii.country-5*9-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select11(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*10+63;
}

function init_EU_Country_select11(){
var data = wii.country-5*10-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
function moveCheckImage_EU_Country_select12(n)
{
	wii.excse = 5;
	_moveFrameImageExe(5,n);
	wii.country = n+5*11+63;
}

function init_EU_Country_select12(){
var data = wii.country-5*11-63;
if( data < 5 )
{
	_moveFrameImageExe(5,data);
}
}
