
function init_Format_index01(){
wii.funcID = 91;
}

function init_Format_index02(){
wii.funcID = 93;
}

function waitFuncResult_Format_index03()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Format_index04.html";
	}
	else if( result == 0 )
	{
		setTimeout("waitFuncResult_Format_index03()",1000);
	}
}

function init_Format_index03(){
wii.funcID = 100;
setTimeout("waitFuncResult_Format_index03()",1000);
}

