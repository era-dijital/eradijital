<?php
/**
 * Era Dijital - Root Entry Point (Hostinger Fallback)
 */
$uri = $_SERVER['REQUEST_URI'] ?? '/';
if (strpos($uri, '/api/health') !== false) {
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'ok',
        'platform' => 'EraDijital',
        'version' => '1.0.0',
        'timestamp' => date('c')
    ]);
    exit;
}

$frontendIndex = __DIR__ . '/dist/index.html';
if (file_exists($frontendIndex)) {
    readfile($frontendIndex);
    exit;
}

// Fallback to panel login if frontend build is not found
if (file_exists(__DIR__ . '/panel/admin/login.php')) {
    header('Location: /panel/admin/login.php');
    exit;
}

echo "Era Dijital - System is loading...";
exit;