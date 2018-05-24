function moveCheckImage_Language_index(n)
{
	_moveFrameImageExe(6,n);
	wii.language = n + 1; 
	wii.se = 5;
	switch( n )
	{
	case 0: 
		location.href = "../../ENG/Language/Language_index.html"
		break;
	case 1: 
		location.href = "../../GER/Language/Language_index.html"
		break;
	case 2: 
		location.href = "../../FRA/Language/Language_index.html"
		break;
	case 3: 
		location.href = "../../SPA/Language/Language_index.html"
		break;
	case 4: 
		location.href = "../../ITA/Language/Language_index.html"
		break;
	case 5: 
		location.href = "../../DUT/Language/Language_index.html"
		break;
	}
}

function setBackLang_Language_index()
{
	data = wii.languageSave;
	wii.language = data;
	switch( data )
	{
	case 1: location.href = "../../ENG/index03.html"; break;
	case 2: location.href = "../../GER/index03.html"; break;
	case 3: location.href = "../../FRA/index03.html"; break;
	case 4: location.href = "../../SPA/index03.html"; break;
	case 5: location.href = "../../ITA/index03.html"; break;
	case 6: location.href = "../../DUT/index03.html"; break;
	}
	wii.se = 4;
}
function init_Language_index(){
var data = wii.language;
_moveFrameImageExe(6,data-1);
}
