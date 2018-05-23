<html>
    <head>
        <title>Shemma's site</title>
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <script src="js/main.js"></script>
        <script src="../js/wiicore.js"></script>
    </head>
    <body onload="onstart()">
        <div class="top">
            <div class="dot" class="line_top">･･･････････････････････････････････････････････････････････････････････････</div>
            <h1 class="title">Open Shop Channel</h1>
        </div>
        
        <div class="main">
        <?php
            require_once '../../../config-khdalka.php';
            $post_into_catalog = "INSERT INTO catalog (name, description)
            VALUES ('Doddy-". rand(1000,999999) ."', 'Hello World')";
            mysqli_query($link, $post_into_catalog);

            $catalog = mysqli_query($link, "SELECT * FROM catalog");
            while($row = mysqli_fetch_assoc($catalog)){
                    echo "name: " . $row['name'] . ", description: " . $row['description']. "<br>";
            }
        ?>
        </div>
        <div class="bottom">
            <div class="dot" class="line_bottom">･･･････････････････････････････････････････････････････････････････････････</div>
        </div>
    </body>
</html>