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
            $sql = "CREATE TABLE catalog (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(5000) NOT NULL,
                reg_date TIMESTAMP
                )";
            if(mysqli_query($link, $sql) === TRUE){
                echo "yes";
            };
        ?>
        </div>
        <div class="dot" id="line_bottom">･･･････････････････････････････････････････････････････････････････････････</div>
    </body>
</html>