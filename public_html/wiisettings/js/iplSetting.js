<!--
/*---------------------------------------------------------------------------*
  Name:         MM_moveCheckImage

  Description:  選択された赤いボタンを動かす

  Arguments:    n 光るボタン番号

  Returns:      none
*---------------------------------------------------------------------------*/
function _moveFrameImageExe(m,n) {
	st = new Array("List01Check","List02Check","List03Check","List04Check","List05Check","List06Check");
	if( m >= 3 )
	{
		for( i = 0; i < m; i++ )
		{
			if( n == i )
			{
				document.all(st[i]).style.visibility="visible";
			}
			else
			{
			  	document.all(st[i]).style.visibility="hidden";
			}
		}
	}
	else if( m == 2 )
	{
		if( n == 0 )
		{
			document.all(st[1]).style.visibility="visible";
	  		document.all(st[0]).style.visibility="hidden";
		}
		else
		{
			document.all(st[0]).style.visibility="visible";
	  		document.all(st[1]).style.visibility="hidden";
		}

	}
}

function _moveFrameImage1Exe(m,n) {
	st = new Array("List01Check","List02Check","List03Check","List04Check");
	mask = "SSIDMask"
	if( m == 2 )
	{
		if( n == 1 )
		{
			document.all(st[1]).style.visibility="visible";
	  		document.all(st[0]).style.visibility="hidden";
	  		document.all(mask).style.visibility="hidden";
		}
		else
		{
			document.all(st[0]).style.visibility="visible";
	  		document.all(st[1]).style.visibility="hidden";
			document.all(mask).style.visibility="visible";
		}

	}
}

function _moveRevFrameImageExe(m,n)
{
	st = new Array("List01Check","List02Check","List03Check");
	for( i = m-1; i >= 0; i-- )
	{
		if( m-1-n == i )
		{
			document.all(st[i]).style.visibility="visible";
		}
		else
		{
		  	document.all(st[i]).style.visibility="hidden";
		}
	}
}

function _deleteFrameImageExe(m) {
	st = new Array("List01Check","List02Check","List03Check","List04Check");
	for( i = 0; i < m; i++ )
	{
	  	document.all(st[i]).style.visibility="hidden";
	}
}

function _moveRankImageExe(n)
{
	st = new Array("Rank01","Rank02","Rank03","Rank04","Rank05");
	for( i = 0; i < 5; i++ )
	{
		if( n -1 == i )
		{
			document.all(st[i]).style.visibility="visible";
		}
		else
		{
		  	document.all(st[i]).style.visibility="hidden";
		}
	}
}

