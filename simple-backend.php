<?php
// Simple PHP Backend with MySQL Database for Hawi Software
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Include database configuration
require_once 'database-config.php';

// Initialize database connection
try {
    $dbConfig = new DatabaseConfig();
    $pdo = $dbConfig->getConnection();
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed', 'message' => $e->getMessage()]);
    exit();
}

$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Remove /api prefix if present
$path = str_replace('/api', '', $path);

// Get request method and body
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

// Route handling
switch ($path) {
    case '/home':
        echo json_encode([
            'title' => 'Welcome to Hawi Software Solutions',
            'message' => 'We build modern software solutions.',
            'status' => 'connected',
            'backend' => 'PHP + MySQL Backend'
        ]);
        break;
        
    case '/about':
        echo json_encode([
            'company' => 'Hawi Software Solutions',
            'values' => 'Innovation, Quality, and Customer Satisfaction',
            'status' => 'connected'
        ]);
        break;
        
    case '/services':
        echo json_encode([
            ['name' => 'Web Development', 'description' => 'Modern web apps using Laravel + React'],
            ['name' => 'Mobile Apps', 'description' => 'Cross-platform mobile solutions'],
            ['name' => 'Cloud Solutions', 'description' => 'Secure and scalable cloud services'],
            'status' => 'connected'
        ]);
        break;
        
    case '/contact':
        echo json_encode([
            'email' => 'contact@hawisoftware.com',
            'phone' => '+251 912 345 678',
            'address' => 'Addis Ababa, Ethiopia',
            'status' => 'connected'
        ]);
        break;
        
    case '/blog':
        try {
            $stmt = $pdo->query("SELECT id, title, category, created_at FROM blog_posts ORDER BY created_at DESC");
            $posts = $stmt->fetchAll();
            
            echo json_encode([
                'data' => $posts,
                'status' => 'connected',
                'source' => 'MySQL Database'
            ]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to fetch blog posts', 'message' => $e->getMessage()]);
        }
        break;
        
    case '/login':
        if ($method === 'POST') {
            $email = $input['email'] ?? '';
            $password = $input['password'] ?? '';
            
            try {
                $stmt = $pdo->prepare("SELECT id, name, email, password, role FROM users WHERE email = ?");
                $stmt->execute([$email]);
                $user = $stmt->fetch();
                
                if ($user && password_verify($password, $user['password'])) {
                    echo json_encode([
                        'success' => true,
                        'message' => 'Login successful',
                        'user' => [
                            'id' => $user['id'],
                            'name' => $user['name'],
                            'email' => $user['email'],
                            'role' => $user['role']
                        ],
                        'token' => 'db-auth-token-' . time(),
                        'status' => 'connected',
                        'source' => 'MySQL Database'
                    ]);
                } else {
                    http_response_code(401);
                    echo json_encode([
                        'success' => false,
                        'message' => 'Invalid credentials',
                        'status' => 'error'
                    ]);
                }
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Database error', 'message' => $e->getMessage()]);
            }
        } else {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
        }
        break;
        
    case '/register':
        if ($method === 'POST') {
            $name = $input['name'] ?? '';
            $email = $input['email'] ?? '';
            $password = $input['password'] ?? '';
            
            try {
                // Check if user already exists
                $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
                $stmt->execute([$email]);
                if ($stmt->fetch()) {
                    http_response_code(400);
                    echo json_encode(['error' => 'User already exists']);
                    break;
                }
                
                // Hash password and insert user
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
                $stmt->execute([$name, $email, $hashedPassword]);
                
                $userId = $pdo->lastInsertId();
                
                echo json_encode([
                    'success' => true,
                    'message' => 'Registration successful',
                    'user' => [
                        'id' => $userId,
                        'name' => $name,
                        'email' => $email,
                        'role' => 'user'
                    ],
                    'status' => 'connected',
                    'source' => 'MySQL Database'
                ]);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Database error', 'message' => $e->getMessage()]);
            }
        } else {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
        }
        break;
        
    case '/logout':
        if ($method === 'POST') {
            echo json_encode([
                'success' => true,
                'message' => 'Logout successful',
                'status' => 'connected'
            ]);
        } else {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
        }
        break;
        
    case '/user':
        try {
            // For now, return the first user as example
            $stmt = $pdo->query("SELECT id, name, email, role, created_at FROM users LIMIT 1");
            $user = $stmt->fetch();
            
            if ($user) {
                echo json_encode([
                    'data' => $user,
                    'status' => 'connected',
                    'source' => 'MySQL Database'
                ]);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'No users found']);
            }
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Database error', 'message' => $e->getMessage()]);
        }
        break;
        
    case '/userprojects':
        try {
            // Get projects for the first user
            $stmt = $pdo->query("SELECT p.id, p.title, p.description, p.status, p.progress, p.created_at FROM projects p JOIN users u ON p.user_id = u.id ORDER BY p.created_at DESC");
            $projects = $stmt->fetchAll();
            
            echo json_encode([
                'data' => $projects,
                'status' => 'connected',
                'source' => 'MySQL Database'
            ]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Database error', 'message' => $e->getMessage()]);
        }
        break;
        
    default:
        http_response_code(404);
        echo json_encode([
            'error' => 'Endpoint not found',
            'path' => $path,
            'method' => $method,
            'status' => 'error'
        ]);
        break;
}
?>
