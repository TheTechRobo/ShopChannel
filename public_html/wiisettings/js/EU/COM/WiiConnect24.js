
function moveCheckImage_LED_set(n)
{
	wii.se = 5;
	_moveRevFrameImageExe(3,n);
	wii.LED = n;
}

function init_LED_set(){
// 初期化、wiiから取得した値を反映
var data = wii.LED;
_moveRevFrameImageExe(3,data);
}

function moveCheckImage_ONOFF_set(n)
{
	wii.se = 5;
	_moveFrameImageExe(2,n);
	wii.nwc24 = Number(n);
}

function jump_ONOFF_set()
{
	nwc24 = wii.nwc24;
	if( nwc24 == 0 )
	{
		jpURL = "Wiiconnect24_off_index.html";
	}
	else
	{
		jpURL = "Wiiconnect24_index.html";
	}
	location.href = jpURL;
}

function init_ONOFF_set(){
// 初期化、wiiから取得した値を反映
var data = wii.nwc24;
_moveFrameImageExe(2,data);
}

function moveCheckImage_stand_by_set(n)
{
	wii.se = 5;
	_moveFrameImageExe(2,n);
	wii.standby = Number(n);
}

function init_stand_by_set(){
// 初期化、wiiから取得した値を反映
var data = wii.standby;
_moveFrameImageExe(2,data);
}


