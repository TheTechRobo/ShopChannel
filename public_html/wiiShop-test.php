<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<script type="application/javascript" src="js/wiicore.js"></script>
	<script type="application/javascript">
		//var shop = new wiiShop(); // having to do this, aAAAA
	</script>
</head>
<body>
<button onmousedown="shop.returnToMenu()">exit to wii menu</button>
<button onmousedown="shop.beginWaiting()">display loading circle</button>
<button onmousedown="shop.endWaiting()">hide loading circle</button>
<button onmousedown="shop.jumpDataMng('soundtest.php')">go to data management</button>
<button onmousedown="shop.jumpToEULAViewer()">view the eula</button>
<button onmousedown="shop.returnToUpdate()">go to update</button>
<button onmousedown="shop.rebootSystem()">reboot wii</button>
<hr size="1" noshade>
<p><b>change background (does not apply to 4:3):</b></p>
<button onmousedown="shop.setWallpaper(0)">dots (default)</button>
<button onmousedown="shop.setWallpaper(1)">black (health safety)</button>
<button onmousedown="shop.setWallpaper(2)">white</button>
<button onmousedown="shop.setWallpaper(3)">blue vertical lines (operations manual)</button>
<hr size="1" noshade>
<p><b>localized strings:</b></p>
<button onmousedown="document.getElementById('testok').innerHTML = shop.title">"Wii Shop Channel"</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.menuBtn">"Wii Menu"</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.retryBtn">"Try Again"</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.connecting">"Connecting. Please wait..."</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.wiiUMenuBtn">"Wii U Menu"</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.manualChannelBtn">"Continue"</button>
<hr size="1" noshade>
<p><b>other stuff:</b></p>
<button onmousedown="document.getElementById('testok').innerHTML = shop.launchCode">shop launch code</button>
<!-- <button onmousedown="document.getElementById('testok').innerHTML = shop.getLogUrl">log url</button> -->
<button onmousedown="shop.enableHRP()">enable home button</button> 
<button onmousedown="shop.disableHRP()">disable home button</button>
<p>shop.error(errorcode, errortype) displays the local error html page</p>
<hr size="1" noshade>
<p><a href="toolbox.php">i wanna go home</a> (btw, things that don't work are commented out)</p>
<p id="testok"></p>
<!-- the code of this is shit, i know, i don't want divs or anything, as long as it works, i'm fine with it-->
<!-- As long at it works TM-->
</body>
</html>
