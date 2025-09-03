<?php

// Router for PHP built-in server
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Route API requests to simple-backend.php
if (strpos($uri, '/api/') === 0) {
    $_SERVER['SCRIPT_NAME'] = '/simple-backend.php';
    require __DIR__ . '/simple-backend.php';
    return true;
}

// Serve static files
if (is_file(__DIR__ . $uri)) {
    return false; // Let the server handle it
}

// Route everything else to index.html for SPA
$_SERVER['SCRIPT_NAME'] = '/index.html';
require __DIR__ . '/index.html';
return true;

