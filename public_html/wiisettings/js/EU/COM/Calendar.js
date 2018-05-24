

var year  = 0;
var month = 0;
var date  = 0;
var max_date = 0;
date_table = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

function DrawDate_Day_set()
{
	document.all.draw_year.innerHTML = year+2000;
	if( month < 10 )
	{
		document.all.draw_month.innerHTML = "0"+month;
	}
	else
	{
		document.all.draw_month.innerHTML = month;
	}
	if( date < 10 )
	{
		document.all.draw_date.innerHTML = "0"+date;
	}
	else
	{
		document.all.draw_date.innerHTML = date;
	}
}

function ChangeDate_Day_set()
{
	//CコードのwiiSetterが呼ばれる
	//wii.year = year*10000+month*100+date;
	wii.se = 3;
	wii.date = date;
	wii.month = month;
	wii.year = year;

	wii.WriteBack();
}

function UpYear_Day_set()
{
	if( year < 35 )
	{
		year += 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
		wii.excse = 5;
	}
	else
	{
		year = 0;
		judgeDate_Day_set();
		DrawDate_Day_set();
		wii.excse = 5;
	}
}
function DownYear_Day_set()
{
	if( year > 0 )
	{
		year -= 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
		wii.excse = 5;
	}
	else
	{
		year = 35;
		judgeDate_Day_set();
		DrawDate_Day_set();
		wii.excse = 5;
	}
}
function UpMonth_Day_set()
{
	if( month < 12 )
	{
		month += 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
	}
	else
	{
		month = 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
	}
	wii.excse = 5;
}
function DownMonth_Day_set()
{
	if( month > 1 )
	{
		month -= 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
	}
	else
	{
		month = 12;
		judgeDate_Day_set();
		DrawDate_Day_set();
	}
	wii.excse = 5;
}
function UpDate_Day_set()
{
	if( date < max_date )
	{
		date = date + 1;
		DrawDate_Day_set();
	}
	else
	{
		date = 1;
		DrawDate_Day_set();
	}

	wii.excse = 5;
}
function DownDate_Day_set()
{
	if( date > 1 )
	{
		date = date - 1;
		DrawDate_Day_set();
	}
	else
	{
		date = max_date;
		DrawDate_Day_set();
	}
	wii.excse = 5;
}

function judgeDate_Day_set()
{
	if( (( ( year % 4 ) == 0 ) && ( ( year % 100 ) != 0 ) || ( ( year % 400 ) == 0 )) && (month == 2) ){
		max_date = 29;
	}else{
		max_date = date_table[month-1];
	}

	if( date > max_date ){
		date = max_date;
	}
}

function init_Day_set(){
year  = wii.year;
month = wii.month;
date  = wii.date;
if( year > 35 )
{
	year  = 35;
	month = 12;
	date  = 31;
}
DrawDate_Day_set();
judgeDate_Day_set();
}

var hour   = 0;
var minute = 0;

function DrawTime_Time_set()
{
	if( hour < 10 )
	{
		document.all.draw_hour.innerHTML = "0"+hour;
	}
	else
	{
		document.all.draw_hour.innerHTML = hour;
	}
	if( minute < 10 )
	{
		document.all.draw_minute.innerHTML = "0"+minute;
	}
	else
	{
		document.all.draw_minute.innerHTML = minute;
	}
}

function ChangeTime_Time_set()
{
	//CコードのwiiSetterが呼ばれる
	wii.minute = minute;
	wii.hour = hour;
	wii.WriteBack();
	wii.se = 3;
}

function ChangeHour_Time_set(n)
{
	hour += Number(n);
	if( hour == 24 )
	{
		hour = 0;
	}
	else if( hour < 0 )
	{
		hour = 23;
	}
	wii.excse = 5;
	DrawTime_Time_set();
}
function ChangeMinute_Time_set(n)
{
	minute += Number(n);
	if( minute == 60 )
	{
		minute = 0;
	}
	else if( minute < 0 )
	{
		minute = 59;
	}
	wii.excse = 5;
	DrawTime_Time_set();
}

function init_Time_set(){
hour   = wii.hour;
minute = wii.minute;
DrawTime_Time_set();
}

var keyRepeatState = 0;
var keyNumber = 0;
var keyRepeatTimerID;

function keyRepeatMouseOut_Calendar()
{
	keyRepeatState = 0;
	clearTimeout(keyRepeatTimerID);
}

function keyRepeatStart_Calendar(n)
{
	keyRepeatState = 2;
	keyNumber = n;

	switch(keyNumber)
	{
	case 1: UpYear_Day_set();    break;
	case 2: DownYear_Day_set();  break;
	case 3: UpMonth_Day_set();   break;
	case 4: DownMonth_Day_set(); break;
	case 5: UpDate_Day_set();    break;
	case 6: DownDate_Day_set();  break;
	case 7: ChangeHour_Time_set(1);     break;
	case 8: ChangeHour_Time_set(-1);    break;
	case 9: ChangeMinute_Time_set(1);   break;
	case 10: ChangeMinute_Time_set(-1); break;
	default: break;
	}
	
	keyRepeatTimerID = setTimeout("waitKeyRepeat_Calendar()",400);
}

function keyRepeatStop_Calendar()
{
	keyRepeatState--;
	if( keyRepeatState == 0 )
	{
		clearTimeout(keyRepeatTimerID);
	}
}

function waitKeyRepeat_Calendar()
{
	clearTimeout(keyRepeatTimerID);
	
	if( keyRepeatState == 1 )
	{
		switch(keyNumber)
		{
		case 1: UpYear_Day_set();    break;
		case 2: DownYear_Day_set();  break;
		case 3: UpMonth_Day_set();   break;
		case 4: DownMonth_Day_set(); break;
		case 5: UpDate_Day_set();    break;
		case 6: DownDate_Day_set();  break;
		case 7: ChangeHour_Time_set(1);     break;
		case 8: ChangeHour_Time_set(-1);    break;
		case 9: ChangeMinute_Time_set(1);   break;
		case 10: ChangeMinute_Time_set(-1); break;
		default: break;
		}
		
		setTimeout("waitKeyRepeat_Calendar()",150);
	}
}
