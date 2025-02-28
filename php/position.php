<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600"); 
    exit(); 
}


include 'conn.php';  
// print_r('hey');
// exit();
$stmt = $conn->prepare(" SELECT * FROM position where is_deleted = 'No'");
$stmt->execute();

$position = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($position) {
    echo json_encode(["success" => true, "position" => $position]);  
} else {
    echo json_encode(["success" => false, "message" => "No position found"]);
}

?>