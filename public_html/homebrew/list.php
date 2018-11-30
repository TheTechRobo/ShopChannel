<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php
require_once("../database.php");
    /* Insert into database. */
    $db = connectMySQL();
    $stmt = $db->prepare('SELECT * FROM `HOMEBREW` WHERE `TITLEID` = ?');
    $stmt->bind_param('i',$_GET['titleid']);
    $result = new_get_result($stmt);
?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta content="en-us" http-equiv="Content-Language" />
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Homebrew</title>
        <link href="../main.css" rel="stylesheet" type="text/css" />
    </head>
    <body class="heading" style="background-image: url(../asset/bg/homebrew.png); background-repeat: repeat-y">
            <p>Homebrew<span class="highlighted"> Catalogue </span></p>
            <p class="default">Games, Utilities and cool looking Demos!</p>
        <table align="center" class="table" style="width: 100%; height: inherit">
            	<tr><td></td></tr>
		</table></p>
            <p><button onclick="window.history.back()">bring me back home daddy</button></p>
    </body>
</html>
