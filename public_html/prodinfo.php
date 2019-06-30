<?php
require('lib/functions.php');

$id = (isset($_GET['id']) ? $_GET['id'] : 1);

$titledata = fetch("SELECT * FROM titles WHERE titleid = ?", [$id]);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8">
	<link href="main.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<!--Header-->
	<a href="index.php" style="text-decoration: none;">
		<div class="textOpenShop">
			<h1 class="textOpenShopH">Details</h1>
		</div>
	</a>
	<h6 class="dots" style="margin-top: 12px; left: 5px;">• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • </h6>

	<img src="asset/bg/details.png" class="infoBG">

	<!--info section-->
	<p class="textPlatform"><?=$categories[$titledata['categoryid']] ?></p>
	<p class="textNormal">
		Released <?=date('m/d/Y', $titledata['date'])?><br>
		<?=$titledata['author'] ?><br>
		<?=$titledata['genre'] ?>
	</p>
	<p class="textNormal" style="left: 400px;">
		For <?=$titledata['players'] ?> player<?=($titledata['players'] != 1 ? 's' : '') ?>
	</p>
		<p class="textTitle"><?=$titledata['name'] ?></p>
	<img src="download/<?=$titledata['titleid'] ?>/icon.png" class="imageScreenshot"><!--Product icon here-->

	<h6 class="dots" style="margin-top: 316px; left: 5px;">• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • </h6>
	<br>

	<!--Download button-->
	<a href=""> <!--Link to download page here-->
		<img src="asset/button/download2SIZE.png" class="buttonDownload">
	</a>

	<!--Footer buttons-->
	<a onclick="window.history.back()"> <!--Previous page here-->
		<img src="asset/button/return1A.png" class="returnButton" onmouseover="this.src='asset/button/return1B.png'" onmouseout="this.src='asset/button/return1A.png'" onmousedown="this.src='asset/button/return1C.png'">
	</a>
</body>
</html>