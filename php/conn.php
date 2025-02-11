<?php
// Connection code (no session_start here)
$host = "localhost";      
$dbname = "angelgulfjobs_db"; 
$username = "angelgulfjobs_gulf"; 
$password = "9w0%ye+S6v=I"; 

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false); 
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage()); 
}
?>
