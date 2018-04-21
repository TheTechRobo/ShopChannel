<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
        "http://www.w3.org/TR/html4/strict.dtd">
<?php
// Initialize the session
session_start();
 
// If session variable is not set it will redirect to login page
if(!isset($_SESSION['username']) || empty($_SESSION['username'])){
  header("location: login.php");
  exit;
}
?>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<script type="text/javascript" src="/js/button.js"></script>
	<title>Club Spot</title>
	<script type="text/javascript" src="/js/wiicore.js"></script>
	<script>
    shop.setWallpaper(3)
	</script>
</head>
<body>
<p style="text-align: center;"><span style="font-size: 20px;">Club Spot Debug</span></p>
<p style="text-align: center;">Current Session: <?php echo htmlspecialchars($_SESSION['username']); ?></p>
<p><a href="logout.php">Logout</a></p>
</body>
</html>