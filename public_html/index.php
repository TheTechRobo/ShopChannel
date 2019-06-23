<?php
require('lib/functions.php');

$featured_titles = query("SELECT f.title, f.time, t.name FROM featured f JOIN titles t ON f.title = t.titleid ORDER BY f.time DESC LIMIT $featured_limit");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<link href="main.css" rel="stylesheet" type="text/css"/>
	<script type="text/javascript" src="js/button.js"></script>
	<script type="text/javascript" src="js/wiicore.js"></script>
	<script type="text/JavaScript">
		shop.setWallpaper(3);
		sound.playBGM();
	</script>
</head>
<body onload="FP_preloadImgs(/*url*/'asset/button/exploreA.png',/*url*/'asset/button/exploreB.png',/*url*/'asset/button/exploreC.png'); initPage();" style="background: url('asset/bg/table_top.png') no-repeat;">

<h2 class="dots">• • • • • • • • • • • • • • • • • •</h2>

<p class="tableTitle">
	<strong>Featured</strong>
</p>

<table border="1" cellspacing="0" cellpadding="0" align="left" class="table">
	<?php while ($record = $featured_titles->fetch()) { ?>
	<tr><td width="219" valign="top">
		<p>
			<?=($record['time'] > (time() - $featured_new) ? '<span class="highlighted">NEW</span>' : '') ?>
			<!-- TODO: Style the link some maybe? -->
			<a href="prodinfo.php?id=<?=$record['title'] ?>"><?=$record['name'] ?></a>
		</p>
	</td></tr>
	<?php } ?>
	<?php for ($i = 0; $i < max(0, $featured_limit - result("SELECT COUNT(*) FROM featured")); $i++) { ?>
		<tr><td><p>&nbsp;</p></td></tr>
	<?php } ?>
</table>

<p><p class="heading">Open Shop Channel</p></p>

<p>
<p class="heading"><img alt="Explore Button" id="explore" dir="ltr" height="100" src="asset/button/exploreA.png" width="200" onmousedown="FP_swapImg(1,1,/*id*/'explore',/*url*/'asset/button/exploreC.png')" onmouseout="FP_swapImgRestore()" onmouseover="FP_swapImg(1,1,/*id*/'explore',/*url*/'asset/button/exploreB.png');" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL(/*href*/'explore.php');"></p>
<p class="heading"><img src="asset/logo/LogoText.png" width="242" height="100.5"></p>
<p><a href="toolbox.php">Debugger for devs</a></p>
<p align="right">Copyright (C) 2018-2019 Open Shop Channel Team</p>
</p>
<p id="test" style="display: none;"></p>
<script>
	document.getElementById('test').innerHTML = new wiiShop().connecting
</script>
<script type="text/javascript" src="/js/wiicore.js"></script>
<script>
	//document.getElementById("helpme").innerHTML = location.href
	//wiiec.setSessionValue("connecting", "true");
	/*wiiec.setSessionValue("connecting", "false")
	shop.endWaiting()
	shop.enableHRP()*/
	//sound.playBGM();
	//var ecTimeout = new ECTimeout(parseInt("0"));
</script>
