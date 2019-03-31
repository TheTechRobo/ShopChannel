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
<meta charset="utf-8">

<head>
<link href="../main.css" rel="stylesheet" type="text/css" />
</head>

<body>
		<!--Header-->
		<a href="../index.php" style="text-decoration: none;">
			<div class="textOpenShop"><div><div><div>
				<h1 class="titlelistTitle">Homebrew<span class="highlighted"> Catalogue </span></h1>
			</div></div></div></div>
		</a>
		<h6 class="dots" style="margin-top: 12px; left: 5px;">• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • </h6>
		
		<iframe src="listP1.php" class="titlelistFrame"></iframe>
		
		<h6 class="dots" style="margin-top: 316px; left: 5px;">• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • </h6>
				
		<!--Footer buttons-->
		<img src="../asset/button/return1A.png" class="returnButton" onmouseover="this.src='../asset/button/return1B.png'" onmouseout="this.src='../asset/button/return1A.png'" onmousedown="this.src='../asset/button/return1C.png'" onclick="window.history.back()">
		
		<img src="../asset/button/nextA.png" class="titlelistNext" onmouseover="" onmouseout="" onmousedown="" onclick="">
		<img src="../asset/button/previousA.png" class="titlelistPrevious" onmouseover="" onmouseout="" onmousedown="" onclick="">
		<p class="titlelistPageNum"> 1 / 1 </p>
	</body>
</html>