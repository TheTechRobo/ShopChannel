
function setNickName_Nickname_set()
{
	_commonSetString(3,2);
	setTimeout("waitFuncResult_Nickname_set()",1000);
}

function waitFuncResult_Nickname_set()
{
	result = wii.funcResult;
	if( result == 3 )
	{
		wii.flush = 0;
		location.href = "../index01.html";
	}
	else if( result == 0 )
	{
		setTimeout("waitFuncResult_Nickname_set()",1000);
	}
}

function init_Nickname_set(){
document.all.Name.value=wii.nickname;
}
