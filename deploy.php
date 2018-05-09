<?php
    /**
     * GIT DEPLOYMENT SCRIPT
     *
     * Used for automatically deploying websites via GitHub
     *
     */

    // array of git commands
    $commands = array(
        'echo $PWD',
        'whoami',
        'git pull',
        'git status',
        'git submodule sync',
        'git submodule update',
        'git submodule status',
    );

    // exec commands
    $output = '';
    foreach($commands AS $command){
        $tmp = shell_exec($command);
        
        $output .= "<span style=\"color: #6BE234;\">\$</span><span style=\"color: #729FCF;\">{$command}\n</span><br />";
        $output .= htmlentities(trim($tmp)) . "\n<br /><br />";
    }
?>

//HTML DOC
<!DOCTYPE HTML>
<!-- Set language to english -->
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>GIT DEPLOYMENT SCRIPT</title>
</head>
<body style="background-color: #FFFFFF; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
<div style="width:700px">
    <div style="float:left;width:350px;">
    <p style="color:white;">Git Deployment Script</p>
    <!-- Output deplyment info, for technical usage. Regularly commented out -->
    <?php // echo $output; ?>
    </div>
</div>
</body>
</html>
