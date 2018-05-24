

function changeDisplayPos_Position_set(n)
{
	var plus_minus;
	dis_pos = wii.dis_pos;

	dis_pos += n;

	if( dis_pos < 0 )
	{
		dis_pos = 0;
		wii.se = 6;
	}
	else if( dis_pos > 32 )
	{
		dis_pos = 32;
		wii.se = 6;
	}
	else if( n != 0 )
	{
		wii.se = 5;
	}

	if( dis_pos > 16 )
	{
		plus_minus = "-" + ((dis_pos-16)/2);
	}
	else if( dis_pos == 16 )
	{
		plus_minus = "  " + 0;
	}
	else
	{
		plus_minus = "+" + Math.abs((dis_pos-16)/2);
	}

	if(document.all)
	{
		box.innerHTML = plus_minus;
	}
	else if(document.layers)
	{
		box.document.open();
		box.document.write(plus_minus);
		box.document.close();
	}

	//CコードのwiiSetterが呼ばれる
	wii.dis_pos = Number(dis_pos);
}

function setWiiData_Position_set(n)
{
	if( n == 0 )
	{
		wii.se = 4;
	}
	else
	{
		wii.se = 3;
	}
	wii.WriteBack(n);
}

function init_Position_set(){
changeDisplayPos_Position_set(0);
}

var dtv = 0;

function moveCheckImage_Progressive_set(n)
{
	wii.se = 5;
	_moveFrameImageExe(2,n);
	wii.progressive = Number(n);
}

function waitFuncResult_Progressive_set()
{
	var data = wii.dtv;

	if( dtv != data )
	{
		if( data == 0 )
		{
			wii.progressive = 0;
//			wii.WriteBack();
			_moveFrameImageExe(2,0);
			document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List_Dark.gif)";
			document.all("List01").style.visibility="hidden";
		}
		else
		{
			document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List.gif)";
			document.all("List01").style.visibility="visible";
		}
		dtv = data;
	}
	setTimeout("waitFuncResult_Progressive_set()",1000);
}
function init_Progressive_set(){
dtv = wii.dtv;
if( dtv == 0 )
{
	wii.progressive = 0;
	_moveFrameImageExe(2,0);
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List_Dark.gif)";
	document.all("List01").style.visibility="hidden";
}
else
{
	data = wii.progressive;
	_moveFrameImageExe(2,data);
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List.gif)";
	document.all("List01").style.visibility="visible";
}
setTimeout("waitFuncResult_Progressive_set()",1000);
}

function moveCheckImage_Wide_set(n)
{
	wii.se = 5;
	_moveFrameImageExe(2,n);
	wii.dis_wide = Number(n^1);
}

function init_Wide_set(){
// 初期化、wiiから取得した値を反映
var data = wii.dis_wide;
_moveFrameImageExe(2,data^1);
}

function moveCheckImage_Yakituki_set(n)
{
	wii.se = 5;
	_moveFrameImageExe(2,n);
	wii.screensaver = Number(n);
}

function init_Yakituki_set(){
// 初期化、wiiから取得した値を反映
var data = wii.screensaver;
_moveFrameImageExe(2,data);
}

function moveCheckImage_Progressive_setEU(n)
{
	wii.se = 5;
	_moveFrameImageExe(3,n);
	switch(n)
	{
	case 0:
		wii.progressive = 1;
		wii.pal = 1;
		break;
	case 1:
		wii.progressive = 0;
		wii.pal = 0;
		break;
	case 2:
		wii.progressive = 0;
		wii.pal = 1;
		break;
	}
}

function waitFuncResult_Progressive_setEU()
{
	var data = wii.dtv;

	if( dtv != data )
	{
		if( data == 0 )
		{
			wii.progressive = 0;
//			wii.WriteBack();
			pal = wii.pal;
			if( pal == 0 )
			{
				_moveFrameImageExe(3,1);
			}
			else
			{
				_moveFrameImageExe(3,2);
			}
			document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List_Dark.gif)";
			document.all("List01").style.visibility="hidden";
		}
		else
		{
			document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List.gif)";
			document.all("List01").style.visibility="visible";
		}
		dtv = data;
	}
	setTimeout("waitFuncResult_Progressive_setEU()",1000);
}

function init_Progressive_setEU(){
dtv = wii.dtv;
pal = wii.pal;
if( dtv == 0 )
{
	wii.progressive = 0;
	_moveFrameImageExe(3,pal+1);
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List_Dark.gif)";
	document.all("List01").style.visibility="hidden";
}
else
{
	data = wii.progressive;
	if( pal == 0 )
	{
		_moveFrameImageExe(3,1);
	}
	else if( data == 1 )
	{
		_moveFrameImageExe(3,0);
	}
	else
	{
		_moveFrameImageExe(3,2);
	}
	document.getElementById("mySet").style.backgroundImage = "url(../../../COMMON/BTN/Btn_List.gif)";
	document.all("List01").style.visibility="visible";
}
setTimeout("waitFuncResult_Progressive_setEU()",1000);
}
