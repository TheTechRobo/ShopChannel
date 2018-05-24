
function moveCheckImage_Sound_index(n)
{
	_moveFrameImageExe(3,n);
	wii.soundId = Number(n);
}

function setWiiData_Sound_index(n)
{
	if( n == 0 )
	{
		var data = wii.soundId;
		wii.se = data + 30;
	}
	else
	{
		wii.se = 3;
		wii.WriteBack();
	}
	wii.funcID = 81;
}

function init_Sound_index(){
// 初期化、wiiから取得した値を反映
var data = wii.soundId;
_moveFrameImageExe(3,data);
wii.funcID = 82;
}
