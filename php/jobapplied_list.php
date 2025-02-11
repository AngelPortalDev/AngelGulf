<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600"); 
    exit(); 
}


include 'conn.php';  

$stmt = $conn->prepare(" SELECT * FROM job_applications");
$stmt->execute();

$jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($jobs) {
    echo json_encode(["success" => true, "jobs" => $jobs]);  
} else {
    echo json_encode(["success" => false, "message" => "No jobs found"]);
}

?>