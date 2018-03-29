<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<link href="main.css" rel="stylesheet" type="text/css"/>
	<script type="text/javascript" src="js/button.js"></script>
	<script type="text/javascript" src="js/wiicore.js"></script>
</head>
	<body onload="FP_preloadImgs(/*url*/'img/section/clubspotC.png',/*url*/'img/section/clubspotB.png',/*url*/'img/button/returnB.png',/*url*/'img/button/returnC.png')">
		<p class="heading">Open Shop Channel<span class="highlighted"> Explore </span></p>
			
			<!--For the sake of order, stylize Buttons with the heading class in main.css.-->
			<p class="heading">
				<!--Sections-->
				<img alt="Club Spot" id="clubspotbut" dir="ltr" height="100" src="img/section/clubspotA.png" width="100" onmousedown="FP_swapImg(1,1,/*id*/'clubspotbut',/*url*/'img/section/clubspotC.png')" onmouseout="FP_swapImgRestore()" onmouseover="FP_swapImg(1,1,/*id*/'clubspotbut',/*url*/'img/section/clubspotB.png')" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL('clubspot/C_01.php')")>
				</img>
				<img alt="Patches" id="patchesbut" dir="ltr" height="100" src="img/section/patchesA.png" width="100" onmousedown="FP_swapImg(1,1,/*id*/'patchesbut',/*url*/'img/section/patchesC.png')" onmouseout="FP_swapImgRestore()" onmouseover="FP_swapImg(1,1,/*id*/'patchesbut',/*url*/'img/section/patchesB.png');" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL('patches/P_01.php');")>
				</img>
				<img alt="Homebrew" id="homebrewbut" dir="ltr" height="100" src="img/section/homebrewA.png" width="100" onmousedown="FP_swapImg(1,1,/*id*/'homebrewbut',/*url*/'img/section/homebrewC.png')" onmouseout="FP_swapImgRestore()" onmouseover="FP_swapImg(1,1,/*id*/'homebrewbut',/*url*/'img/section/homebrewB.png');" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL(/*href*/'homebrew/H_01.php');")>
				</img></p>
				
			<p class="heading">
				<img alt="Return Button" id="returnbut" dir="ltr" height="100" src="img/button/returnA.png" width="200" onmousedown="FP_swapImg(1,1,/*id*/'returnbut',/*url*/'img/button/returnC.png')" onmouseout="FP_swapImgRestore()" onmouseover="FP_swapImg(1,1,/*id*/'returnbut',/*url*/'img/button/returnB.png')" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL(/*href*/'W_01.php')")>
				</img>
		</p>
	</body>
</html>
