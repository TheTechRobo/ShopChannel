<html>
    <head>
        <title>Shemma's site</title>
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <script src="js/main.js"></script>
        <script src="../js/wiicore.js"></script>
    </head>
    <body onload="onstart()">
        <div class="dot" id="line_top">･･･････････････････････････････････････････････････････････････････････････</div>
        <h1 class="title">Open Shop Channel</h1>
        <div class="main">
        <?php
            require_once '../../../config-khdalka.php';
            $post_into_catalog = "INSERT INTO catalog (name, description)
            VALUES ('Doddy-". rand(1000,999999) ."', 'Hello World')";
            mysqli_query($link, $post_into_catalog);

            $catalog = mysql_query("SELECT * FROM catalog") or die(mysql_error());
            while($row = mysql_fetch_array($catalog)){
                echo $row['name']. " - ". $row['description'];
                echo "<br />";
            }
        ?>
        </div>
        <div class="dot" id="line_bottom">･･･････････････････････････････････････････････････････････････････････････</div>
    </body>
</html>