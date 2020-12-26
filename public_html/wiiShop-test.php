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
<button onmousedown="shop.returnToMenu()">Exit to Wii Menu</button>
<button onmousedown="shop.beginWaiting()">Show loading circle</button>
<button onmousedown="shop.endWaiting()">Hide loading circle</button>
<button onmousedown="shop.jumpDataMng('soundtest.php')">Data Management</button>
<button onmousedown="shop.jumpToEULAViewer()">EULA</button>
<button onmousedown="shop.returnToUpdate()">Go to Update</button>
<button onmousedown="shop.rebootSystem()">Reboot</button>
<hr size="1" noshade>
<p><b>Change background (does not apply to 4:3):</b></p>
<button onmousedown="shop.setWallpaper(0)">Default</button>
<button onmousedown="shop.setWallpaper(1)">Health & Safety</button>
<button onmousedown="shop.setWallpaper(2)">Just white</button>
<button onmousedown="shop.setWallpaper(3)">Lines (operation manual)</button>
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
<button onmousedown="document.getElementById('testok').innerHTML = shop.launchCode">Shop launch code</button>
<!-- <button onmousedown="document.getElementById('testok').innerHTML = shop.getLogUrl">log url</button> -->
<button onmousedown="shop.enableHRP()">Enable home button</button> 
<button onmousedown="shop.disableHRP()">Disable home button</button>
<p>shop.error(errorcode, errortype) displays the local error html page</p>
<hr size="1" noshade>
<p><a href="toolbox.php">Go home</a> (btw, things that don't work are commented out)</p>
<p id="testok"></p>
<!-- the code of this is shit, i know, i don't want divs or anything, as long as it works, i'm fine with it-->
<!-- As long at it works TM-->
</body>
</html>
