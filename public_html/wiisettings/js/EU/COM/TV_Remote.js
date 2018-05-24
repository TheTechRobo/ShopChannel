
var ct_menu;
var Maker_Text = new Array( "Panasonic" , "Sanyo" , "Sharp" , "Fujitsu" , "Sony" , "Toshiba" , "NEC" 
				, "Pioneer" , "Hitachi" , "Funai" , "Victor" , "Mitsubishi" , "Aiwa" );
var Maker_MaxType = new Array( 4,            2         ,3        ,2          , 4 ,     2        , 4
				,   1         ,   6         , 8        , 3         , 7  ,        5     );

function tvrc00a_init()
{

}

function tvrc00b_init()
{
}

function tvrc10_init()
{
}

function tvrc10_dialog()
{
	wii.se = 3;
	wii.funcID =29;
	tvrc10_cb_dialog();
}

function tvrc10_cb_dialog()
{
	result = wii.funcResult;
	switch( result )
	{
	case 0: setTimeout("tvrc10_cb_dialog()",1000); break;
	case 1: location.href = "tvrc00a.html";	break;
	default: location.href = "tvrc10.html";	break;
	}
}


function tvrc00a_ok()
{
	var pageID = wii.pageID;

	wii.se = 4;
	if( pageID == 40 )
	{
		location.href = "tvrc00b.html";
	}
	else
	{
		location.href = "tvrc01.html";	
	}
}

function tvrc00b_ok()
{
	var maker = wii.tvrc_maker;
	var i = 0;
	while(maker > 0)
	{
		i++;
		maker -= 4;
	}
	wii.se = 3;
	if(i==0)
	{
		wii.subPageID = 0;
	}
	else
	{
		wii.subPageID = i - 1;
	}
	location.href = "tvrc01.html";
}

function tvrc00a_cancel()
{
//	wii.funcID = 51; // Reload TVRC Params
	wii.tvrc = 99;   // and exit
	wii.se = 4;
	location.href = "../index03.html";
}

function tvrc00b_cancel()
{
	wii.se = 4;
	location.href = "tvrc00a.html";
}

function tvrc01_init()
{
	var pageNo = wii.subPageID;
	var nn = pageNo * 4;

	if( 3 == pageNo )
	{
		document.all("List02Btn").style.visibility="hidden";
		document.all("List03Btn").style.visibility="hidden";
		document.all("List04Btn").style.visibility="hidden";
		document.all("List02").style.visibility="hidden";
		document.all("List03").style.visibility="hidden";
		document.all("List04").style.visibility="hidden";
	}

	if( 3 == pageNo )
	{
		document.all("List01Btn").innerHTML = Maker_Text[nn + 0];
	}
	else
	{
		document.all("List01Btn").innerHTML = Maker_Text[nn + 0];
		document.all("List02Btn").innerHTML = Maker_Text[nn + 1];
		document.all("List03Btn").innerHTML = Maker_Text[nn + 2];
		document.all("List04Btn").innerHTML = Maker_Text[nn + 3];
	}

	var maker = wii.tvrc_maker - 1;
	if( (maker >= nn) && (maker <= nn+3) )
	{
		if(pageNo < 3)
		{
			_moveFrameImageExe( 4 , maker - nn );
		}		
	}

	if(0 == pageNo)
	{
		document.all("ListUP").style.visibility="hidden";
	}
	if(3 == pageNo)
	{
		document.all("ListDW").style.visibility="hidden";
	}
}


function tvrc01_selectMaker(n)
{
	var pageNo = wii.subPageID;
	var maker  = pageNo * 4 + n + 1;  // 1-14

	if((maker < 1) || (maker >= 15)) 
	{
		wii.assert = 0;
		return;
	}

	wii.tvrc_maker = maker;

	wii.se = 5;
	if(pageNo < 3)
	{
		_moveFrameImageExe( 4 , n );
	}
	else
	{
		document.all("List01Check").style.visibility="visible";	
	}
}

function tvrc01_scroll(n)
{
	var pageNo = wii.subPageID;
	wii.subPageID = pageNo + n;
	wii.se = 1;
	location.href = "tvrc01.html";
}

function tvrc01_cancel()
{
	wii.funcID = 51; // Reload TVRC Params
	wii.se = 4;
	var pageid = wii.pageID;
	if( pageid == 40 )
	{
		location.href = "tvrc00b.html";
	}
	else
	{
		location.href = "tvrc00a.html";
	}
}

function tvrc01_ok()
{
	wii.se = 3;
	wii.subPageID = 0; // afraid index flow
	location.href = "tvrc02.html";
}

