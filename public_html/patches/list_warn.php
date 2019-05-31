<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="en-au" http-equiv="Content-Language" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>Patches</title>
<link href="../main.css" rel="stylesheet" type="text/css" />
</head>
<body style="margin: 0; height: 100%; overflow: hidden;">

<!--Header-->
<center>
	<img src="../asset/bg/warning_top.png" class="imgWarningTop" id="fadeineffect">
	<h2 class="warnHeader" id="fadeineffect">Warning</h2>

	<!--Warning text-->
	<p class="warning" id="fadeineffect">WARNING! Patches provided by the OSC can
	brick your Wii if not handled with care. OSC nor its developers will be head
	responsible for any damage to your console.</p>
	
	<p id="fadeineffect">(More detail can be added here later)</p>
	<!--Footer & buttons-->
	
	<div class="divWarningBottom">
		<img src="../asset/bg/warning_bottom.png" class="imgWarningBottom" id="imgWarnBottom">
		<div class="btnWarnReturn" id="btnWarnReturn" onmouseover="document.getElementById('btnWarnReturn').style.background='url(../asset/button/warnReturnHover.png)';" onmouseout="document.getElementById('btnWarnReturn').style.background='url(../asset/button/warnReturn.png)';" onclick="window.history.back()">
			<p id="fadeineffect" class="warnButtonText">Back</p>
		</div>
		<div class="btnWarnContinue" id="btnWarnContinue" onmouseover="document.getElementById('btnWarnContinue').style.background='url(../asset/button/warnContinueHover.png)';" onmouseout="document.getElementById('btnWarnContinue').style.background='url(../asset/button/warnContinue.png)';" onclick="window.location = '../list.php?category=2'">
			<p id="fadeineffect" class="warnButtonText">Continue</p>
		</div>
	</div>
</center>
<!--<p class="warning">Warning! Patches are not brick-safe and they make 
permanent changes to your Wii data. Use these tools at your own risk.</p>-->
<!--<p><button onclick="window.history.back()">bring me back home daddy</button></p>-->
</body>
<script>
var count = 0;
var count2 = 0;
window.onload = FadeIn;

function ButtonDelay() {
	setTimeout(FadeInButton, 3000);
}
function ShowButton() {
	document.getElementById("btnWarnContinue").style.opacity = "0";
	document.getElementById("btnWarnContinue").style.visibility = 'visible';
	FadeInButton();
}
function FadeIn() {
	if (count < 1.1) {
		document.getElementById("fadeineffect").style.opacity = count;
		document.getElementById("imgWarnBottom").style.opacity = count;
		document.getElementById("btnWarnReturn").style.opacity = count;
		count = count + 0.1;
		setTimeout(FadeIn, 50);
	}
	else {
		ButtonDelay();
	}
}
function FadeInButton() {
	document.getElementById("btnWarnContinue").style.visibility = 'visible';
	if (count2 < 1.1) {
		document.getElementById("btnWarnContinue").style.opacity = count2;
		count2 = count2 + 0.1;
		setTimeout(FadeInButton, 50);
	}
}
</script>
</html>
