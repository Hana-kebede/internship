<?php
// Simple router for PHP built-in server
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// Handle API requests
if (strpos($uri, '/api/') === 0) {
    // Include our API server
    include __DIR__ . '/api-server.php';
    return true;
}

// Handle other requests normally
if ($uri !== '/' && file_exists(__DIR__ . $uri)) {
    return false;
}

// Default to index.php
include __DIR__ . '/index.php';
?>
