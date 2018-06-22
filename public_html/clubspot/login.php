<?php
// Include config file
require_once '../../../config-khdalka.php';
 
// Define variables and initialize with empty values
$username = $password = "";
$username_err = $password_err = "";
 
// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
 
    // Check if username is empty
    if(empty(trim($_POST["username"]))){
        $username_err = 'Please enter username.';
    } else{
        $username = trim($_POST["username"]);
    }
    
    // Check if password is empty
    if(empty(trim($_POST['password']))){
        $password_err = 'Please enter your password.';
    } else{
        $password = trim($_POST['password']);
    }
    
    // Validate credentials
    if(empty($username_err) && empty($password_err)){
        // Prepare a select statement
        $sql = "SELECT username, password FROM users WHERE username = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_username);
            
            // Set parameters
            $param_username = $username;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Store result
                mysqli_stmt_store_result($stmt);
                
                // Check if username exists, if yes then verify password
                if(mysqli_stmt_num_rows($stmt) == 1){                    
                    // Bind result variables
                    mysqli_stmt_bind_result($stmt, $username, $hashed_password);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($password, $hashed_password)){
                            /* Password is correct, so start a new session and
                            save the username to the session */
                            session_start();
                            $_SESSION['username'] = $username;      
                            header("location: index.html");
                        } else{
                            // Display an error message if password is not valid
                            $password_err = 'The password you entered was not valid.';
                        }
                    }
                } else{
                    // Display an error message if username doesn't exist
                    $username_err = 'No account found with that username.';
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
        }
        
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
    // Close connection
    mysqli_close($link);
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
    <title>Login</title>
    <script src="/js/wiicore.js"></script>
    <style type="text/css">
        body{ font: 14px; }
        .wrapper{ width: 350px; padding: 20px; }
	
	input[type=text] {
   	border: 2px solid #009ac7;
	}
	input[type=password] {
   	border: 2px solid #009ac7;
	}
    </style>
</head>
<body>
<div align="center">
    <div class="wrapper">
        <h2 style="color:#009ac7;">Login</h2>
        <p>Club Spot member login.</p>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div class="form-group <?php echo (!empty($username_err)) ? 'has-error' : ''; ?>">
                <label>Username</label>
                <input style="height:34px;font-size:20pt;" type="text" name="username"class="form-control" onmousedown="keyboard.call( 0, 1, false, 'Username')">
                <span class="help-block"><?php echo $username_err; ?></span>
            </div>    
		<p></p>
            <div class="form-group <?php echo (!empty($password_err)) ? 'has-error' : ''; ?>">
                <label>Password</label>
                <input style="height:34px;font-size:20pt;" type="password" name="password" class="form-control" onmousedown="keyboard.call( 0, 1, true, 'Password')">
                <span class="help-block"><?php echo $password_err; ?></span>
            </div>
            <div class="form-group">
		    <p></p>
                <input style="height:36px;font-size:20pt;" type="submit" class="btn btn-primary" value="Login">
            </div>
		<p></p>
            <p>Don't have an account? <a href="noregister.php">Sign up now</a> or <a href="../explore.php">Return Home</a>.</p>
        </form>
    </div>    
</div>
</body>
</html>
