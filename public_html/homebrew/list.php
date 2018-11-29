<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php
$servername = "osc";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($osc, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT TITLE, AUTHOR, THUMBNAIL FROM HOMEBREW"; // I can't remember the table name smh.
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["TITLE"]. $row["AUTHOR"]. '<img src="' . $row["THUMBNAIL"]. '"></img>' "<br>"; // I'm tired, this may need a fixer upperer.
    }
} else {
    echo "0 results";
}
?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta content="en-us" http-equiv="Content-Language" />
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Homebrew</title>
        <link href="../main.css" rel="stylesheet" type="text/css" />
    </head>
    <body class="heading" style="background-image: url(../asset/bg/homebrew.png); background-repeat: repeat-y">
            <p>Homebrew<span class="highlighted"> Catalogue </span></p>
            <p class="default">Games, Utilities and cool looking Demos!</p>
        <table align="center" class="table" style="width: 100%; height: inherit">
            	<tr><td></td></tr>
		</table></p>
            <p><button onclick="window.history.back()">bring me back home daddy</button></p>
    </body>
</html>
