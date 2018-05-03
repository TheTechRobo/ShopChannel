<?php
// Initialize the session from shop
session_start();
 
// Unset all of the session variables
$_SESSION = array();
 
// Destroy the session. Logout. End. End life on planet spot.
session_destroy();
 
// Redirect to login page :O
header("location: login.php");
exit;
?>
