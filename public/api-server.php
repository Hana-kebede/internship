<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);
if (strpos($path, '/api') === 0) {
    $path = substr($path, 4);
}

switch ($path) {
    case '/home':
        echo json_encode(['title' => 'Welcome to Hawi Software Solutions', 'message' => 'We build modern software solutions.']);
        break;
    case '/login':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = json_decode(file_get_contents('php://input'), true);
            if ($input['email'] === 'admin@hawisoftware.com' && $input['password'] === 'password') {
                echo json_encode(['success' => true, 'data' => ['token' => 'demo_token_' . time(), 'user' => ['id' => 1, 'name' => 'Admin User', 'email' => $input['email'], 'role' => 'admin']], 'message' => 'Login successful']);
            } else {
                http_response_code(401);
                echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
            }
        } else { 
            http_response_code(405); 
            echo json_encode(['error' => 'Method not allowed']); 
        }
        break;
    case '/userprojects':
        echo json_encode(['success' => true, 'data' => [
            ['id' => 1, 'name' => 'E-commerce Website', 'status' => 'In Progress', 'progress' => 75, 'deadline' => '2024-12-31', 'budget' => 5000], 
            ['id' => 2, 'name' => 'Mobile App', 'status' => 'Completed', 'progress' => 100, 'deadline' => '2024-11-15', 'budget' => 3000]
        ]]);
        break;
    case '/user_service-requests':
        echo json_encode(['success' => true, 'data' => [
            ['id' => 1, 'title' => 'Website Maintenance', 'description' => 'Need regular maintenance for our website', 'status' => 'Pending', 'priority' => 'Medium', 'created_at' => '2024-08-28'], 
            ['id' => 2, 'title' => 'New Feature Request', 'description' => 'Add payment gateway integration', 'status' => 'In Progress', 'priority' => 'High', 'created_at' => '2024-08-27']
        ]]);
        break;
    case '/usermessages':
        echo json_encode(['success' => true, 'data' => [
            ['id' => 1, 'subject' => 'Project Update', 'message' => 'Your project is progressing well', 'from' => 'Development Team', 'created_at' => '2024-08-28', 'read' => false], 
            ['id' => 2, 'subject' => 'Meeting Request', 'message' => 'Let\'s schedule a meeting to discuss the project', 'from' => 'Project Manager', 'created_at' => '2024-08-27', 'read' => true]
        ]]);
        break;
    case '/blog':
        echo json_encode([
            ['id' => 1, 'title' => 'First Blog Post', 'category' => 'General', 'content' => 'This is the first blog post content.'], 
            ['id' => 2, 'title' => 'Why Choose Hawi Software?', 'category' => 'Business', 'content' => 'Learn why Hawi Software is the best choice for your projects.']
        ]);
        break;
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint not found']);
        break;
}
?>
