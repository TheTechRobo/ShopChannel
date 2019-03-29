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
	<img src="../asset/bg/warning_top.png" class="imgWarningTop">
	<h2 class="warnHeader">Warning</h2>

	<!--Warning text-->
	<p class="warning">Warning! Patches are not brick-safe and they make 
	permanent changes to your Wii data. Use these tools at your own risk.</p>
	
	<p>(More detail can be added here later)</p>
	<!--Footer & buttons-->
	
	<div class="divWarningBottom">
		<img src="../asset/bg/warning_bottom.png" class="imgWarningBottom">
		<div class="btnWarnReturn" id="btnWarnReturn" onmouseover="document.getElementById('btnWarnReturn').style.background='url(../asset/button/warnReturnHover.png)';" onmouseout="document.getElementById('btnWarnReturn').style.background='url(../asset/button/warnReturn.png)';" onclick="window.history.back()">
		</div>
		<div class="btnWarnContinue" id="btnWarnContinue" onmouseover="document.getElementById('btnWarnContinue').style.background='url(../asset/button/warnContinueHover.png)';" onmouseout="document.getElementById('btnWarnContinue').style.background='url(../asset/button/warnContinue.png)';" onclick="window.location = 'list.php'">
		</div>
	</div>
</center>
<!--<p class="warning">Warning! Patches are not brick-safe and they make 
permanent changes to your Wii data. Use these tools at your own risk.</p>-->
<!--<p><button onclick="window.history.back()">bring me back home daddy</button></p>-->
</body>
<script>
window.onload = ButtonDelay;

function ButtonDelay() {
	setTimeout(ShowButton, 3000);
}
function ShowButton() {
	document.getElementById("btnWarnContinue").style.visibility = 'visible';
}
</script>
</html>
