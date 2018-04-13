<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
        "http://www.w3.org/TR/html4/strict.dtd">
<?php
// Initialize the session
session_start();
 
// If session variable is not set it will redirect to login page
if(!isset($_SESSION['username']) || empty($_SESSION['username'])){
  header("location: C_02.php");
  exit;
}
?>
<script type="text/javascript" src="../js/wiicore.js"></script>
<script>
    shop.setWallpaper(3)
</script>
<script type="text/javascript" src="../js/button.js"></script>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Club Spot</title>
</head>
<body>
<p style="text-align: center;"><span style="font-size: 20px;">Club Spot Debug</span></p>
<p style="text-align: center;">Current Session: <?php echo htmlspecialchars($_SESSION['username']); ?></p>
<p><a href="C_04.php">Logout</a></p>
</body>
</html>