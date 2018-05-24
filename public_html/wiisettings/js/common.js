var wii = new wiiSetting();
var tra = new wiiTrasition();

function _commonSetSE(n)
{
	wii.se = n;
}

function _commonSetExcSE(n)
{
	wii.excse = n;
}

function _commonSetFinish()
{
	wii.se = 4;
	wii.finish = 1;
}

function _commonLeftScroll()
{
	tra.LeftScroll();
	wii.se = 1;
}

function _commonRightScroll()
{
	tra.RightScroll();
	wii.se = 1;
}

function _commonSetFuncID(m,n)
{
	wii.se = m;
	wii.funcID = n;
}

function _commonSetWriteBack(n)
{
	wii.WriteBack();
	wii.se = n;
}

function _commonSetString(m,n)
{
	wii.se = m;
	wii.setstring = n;
}

function _commonSetFormID(n)
{
	wii.formID = n;
}

function _commonSetPageID(m,n)
{
	wii.se = m;
	wii.pageID = n;
}