function tvrc02_init()
{
	var mystr = new Array("List01","List02","List03","List04");
	var mybtn = new Array("List01Btn","List02Btn","List03Btn","List04Btn");
	var pageNo = wii.subPageID;
	var maker  = wii.tvrc_maker - 1;
	var atype  = wii.tvrc_type;
	var nn = pageNo * 3;

	if( atype >= Maker_MaxType[maker] )
	{
		atype = 0;
		wii.tvrc_type = 0;
	}

	for(i = 0;i<3;i++ )
	{
		document.all(mybtn[i]).style.visibility = "hidden";
		document.all(mystr[i]).style.visibility = "hidden";
	}

	ct_menu = 0;
	for(i = 0;i<3;i++ )
	{
		var jj = nn + i + 1;
		if( nn + i < Maker_MaxType[maker] )
		{
			ct_menu++;
			document.all(mybtn[i]).style.visibility = "visible";
			document.all(mystr[i]).style.visibility = "visible";
			document.all(mybtn[i]).innerHTML        = Maker_Text[maker] + " " + jj.toString();
		}
		else
		{
			document.all(mybtn[i]).style.visibility = "hidden";
			document.all(mystr[i]).style.visibility = "hidden";

		}
	}

	if(0 == pageNo)
	{
		document.all("ListUP").style.visibility="hidden";
	}

	if( (nn + 3) >= Maker_MaxType[maker] )
	{
		document.all("ListDW").style.visibility="hidden";
	}

	if( (atype >= nn) && (atype <= (nn+3)) )
	{
		tvrc02_selectType( atype - nn , 1 );
	}

}

function tvrc02_scroll(n)
{
	var pageNo = wii.subPageID;
	wii.subPageID = pageNo + n;
	wii.se = 1;
	location.href = "tvrc02.html";
}

function tvrc02_selectType( n , nos )
{
	var pageNo = wii.subPageID;
	var atype  = pageNo * 3 + n;

	if((atype < 0) || (atype >= 15) || (ct_menu == 0)) 
	{
		wii.assert = 0;
		return;
	}

	wii.tvrc_type = atype;

	if(!nos)
	{
		wii.se = 5;
	}

	if(ct_menu == 3)
	{
		_moveFrameImageExe( ct_menu , n );
	}
	else if(ct_menu == 2)
	{
		_moveFrameImageExe( ct_menu , n - 1 );
	}
	else if(ct_menu == 1)
	{
		document.all("List01Check").style.visibility="visible";	
	}
}

function tvrc02_cancel()
{
	tvrc00b_ok();
}

function tvrc02_ok()
{
	wii.se = 3;
	wii.flush = 69;
	location.href = "tvrc03a.html";
}

function tvrc03a_init()
{
	wii.tvrc = 1; // test start
	wii.funcID = 52; // test page process
	document.all("UnderR").style.visibility="hidden";
	document.all("UnderRBtn").style.visibility="hidden";
	document.all("UnderL").style.visibility="hidden";
	document.all("UnderLBtn").style.visibility="hidden";
	setTimeout("tvrc03a_waitFuncResult()",2000);
}

function tvrc03a_waitFuncResult()
{
	result = wii.funcResult;
	if( result != 0 ) // end
	{
		wii.tvrc   = 3; //  test end
		wii.se     = 3;
		location.href = "tvrc03b.html";
	}

	setTimeout("tvrc03a_waitFuncResult()" , 500);
}


function tvrc03b_cancel()
{
	wii.se = 4;
	wii.tvrc = 3; // nothing to do
	location.href = "tvrc02.html";
}

function tvrc03b_ok()
{
//	wii.funcID = 50;
	wii.tvrc   = 2; //  save params
	wii.se     = 3;
	location.href = "tvrc04.html";
}

function tvrc04_init()
{
	document.all("UnderL").style.visibility="hidden";
	document.all("UnderLBtn").style.visibility="hidden";
}

function tvrc04_ok()
{
	wii.se = 3;
	wii.tvrc = 99;    // exit
	location.href = "../index03.html";
}

function tvrc10_clear()
{
	wii.funcID = 51; // Reload TVRC Params
	wii.tvrc   = 4;  // save deactivate and exit
//	wii.funcID = 50;
	wii.se = 3;
	location.href = "tvrc05.html";
}


function tvrc10_cancel()
{
//	wii.funcID = 51; // Reload TVRC Params
	wii.tvrc = 99;    // and exit
	wii.se = 4;
	location.href = "../index03.html";
}
