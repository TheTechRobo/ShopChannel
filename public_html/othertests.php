<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <script src="js/wiicore.js"></script>
    <script>
    var SDOk = new wiiSDCard();
    </script>
</head>
<body>
<button onmousedown="document.getElementById('yeet').innerHTML = SDOk.isInserted()">SD card inserted?</button>
<button onmousedown="document.getElementById('yeet').innerHTML = wiiEC">Another test</button>
<br>
<br>
<p id="yeet">Here's another placeholder</p>
<a href="toolbox.php">Go back</a>
</body>
</html>
