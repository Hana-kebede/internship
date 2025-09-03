<?php
// Database Configuration for Hawi Software Backend
class DatabaseConfig {
    // Database connection settings
    private $host = '127.0.0.1';
    private $port = '3306';
    private $database = 'hawi_software';
    private $username = 'root';
    private $password = '';
    
    // PDO connection instance
    private $pdo = null;
    
    // Get database connection
    public function getConnection() {
        if ($this->pdo === null) {
            try {
                $dsn = "mysql:host={$this->host};port={$this->port};dbname={$this->database};charset=utf8mb4";
                $this->pdo = new PDO($dsn, $this->username, $this->password, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]);
                
                // Test connection
                $this->pdo->query('SELECT 1');
                
            } catch (PDOException $e) {
                throw new Exception("Database connection failed: " . $e->getMessage());
            }
        }
        return $this->pdo;
    }
    
    // Create database if it doesn't exist
    public function createDatabase() {
        try {
            $dsn = "mysql:host={$this->host};port={$this->port};charset=utf8mb4";
            $pdo = new PDO($dsn, $this->username, $this->password);
            
            $sql = "CREATE DATABASE IF NOT EXISTS `{$this->database}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";
            $pdo->exec($sql);
            
            return true;
        } catch (PDOException $e) {
            throw new Exception("Failed to create database: " . $e->getMessage());
        }
    }
    
    // Create tables
    public function createTables() {
        try {
            $pdo = $this->getConnection();
            
            // Users table
            $sql = "CREATE TABLE IF NOT EXISTS `users` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `name` VARCHAR(255) NOT NULL,
                `email` VARCHAR(255) UNIQUE NOT NULL,
                `password` VARCHAR(255) NOT NULL,
                `role` ENUM('user', 'admin') DEFAULT 'user',
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";
            $pdo->exec($sql);
            
            // Projects table
            $sql = "CREATE TABLE IF NOT EXISTS `projects` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `user_id` INT NOT NULL,
                `title` VARCHAR(255) NOT NULL,
                `description` TEXT,
                `status` ENUM('planning', 'in-progress', 'completed', 'on-hold') DEFAULT 'planning',
                `progress` INT DEFAULT 0,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
            )";
            $pdo->exec($sql);
            
            // Blog posts table
            $sql = "CREATE TABLE IF NOT EXISTS `blog_posts` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `title` VARCHAR(255) NOT NULL,
                `content` TEXT,
                `category` VARCHAR(100),
                `author_id` INT,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE SET NULL
            )";
            $pdo->exec($sql);
            
            // Insert sample data
            $this->insertSampleData();
            
            return true;
        } catch (PDOException $e) {
            throw new Exception("Failed to create tables: " . $e->getMessage());
        }
    }
    
    // Insert sample data
    private function insertSampleData() {
        try {
            $pdo = $this->getConnection();
            
            // Check if users table is empty
            $stmt = $pdo->query("SELECT COUNT(*) FROM users");
            if ($stmt->fetchColumn() == 0) {
                // Insert sample user
                $password = password_hash('2345', PASSWORD_DEFAULT);
                $sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute(['Hana Kebede', 'hanakebedeemail@gmail.com', $password, 'user']);
                
                // Insert sample projects
                $userId = $pdo->lastInsertId();
                $sql = "INSERT INTO projects (user_id, title, description, status, progress) VALUES (?, ?, ?, ?, ?)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([$userId, 'E-commerce Platform', 'Modern online shopping platform', 'in-progress', 75]);
                $stmt->execute([$userId, 'Mobile App', 'Cross-platform mobile application', 'planning', 25]);
                
                // Insert sample blog posts
                $sql = "INSERT INTO blog_posts (title, content, category, author_id) VALUES (?, ?, ?, ?)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute(['First Blog Post', 'Welcome to our blog!', 'General', $userId]);
                $stmt->execute(['Why Choose Hawi Software?', 'We provide innovative solutions...', 'Business', $userId]);
            }
            
        } catch (PDOException $e) {
            // Ignore errors for sample data insertion
        }
    }
}

// Initialize database
try {
    $dbConfig = new DatabaseConfig();
    $dbConfig->createDatabase();
    $dbConfig->createTables();
    echo "Database initialized successfully!\n";
} catch (Exception $e) {
    echo "Database initialization failed: " . $e->getMessage() . "\n";
}
?>

