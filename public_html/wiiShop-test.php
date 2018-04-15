<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<script src="js/wiicore.js"></script>
	<script>
		//var shop = new wiiShop(); // having to do this, aAAAA
	</script>
</head>
<body>
<button onmousedown="shop.returnToMenu()">go to wii menu</button>
<button onmousedown="shop.beginWaiting()">display loading thing</button>
<button onmousedown="shop.endWaiting()">hide loading thing</button>
<button onmousedown="shop.jumpDataMng('soundtest.php')">go to data management</button>
<button onmousedown="shop.jumpToEULAViewer()">view the eula</button>
<button onmousedown="shop.returnToUpdate()">go to update</button>
<button onmousedown="shop.rebootSystem()">reboot wii</button>
<hr size="1" noshade>
<p><b>change background:</b></p>
<button onmousedown="shop.setWallpaper(0)">dots</button>
<button onmousedown="shop.setWallpaper(1)">black</button>
<button onmousedown="shop.setWallpaper(2)">white</button>
<button onmousedown="shop.setWallpaper(3)">blue vertical lines</button>
<hr size="1" noshade>
<p><b>localized strings:</b></p>
<button onmousedown="document.getElementById('testok').innerHTML = shop.title">"Wii Shop Channel"</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.menuBtn">"Wii Menu"</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.retryBtn">"Try Again"</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.connecting">"Connecting. Please wait..."</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.wiiUMenuBtn">idk 1</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.manualChannelBtn">idk 2</button>
<hr size="1" noshade>
<p><b>other stuff:</b></p>
<!-- <button onmousedown="document.getElementById('testok').innerHTML = shop.launchCode()">shop launch code</button>
<button onmousedown="document.getElementById('testok').innerHTML = shop.getLogUrl">log url</button> -->
<button onmousedown="shop.enableHRP()">enable home button</button> 
<button onmousedown="shop.disableHRP()">disable home button</button>
<p>shop.error(errorcode, errortype) displays the local error html</p>
<hr size="1" noshade>
<p><a href="index.php">i wanna go home</a> (btw, things that don't work are commented out)</p>
<p id="testok"></p>
<!-- the code of this is shit, i know, i don't want divs or anything, as long as it works, i'm fine with it-->
</body>
</html>
