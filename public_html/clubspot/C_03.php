<?php
// Initialize the session
session_start();
 
// If session variable is not set it will redirect to login page
if(!isset($_SESSION['username']) || empty($_SESSION['username'])){
  header("location: C_02.php");
  exit;
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <script type="text/javascript" src="/js/wiicore.js"></script>
	<script>
        shop.setWallpaper(3)
	</script>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <style type="text/css">
        body{ font: 14px sans-serif; text-align: center; }
    </style>
</head>
<body>
    <b>Hello <?php echo htmlspecialchars($_SESSION['username']); ?></b>
    <p><a href="C_01.php">C_01</a></p>
</body>
</html>
