<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600");
    exit();
}

include 'conn.php';

$formData = $_POST;
$formData = json_decode(file_get_contents("php://input"),true);


if (isset($formData['job_id'])) {
    $job_id = $formData['job_id'];

    try {
        $stmt = $conn->prepare("SELECT * FROM joblist WHERE id = :job_id");
        $stmt->bindParam(':job_id', $job_id);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $stmt = $conn->prepare("UPDATE joblist SET is_deleted = 'Yes' WHERE id = :job_id");
            $stmt->bindParam(':job_id', $job_id);

            if ($stmt->execute()) {
                echo json_encode(["success" => true, "message" => "Job deleted successfully"]);
            } else {
                echo json_encode(["success" => false, "message" => "Failed to delete job"]);
            }
        } else {
            echo json_encode(["success" => false, "message" => "Job not found"]);
        }

    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Job ID is required"]);
}

?>
