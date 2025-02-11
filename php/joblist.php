<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600");
    exit();
}


include 'conn.php';
// print_r("Connecting to");
// exit();

$country_id = isset($_GET['country_id']) ? $_GET['country_id'] : null;

$stmt = $conn->prepare("
    SELECT jl.id, jl.job_title, jl.job_description, jl.skill_keyword,jl.update_at, jl.location_hiring, jl.no_of_openings, jl.currency_type, jl.job_education,jl.company_name,jl.company_logo, jl.is_deleted, jl.country_id, cm.name,  jl.gender, jl.salary FROM joblist jl LEFT JOIN country_list cm ON jl.id = cm.id ");

    if ($country_id) {
        $stmt = $conn->prepare(" SELECT jl.id, jl.job_title,jl.company_logo,jl.company_name, jl.job_description, jl.skill_keyword, jl.location_hiring, 
        jl.no_of_openings, jl.currency_type, jl.job_education, jl.country_id, 
        cm.country_name, jl.gender, jl.salary 
 FROM joblist jl 
 LEFT JOIN country_list cm ON jl.country_id = cm.id WHERE jl.country_id = :country_id
");
}

$stmt->execute();

$jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($jobs) {
    echo json_encode(["success" => true, "jobs" => $jobs]);
} else {
    echo json_encode(["success" => false, "message" => "No jobs found"]);
}
