<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--<?php
require_once("../database.php");
    /* Insert into database. */
    $db = connectMySQL();
    $stmt = $db->prepare('SELECT * FROM `HOMEBREW` WHERE `TITLEID` = ?');
    $stmt->bind_param('i',$_GET['titleid']);
    $result = new_get_result($stmt);
?>-->
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta content="en-us" http-equiv="Content-Language" />
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Homebrew</title>
        <link href="../main.css" rel="stylesheet" type="text/css" />
		<base target="_parent">
    </head>
    <body class="heading" style="background-image: url(../asset/bg/homebrew.png); background-repeat: repeat-y; background-position: center;">
	
	<div id="title1Div" style="position: absolute;" onmouseover="document.getElementById('title1BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title1BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title1Folder + '/prodinfo.php';">
		<img id="title1BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title1Icon" class="titlelistIcon"></div>
		<p id="title1Name" class="titlelistName">Title Name</p>
		<p id="title1Creator" class="titlelistCreator">Creator Name</p>
	</div><br><br><br>
	
	<div id="title2Div" style="position: absolute;" onmouseover="document.getElementById('title2BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title2BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title2Folder + '/prodinfo.php';">
		<img id="title2BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title2Icon" class="titlelistIcon"></div>
		<p id="title2Name" class="titlelistName">Title Name</p>
		<p id="title2Creator" class="titlelistCreator">Creator Name</p>
	</div><br><br><br>
	
	<div id="title3Div" style="position: absolute;" onmouseover="document.getElementById('title3BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title3BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title3Folder + '/prodinfo.php';">
		<img id="title3BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title3Icon" class="titlelistIcon"></div>
		<p id="title3Name" class="titlelistName">Title Name</p>
		<p id="title3Creator" class="titlelistCreator">Creator Name</p>
	</div><br><br><br>
	
	<div id="title4Div" style="position: absolute;" onmouseover="document.getElementById('title4BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title4BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title4Folder + '/prodinfo.php';">
		<img id="title4BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title4Icon" class="titlelistIcon"></div>
		<p id="title4Name" class="titlelistName">Title Name</p>
		<p id="title4Creator" class="titlelistCreator">Creator Name</p>
	</div><br><br><br>
	
	<div id="title5Div" style="position: absolute;" onmouseover="document.getElementById('title5BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title5BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title5Folder + '/prodinfo.php';">
		<img id="title5BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title5Icon" class="titlelistIcon"></div>
		<p id="title5Name" class="titlelistName">Title Name</p>
		<p id="title5Creator" class="titlelistCreator">Creator Name</p>
	</div><br><br><br>
	
	<div id="title6Div" style="position: absolute;" onmouseover="document.getElementById('title6BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title6BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title6Folder + '/prodinfo.php';">
		<img id="title6BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title6Icon" class="titlelistIcon"></div>
		<p id="title6Name" class="titlelistName">Title Name</p>
		<p id="title6Creator" class="titlelistCreator">Creator Name</p>
	</div><br><br><br>
	
	<div id="title7Div" style="position: absolute;" onmouseover="document.getElementById('title7BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title7BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title7Folder + '/prodinfo.php';">
		<img id="title7BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title7Icon" class="titlelistIcon"></div>
		<p id="title7Name" class="titlelistName">Title Name</p>
		<p id="title7Creator" class="titlelistCreator">Creator Name</p>
	</div><br><br><br>
	
	<div id="title8Div" style="position: absolute;" onmouseover="document.getElementById('title8BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title8BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title8Folder + '/prodinfo.php';">
		<img id="title8BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title8Icon" class="titlelistIcon"></div>
		<p id="title8Name" class="titlelistName">Title Name</p>
		<p id="title8Creator" class="titlelistCreator">Creator Name</p>
	</div><br><br><br>
	
	<div id="title9Div" style="position: absolute;" onmouseover="document.getElementById('title9BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title9BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title9Folder + '/prodinfo.php';">
		<img id="title9BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title9Icon" class="titlelistIcon"></div>
		<p id="title9Name" class="titlelistName">Title Name</p>
		<p id="title9Creator" class="titlelistCreator">Creator Name</p>
	</div><br><br><br>
	
	<div id="title10Div" style="position: absolute;" onmouseover="document.getElementById('title10BG').src='../asset/button/titleB.png'" onmouseout="document.getElementById('title10BG').src='../asset/button/titleA.png'" onclick="window.top.location.href='../download/' + title10Folder + '/prodinfo.php';">
		<img id="title10BG" src="../asset/button/titleA.png" style="float: left;">
		<div id="title10Icon" class="titlelistIcon"></div>
		<p id="title10Name" class="titlelistName">Title Name</p>
		<p id="title10Creator" class="titlelistCreator">Creator Name</p>
	</div>
    </body>
	
	<script>		
		window.onload = setTitles;
		
		/*Set these varibles to easily change what titles are displayed on the list.
		
		title#Folder: The name of the folder which contains prodinfo.php, icon.png, etc
		title#Name: The name of the title which is displayed to the user
		title#Creator: The name of the person who created the homebrew app, this is also displayed to the user*/
			
		/*Title 1*/
		var title1Folder = "example_title";
		var title1Name = "Example Title";
		var title1Creator = "Creator name here";
		
		/*Title 2*/
		var title2Folder = "example_title";
		var title2Name = "The 2nd example title";
		var title2Creator = "Also has an ugly icon";
		
		/*Title 3*/
		var title3Folder = "example_title";
		var title3Name = "3rd example title";
		var title3Creator = "No one created this, it's an example";
		
		/*Title 4*/
		var title4Folder = "example_title";
		var title4Name = "4th";
		var title4Creator = "No one, because it's an example";
		
		/*Title 5*/
		var title5Folder = "example_title";
		var title5Name = "5 example titles..";
		var title5Creator = "ha. ha. ha.";
		
		/*Title 6*/
		var title6Folder = "example_title";
		var title6Name = "6 example titles..";
		var title6Creator = "ha. ha. ha.";
		
		/*Title 7*/
		var title7Folder = "example_title";
		var title7Name = "7th example title";
		var title7Creator = "I'm running out of bad jokes";
		
		/*Title 8*/
		var title8Folder = "example_title";
		var title8Name = "8th example title";
		var title8Creator = "...";
		
		/*Title 9*/
		var title9Folder = "example_title";
		var title9Name = "9th example title (there are 10)";
		var title9Creator = "You can hide a title by making title#Folder blank";
		
		/*Title 10*/
		var title10Folder = "";
		var title10Name = "You can't read this";
		var title10Creator = "Unless you're looking at the code";
		
		function setTitles() {
			
			document.getElementById("title1Icon").style.backgroundImage = 'url("../download/' + title1Folder + '/icon.png")';
			document.getElementById("title1Name").innerHTML = title1Name;
			document.getElementById("title1Creator").innerHTML = title1Creator;
			if (title1Folder=="") {
				document.getElementById("title1Div").style.visibility = "hidden";
			}
			
			document.getElementById("title2Icon").style.backgroundImage = 'url("../download/' + title2Folder + '/icon.png")';
			document.getElementById("title2Name").innerHTML = title2Name;
			document.getElementById("title2Creator").innerHTML = title2Creator;
			if (title2Folder=="") {
				document.getElementById("title2Div").style.visibility = "hidden";
			}
			
			document.getElementById("title3Icon").style.backgroundImage = 'url("../download/' + title3Folder + '/icon.png")';
			document.getElementById("title3Name").innerHTML = title3Name;
			document.getElementById("title3Creator").innerHTML = title3Creator;
			if (title3Folder=="") {
				document.getElementById("title3Div").style.visibility = "hidden";
			}
			
			document.getElementById("title4Icon").style.backgroundImage = 'url("../download/' + title4Folder + '/icon.png")';
			document.getElementById("title4Name").innerHTML = title4Name;
			document.getElementById("title4Creator").innerHTML = title4Creator;
			if (title4Folder=="") {
				document.getElementById("title4Div").style.visibility = "hidden";
			}
			
			document.getElementById("title5Icon").style.backgroundImage = 'url("../download/' + title5Folder + '/icon.png")';
			document.getElementById("title5Name").innerHTML = title5Name;
			document.getElementById("title5Creator").innerHTML = title5Creator;
			if (title5Folder=="") {
				document.getElementById("title5Div").style.visibility = "hidden";
			}
			
			document.getElementById("title6Icon").style.backgroundImage = 'url("../download/' + title6Folder + '/icon.png")';
			document.getElementById("title6Name").innerHTML = title6Name;
			document.getElementById("title6Creator").innerHTML = title6Creator;
			if (title6Folder=="") {
				document.getElementById("title6Div").style.visibility = "hidden";
			}
			
			document.getElementById("title7Icon").style.backgroundImage = 'url("../download/' + title7Folder + '/icon.png")';
			document.getElementById("title7Name").innerHTML = title7Name;
			document.getElementById("title7Creator").innerHTML = title7Creator;
			if (title7Folder=="") {
				document.getElementById("title7Div").style.visibility = "hidden";
			}
			
			document.getElementById("title8Icon").style.backgroundImage = 'url("../download/' + title8Folder + '/icon.png")';
			document.getElementById("title8Name").innerHTML = title8Name;
			document.getElementById("title8Creator").innerHTML = title8Creator;
			if (title8Folder=="") {
				document.getElementById("title8Div").style.visibility = "hidden";
			}
			
			document.getElementById("title9Icon").style.backgroundImage = 'url("../download/' + title9Folder + '/icon.png")';
			document.getElementById("title9Name").innerHTML = title9Name;
			document.getElementById("title9Creator").innerHTML = title9Creator;
			if (title9Folder=="") {
				document.getElementById("title9Div").style.visibility = "hidden";
			}
			
			document.getElementById("title10Icon").style.backgroundImage = 'url("../download/' + title10Folder + '/icon.png")';
			document.getElementById("title10Name").innerHTML = title10Name;
			document.getElementById("title10Creator").innerHTML = title10Creator;
			if (title10Folder=="") {
				document.getElementById("title10Div").style.visibility = "hidden";
			}
		}
	</script>
</html>
