

function waitFuncResult_DPD_Sensitive02()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		wii.WriteBack();
		location.href = "Sensor_bar_index.html";
	}
	setTimeout("waitFuncResult_DPD_Sensitive02()",1000);
}

function init_DPD_Sensitive02(){
wii.pageID = 30;
light = wii.light;
_moveRankImageExe(light);

function checkCSRKey_DPD_Sensitive02()
{
	if (event.keyCode == 39)
	{
		if( light < 5 )
		{
			light++;
			_moveRankImageExe(light);
			wii.light = light;
			wii.se = 5;
		}
		else
		{
			wii.se = 6;
		}
	}
	else if (event.keyCode == 37)
	{
		if( light > 1 )
		{
			light--;
			_moveRankImageExe(light);
			wii.light = light;
			wii.se = 5;
		}
		else
		{
			wii.se = 6;
		}
	}
}

window.document.onkeydown = checkCSRKey_DPD_Sensitive02;
setTimeout("waitFuncResult_DPD_Sensitive02()",1000);
}


function moveCheckImage_Sensor_bar_position(n)
{
	wii.se = 5;
	wii.sensorBar = Number(n);
	_moveFrameImageExe(2,n);
}

function init_Sensor_bar_position(){
// 初期化、wiiから取得した値を反映
var data = wii.sensorBar;
_moveFrameImageExe(2,data);
}