function _drawRating(l,m,n)
{
if( l < 8 && m == 20 )
{
	switch( n )
	{
	case 1: document.all("Rating").style.backgroundImage = "url(../../../COMMON/NoRate/eng.gif)"; break;
	case 2: document.all("Rating").style.backgroundImage = "url(../../../COMMON/NoRate/ger.gif)"; break;
	case 3: document.all("Rating").style.backgroundImage = "url(../../../COMMON/NoRate/fra.gif)"; break;
	case 4: document.all("Rating").style.backgroundImage = "url(../../../COMMON/NoRate/spa.gif)"; break;
	case 5: document.all("Rating").style.backgroundImage = "url(../../../COMMON/NoRate/ita.gif)"; break;
	case 6: document.all("Rating").style.backgroundImage = "url(../../../COMMON/NoRate/dut.gif)"; break;
	}
}
else
{
	switch( l )
	{
	case 3:
		switch( m )
		{
		case 18: document.all("Rating").style.backgroundImage = "url(../../../COMMON/USK/adult.gif)"; break;
		case 16: document.all("Rating").style.backgroundImage = "url(../../../COMMON/USK/age16.gif)"; break;
		case 12: document.all("Rating").style.backgroundImage = "url(../../../COMMON/USK/age12.gif)"; break;
		case 6:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/USK/age6.gif)"; break;
		case 0:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/USK/all.gif)"; break;
		}
		break;
	case 4:
		switch( m )
		{
		case 18: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_General/age18.gif)"; break;
		case 16: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_General/age16.gif)"; break;
		case 12: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_General/age12.gif)"; break;
		case 7:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_General/age7.gif)"; break;
		case 3:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_General/age3.gif)"; break;
		}
		break;
	case 5:
		switch( m )
		{
		case 18: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Finland/age18.gif)"; break;
		case 15: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Finland/age15.gif)"; break;
		case 11: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Finland/age11.gif)"; break;
		case 7:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Finland/age7.gif)"; break;
		case 3:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Finland/age3.gif)"; break;
		}
		break;
	case 6:
		switch( m )
		{
		case 18: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Portugal/age18.gif)"; break;
		case 16: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Portugal/age16.gif)"; break;
		case 12: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Portugal/age12.gif)"; break;
		case 6:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Portugal/age6.gif)"; break;
		case 4:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_Portugal/age4.gif)"; break;
		}
		break;
	case 7:
		switch( m )
		{
		case 18: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_BBFC/age18_02.gif)"; break;
		case 16: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_BBFC/age16.gif)"; break;
		case 15: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_BBFC/age15.gif)"; break;
		case 12: document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_BBFC/age12_02.gif)"; break;
		case 8:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_BBFC/PG.gif)"; break;
		case 7:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_BBFC/age7.gif)"; break;
		case 4:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_BBFC/U_Uc02.gif)"; break;
		case 3:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/PEGI_BBFC/age3.gif)"; break;
		}
		break;
	case 8:
		switch( m )
		{
		case 20: document.all("Rating").style.backgroundImage = "url(../../../COMMON/NoRate/eng.gif)"; break;
		case 15: document.all("Rating").style.backgroundImage = "url(../../../COMMON/OFLC/MA.gif)"; break;
		case 14: document.all("Rating").style.backgroundImage = "url(../../../COMMON/OFLC/M.gif)"; break;
		case 7:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/OFLC/PG.gif)"; break;
		case 0:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/OFLC/General.gif)"; break;
		}
		break;
	case 9:
		switch( m )
		{
		case 20: document.all("Rating").style.backgroundImage = "url(../../../COMMON/NoRate/eng.gif)"; break;
		case 15: document.all("Rating").style.backgroundImage = "url(../../../COMMON/OFLC/Restricted_02.gif)"; break;
		case 14: document.all("Rating").style.backgroundImage = "url(../../../COMMON/OFLC/M.gif)"; break;
		case 7:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/OFLC/PG.gif)"; break;
		case 0:  document.all("Rating").style.backgroundImage = "url(../../../COMMON/OFLC/General.gif)"; break;
		}
		break;
	}
}
}

function _drawConnectType(m,n)
{
	st = new Array("myPic1","myPic2","myPic3");

	document.all(st[m]).style.visibility="visible";
	switch(n)
	{
	case 0:	lang = wii.language;
		switch( lang )
		{
		case 0: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Connect.png)"; break;
		case 1: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Conect_Eng.png)"; break;

		case 2: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Conect_Ger.png)"; break;

		case 3: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Conect_Fra.png)"; break;
		case 4: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Conect_Spa.png)"; break;

		case 5: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Conect_Ita.png)"; break;
		case 6: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Conect_Dut.png)"; break;
		
		case 7: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Conect_Eng.png)"; break;
		case 8: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Conect_Eng.png)"; break;
		case 9: document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Nin_WiFi_Conect_Kor.png)"; break;
		}
		break;
	case 1:	document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_AOSS.png)";
		document.all(st[m]).style.left = 394;
		document.all(st[m]).style.width = 56; break;
	case 2:	document.all(st[m]).style.backgroundImage = "url(../../../COMMON/List_Icon/Icon_Rakuraku.png)";
		document.all(st[m]).style.left = 386;
		document.all(st[m]).style.width = 72;break;
	}
}
// -->
