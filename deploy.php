<?php
// Below adapted from https://github.com/antriver/auto-git-pull/blob/a4bd39ec03f78d2414b4fc3d45b80261dd846d70/deploy.example.php

use Tmd\AutoGitPull\Deployer;
require 'vendor/autoload.php';
$deployer = new Deployer([
        'directory' => '/var/www/shop-channel'
    ]);
$deployer->deploy();
