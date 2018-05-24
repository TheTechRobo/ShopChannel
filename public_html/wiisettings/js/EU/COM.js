// +-ボタンのスクロールを行った後、次の入力を20フレーム強、約0.35秒待たせる
var waitCheckCSRTime = 350;
// URL指定、直接起動の待ち時間
var waitStartDirectUrlTime = 1800;
var waitDirectUrlTime = 900;

var url_table_num = 7;
url_table = new Array("Calendar","Display","Sound","Parental_Control","Internet","Wiiconnect24","Update");

function wait_directUrl()
{
	url = wii.directUrl;

	for( url_id = 0; url_id < url_table_num; url_id++ )
	{
		if( url.indexOf( url_table[url_id], 0 ) != -1 )
		{
			switch(url_id)
			{
			case 0:
			case 1:
			case 2: location.href = url; 
				_deleteFrameImageExe(4); break;
			case 3: jumpPare_index02();  
				_deleteFrameImageExe(4); break;
			default: break;
			}
			break;
		}
	}
	wii.pageID = 50;
}

function init_directUrl()
{
	url = wii.directUrl;

	if( url != 0 )
	{
		for( url_id = 0; url_id < url_table_num; url_id++ )
		{
			if( url.indexOf( url_table[url_id], 0 ) != -1 )
			{
				switch(url_id)
				{
				case 0:
				case 1:
				case 2: _moveFrameImageExe(4,url_id+1);
					_commonSetSE(3);	     break;
				case 3: _moveFrameImageExe(4,0);     break;
				case 4: _moveFrameImageExe(4,2);
					setParentalDialog_index02(); break;
				case 5: _moveFrameImageExe(4,3);
					checkNWCFlag_index02();      break;
				case 6: _moveFrameImageExe(4,2);
					setParentalDialogUpdate_index03(); break;
				default: break;
				}
				setTimeout("wait_directUrl()",waitDirectUrlTime);
				break;
			}
		}
	}
}

function wait_startDirectUrl()
{
	result = wii.funcResult;
	switch( result )
	{
	case 1:  init_directUrl(); break;
	default: setTimeout("wait_startDirectUrl()",1000); break;
	}
}


function checkCSRKey_index01()
{
	if (event.keyCode == 39)
	{
		location.href = "index02.html";
		_commonRightScroll();
	}
}

function waitcheckCSRKey_Index01()
{
	window.document.onkeydown = checkCSRKey_index01;
}

function init_index01()
{
	document.all.myVer.innerHTML = wii.version;

	url = wii.directUrl;
	if( url != 0 )
	{
		setTimeout("wait_startDirectUrl()",waitStartDirectUrlTime);
	}
	else
	{
		setTimeout("waitcheckCSRKey_Index01()",waitCheckCSRTime);
	}
}

function waitNWCFuncResult_index02()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: 
	case 1: setTimeout("waitNWCFuncResult_index02()",1000);
	case 2:	_deleteFrameImageExe(4); break;
	case 5: location.href = "Internet/Internet_index.html";
		_deleteFrameImageExe(4); break;
	case 6: nwc24 = wii.nwc24;
		if( nwc24 == 0 )
		{
			location.href = "WiiConnect24/Wiiconnect24_off_index.html";
		}
		else
		{
			location.href = "WiiConnect24/Wiiconnect24_index.html";
		}
		_deleteFrameImageExe(4);
		break;
	case 7: location.href = "index02.html";
		_deleteFrameImageExe(4); break;
	case 8: location.href = "Update/Update_index.html";
		_deleteFrameImageExe(4); break;
	}
}

function checkNWCFlag_index02()
{
	_commonSetFuncID(3,78);
	setTimeout("waitNWCFuncResult_index02()",1000);
}

function jumpNWC24_index02()
{
	nwc24 = wii.nwc24;
	if( nwc24 == 0 )
	{
		jpURL = "WiiConnect24/Wiiconnect24_off_index.html";
	}
	else
	{
		jpURL = "WiiConnect24/Wiiconnect24_index.html";
	}
	location.href = jpURL;
}

function jumpPare_index02()
{
	flag = wii.pare_flag;
	if( flag == 0 )
	{
		jpURL = "Parental_Control/Parental_Control_index.html";
	}
	else
	{
		jpURL = "Parental_Control/Re_Parental_Control_index.html";
	}
	location.href = jpURL;
	wii.se = 3;
}

