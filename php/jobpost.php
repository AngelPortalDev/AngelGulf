<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600");
    exit();
}
// if (!isset($_SESSION['admin'])) {
//     echo json_encode(["success" => false, "message" => "User not logged in"]);
//     exit();
// }
include 'conn.php';

$formData = $_POST;
$filesData = $_FILES;





if (isset($formData['job_title']) && isset($formData['job_description']) && isset($formData['skill_keyword']) && isset($formData['location_hiring'])  && isset($formData['job_education']) && isset($formData['salary']) && isset($formData['country_id']) && isset($formData['company_name'])  && isset($formData['experience'])) {
    $job_title = $formData['job_title'];
    $job_description = $formData['job_description'];
    $skill_keyword = $formData['skill_keyword'];
    $location_hiring = $formData['location_hiring'];
    // $no_of_openings = $formData['no_of_openings'];
    // $currency_type = $formData['currency_type'];
    $job_education = $formData['job_education'];
    $experience = $formData['experience'];
    // $gender = $formData['gender'];
    $salary = $formData['salary'];
    $company_name = $formData['company_name'];
    $experience = $formData['experience'];
    $country_id = $formData['country_id'];
    $job_id = isset($formData['job_id']) ? $formData['job_id'] : null;

    $is_deleted = isset($formData['is_deleted']) ? $formData['is_deleted'] : 'No';

    $company_logo = null;
    

    if (isset($_FILES['company_logo']) && $_FILES['company_logo']['error'] == 0) {
        $file = $_FILES['company_logo'];
        $originalFileName = basename($file['name']);
        $fileExtension = pathinfo($originalFileName, PATHINFO_EXTENSION);

        $upload_dir = "uploads/company_logo/";

        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }

        $newFileName = uniqid() . "." . $fileExtension;
        $filePath = $upload_dir . $newFileName;

        if (!move_uploaded_file($file['tmp_name'], $filePath)) {
            echo json_encode(["success" => false, "message" => "Failed to upload company logo"]);
            exit();
        }

        $company_logo = $newFileName;
    }

    if (!empty($job_title) && !empty($job_description) && !empty($skill_keyword) && !empty($location_hiring) && !empty($company_name) && !empty($job_education) && !empty($salary)) {

        if ($job_id) {
       
            $stmt = $conn->prepare("UPDATE joblist 
                                    SET job_title = :job_title, job_description = :job_description, skill_keyword = :skill_keyword, 
                                        location_hiring = :location_hiring, 
                                        job_education = :job_education, salary = :salary, experience = :experience,company_name = :company_name, company_logo = :company_logo ,country_id = :country_id
                                    WHERE id = :job_id");

            $stmt->bindParam(':job_id', $job_id);
           
        } else {
            $stmt = $conn->prepare("INSERT INTO joblist (job_title, job_description, skill_keyword, location_hiring, job_education, salary, company_logo, company_name,experience,country_id) 
                                    VALUES (:job_title, :job_description, :skill_keyword, :location_hiring, :job_education, :salary, :company_logo,:company_name,:experience,:country_id)");
        }

        $stmt->bindParam(':job_title', $job_title);
        $stmt->bindParam(':job_description', $job_description);
        $stmt->bindParam(':skill_keyword', $skill_keyword);
        $stmt->bindParam(':location_hiring', $location_hiring);
        // $stmt->bindParam(':no_of_openings', $no_of_openings);
        // $stmt->bindParam(':currency_type', $currency_type);
        $stmt->bindParam(':job_education', $job_education);
        // $stmt->bindParam(':gender', $gender);
        $stmt->bindParam(':salary', $salary);
        $stmt->bindParam(':company_logo', $company_logo);
        $stmt->bindParam(':company_name', $company_name);
        $stmt->bindParam(':experience', $experience);
        $stmt->bindParam(':country_id', $country_id);

       
        if ($stmt->execute()) {
          
            if ($job_id) {
                echo json_encode(["success" => true, "message" => "Job listing updated successfully"]);
            } else {
                echo json_encode(["success" => true, "message" => "Job listing added successfully"]);
            }
        } else {
          
            echo json_encode(["success" => false, "message" => "Failed to save job listing"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "All fields are required"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid data format or missing fields"]);
}
