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
$stmt = $conn->prepare(" SELECT * FROM country_master where is_deleted = 'No'");
$stmt->execute();

$country = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($country) {
    echo json_encode(["success" => true, "country" => $country]);  
} else {
    echo json_encode(["success" => false, "message" => "No Country found"]);
}

?>