<?php

// Fill in the following information and rename this file to config.php.

$host = '';
$db   = '';
$user = '';
$pass = '';

$categories = [
	1 => 'Homebrew',
	2 => 'Patches'
];

// How much time the NEW marker stays on featured titles in seconds.
// Default value is one day in seconds.
$featured_new = 3600 * 24;

// Amount of featured titles to show on the index page.
// Please note that too many can mess up the page!
$featured_limit = 5;