<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600");
    exit();
}

include 'conn.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->job_id) && isset($data->status)) {
    $job_id = $data->job_id;
    $status = $data->status === "Active" ? "No" : "Yes"; 

    // Prepare the SQL update query
    $stmt = $conn->prepare("UPDATE joblist SET is_deleted = ? WHERE id = ?");
    $stmt->execute([$status, $job_id]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(["success" => true, "message" => "Job status updated successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update job status."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input data."]);
}