function setParentalDialog_index02()
{
	wii.se = 3;
	wii.funcID =29;
	setTimeout("waitFuncResult_index02()",1000);
}

function waitFuncResult_index02()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_index02()",1000); break;
	case 1: location.href = "Internet/Internet_index.html";
	case 2: _deleteFrameImageExe(4); break;
	}
}

function checkCSRKey_index02()
{
	if (event.keyCode == 39)
	{
		location.href = "index03.html";
		_commonRightScroll();
	}
	else if (event.keyCode == 37)
	{
		location.href = "index01.html";
		_commonLeftScroll();
	}
}

function waitcheckCSRKey_Index02()
{
	window.document.onkeydown = checkCSRKey_index02;
}

function init_index02(){
wii.funcID = 23;

	url = wii.directUrl;
	if( url != 0 )
	{
		setTimeout("wait_startDirectUrl()",waitStartDirectUrlTime);
	}
	else
	{
		setTimeout("waitcheckCSRKey_Index02()",waitCheckCSRTime);
	}
}

function setParentalDialog_index03()
{
	wii.se = 3;
	wii.funcID =29;
	setTimeout("waitFuncResult_index03()",1000);
}

function waitFuncResult_index03()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_index03()",1000); break;
	case 1: location.href = "Format/Format_index01.html"; break;
	}
}

function setParentalDialogUpdate_index03()
{
	wii.se = 3;
	wii.funcID =29;
	setTimeout("waitFuncResultUpdate_index03()",1000);
}

function waitFuncResultUpdate_index03()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResultUpdate_index03()",1000); break;
	case 1: wii.funcID = 95;
		location.href = "Update/Update_index.html";
	case 2:	_deleteFrameImageExe(4); break;
	}
}

function Index03_ItemCountry_setParentalDialog()
{
	wii.se = 3;
	wii.funcID =77;
	setTimeout("waitFuncResult_Index03_ItemCountry_setParentalDialog()",1000);
}

function waitFuncResult_Index03_ItemCountry_setParentalDialog()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_Index03_ItemCountry_setParentalDialog()",1000); break;
	case 1: location.href = "Country/US_Country_flame.html"; 
		wii.countrySave = 0;
		break;
	}
}

function Index03_ItemCountry_setParentalDialogEU()
{
	wii.se = 3;
	wii.funcID =77;
	setTimeout("waitFuncResult_Index03_ItemCountry_setParentalDialogEU()",1000);
}

function waitFuncResult_Index03_ItemCountry_setParentalDialogEU()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("waitFuncResult_Index03_ItemCountry_setParentalDialogEU()",1000); break;
	case 1: location.href = "Country/EU_Country_flame.html"; 
		wii.countrySave = 0;
		break;
	}
}

function checkCSRKey_index03()
{
	if (event.keyCode == 37)
	{
		location.href = "index02.html";
		_commonLeftScroll();
	}
}

function waitcheckCSRKey_Index03()
{
	window.document.onkeydown = checkCSRKey_index03;
}

function init_index03(){
wii.funcID = 94;

	url = wii.directUrl;
	if( url != 0 )
	{
		setTimeout("wait_startDirectUrl()",waitStartDirectUrlTime);
	}
	else
	{
		setTimeout("waitcheckCSRKey_Index03()",waitCheckCSRTime);
	}
}

function setSaveLang_index03()
{
	wii.languageSave = 0;
	wii.se = 3;
}

function Index03_ItemTVRC()
{
	wii.se = 3;
	wii.funcID = 51; // Load TVRC Params
	tvrc = wii.tvrc;
	if( tvrc == 0 )
	{
//		jpURL = "TV_Remote/tvrc00.html";
		wii.funcID =29;
		Index03_WFR_ItemTVRC();
	}
	else
	{
		wii.pageID = 41;
		wii.tvrc = 0; // test init
		jpURL = "TV_Remote/tvrc10.html";
	}
	location.href = jpURL;
	
}

function Index03_WFR_ItemTVRC()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("Index03_WFR_ItemTVRC()",1000); break;
	case 1: 
		wii.pageID = 40;
		wii.tvrc = 0; // test init
		location.href = "TV_Remote/tvrc00a.html";
		break;
	}
}

