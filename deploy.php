<?php
// Below is adapted from https://github.com/antriver/auto-git-pull/blob/a4bd39ec03f78d2414b4fc3d45b80261dd846d70/deploy.example.php

use Tmd\AutoGitPull\Deployer;
require 'vendor/autoload.php';

// TODO: make this dynamic.
// https://api.github.com/meta
$deployer = new Deployer([
        'directory' => '/var/www/shop-channel',
        'allowedIpRanges' => [
          '192.30.252.0/22',
          '185.199.108.0/22',
        ],
        'pullScriptPath' => __DIR__ . '/scripts/git-pull.sh',
    ]);
$deployer->deploy();
