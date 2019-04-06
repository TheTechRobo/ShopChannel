<?php
require('lib/functions.php');

$category = (isset($_GET['category']) ? $_GET['category'] : 1);

$query = query("SELECT * FROM titles WHERE categoryid = ?", [$category]);
$i = 1;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta content="en-us" http-equiv="Content-Language" />
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Homebrew</title>
        <link href="main.css" rel="stylesheet" type="text/css" />
		<base target="_parent">
    </head>
    <body class="heading" style="background-image: url(asset/bg/<?=strtolower($categories[$category]) ?>.png); background-repeat: repeat-y; background-position: center;">
<?php while ($title = $query->fetch()) { ?>
	<div id="title<?=$i ?>Div" style="position: absolute;" 
		onmouseover="document.getElementById('title<?=$i ?>BG').src='asset/button/titleB.png'"
		onmouseout="document.getElementById('title<?=$i ?>BG').src='asset/button/titleA.png'"
		onclick="window.top.location.href='prodinfo.php?id=<?=$title['titleid'] ?>';">
		
		<img id="title<?=$i ?>BG" src="asset/button/titleA.png" style="float: left;">
		<div id="title<?=$i ?>Icon" class="titlelistIcon" style="background-image:url('download/<?=$title['titleid'] ?>/iconsmall.png')"></div>
		<p id="title<?=$i ?>Name" class="titlelistName"><?=$title['name'] ?></p>
		<p id="title<?=$i ?>Creator" class="titlelistCreator"><?=$title['author'] ?></p>
	</div><br><br><br>
	<?php $i++ ?>
<?php } ?>
    </body>
</html>
