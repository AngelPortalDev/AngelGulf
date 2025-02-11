<<<<<<< HEAD
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600");
    exit();
}


include 'conn.php';
$job_id = isset($_GET['job_id']) ? (int)$_GET['job_id'] : 0;
// print_r($_GET['job_id']);
// exit();
if ($job_id > 0) {
    $stmt = $conn->prepare("
        SELECT 
            jl.id, 
            jl.job_title, 
            jl.company_name, 
            jl.company_logo, 
            jl.job_description, 
            jl.skill_keyword, 
            jl.location_hiring, 
            jl.no_of_openings, 
            jl.currency_type, 
            jl.job_education, 
            jl.id, 
            cm.name,  
            jl.gender, 
            jl.salary ,
            jl.update_at,
            jl.experience
        FROM joblist jl
        JOIN country_list cm ON jl.id = cm.id
        WHERE jl.id = :job_id
    ");

    $stmt->bindParam(':job_id', $job_id, PDO::PARAM_INT);

    $stmt->execute();

    $job = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($job) {
        echo json_encode(["success" => true, "job" => $job]);
    } else {
        echo json_encode(["success" => false, "message" => "Job not found"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid job ID"]);
}
=======
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600");
    exit();
}


include 'conn.php';
$job_id = isset($_GET['job_id']) ? (int)$_GET['job_id'] : 0;
// print_r($_GET['job_id']);
// exit();
if ($job_id > 0) {
    $stmt = $conn->prepare("
        SELECT 
            jl.id, 
            jl.job_title, 
            jl.company_name, 
            jl.company_logo, 
            jl.job_description, 
            jl.skill_keyword, 
            jl.location_hiring, 
            jl.no_of_openings, 
            jl.currency_type, 
            jl.job_education, 
            jl.id, 
            cm.name,  
            jl.gender, 
            jl.salary ,
            jl.update_at,
            jl.experience
        FROM joblist jl
        JOIN country_list cm ON jl.id = cm.id
        WHERE jl.id = :job_id
    ");

    $stmt->bindParam(':job_id', $job_id, PDO::PARAM_INT);

    $stmt->execute();

    $job = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($job) {
        echo json_encode(["success" => true, "job" => $job]);
    } else {
        echo json_encode(["success" => false, "message" => "Job not found"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid job ID"]);
}
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
