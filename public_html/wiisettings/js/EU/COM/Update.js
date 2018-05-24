function init_Update_index()
{
	wii.funcID = 95;
}

function waitFuncResult_Update_index()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Update_connectTest.html";
	}
	else if( result == 2 )
	{
		location.href = "Update_index.html";
	}
	else if( result == 6 )
	{
		location.href = "../Internet/Internet_index.html";
	}
	setTimeout("waitFuncResult_Update_index()",1000);
}

function setUpdate_Update_index()
{
	_commonSetFuncID(3,84);
	setTimeout("waitFuncResult_Update_index()",1000);
}

function waitFuncResult_Update_connectTest()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Update_common.html";
	}
	setTimeout("waitFuncResult_Update_connectTest()",1000);
}

function init_Update_connectTest()
{
	setTimeout("waitFuncResult_Update_connectTest()",1000);
}

function waitFuncResult_Update_common()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Update_EULA.html";
	}
	setTimeout("waitFuncResult_Update_common()",1000);
}

function init_Update_common()
{
	setTimeout("waitFuncResult_Update_common()",1000);
}
