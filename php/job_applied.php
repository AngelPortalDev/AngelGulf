<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600");
    exit();
}

include 'conn.php';
require_once('PHPMailer/src/PHPMailer.php');
require_once('PHPMailer/src/SMTP.php');
require_once('PHPMailer/src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$formData = $_POST;
$filesData = $_FILES;
// print_r($formData);
// exit();
if (isset($formData['name'], $formData['email'])) {
    $name = $formData['name'];
    $email = $formData['email'];
    $mobile = $formData['mobile'];
    $country_code = $formData['country_code'];
    // $message = $formData['message'];
    // $job_id = $formData['job_id'];
    $job_id = $formData['job_id'] ?? "0";
    // $job_id = '1';  

    if ($job_id !== "0") {
        $stmt = $conn->prepare("SELECT id FROM joblist WHERE id = :job_id");
        $stmt->bindParam(':job_id', $job_id);
        $stmt->execute();
    
        if ($stmt->rowCount() == 0) {
            echo json_encode(["success" => false, "message" => "Job ID does not exist"]);
            exit();
        }
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
    }else{
        $result = ['job_title' => 'General Submission'];
    }
 

    $upload_resume = null;
    $resume_path = null; 

    if (isset($_FILES['resume']) && $_FILES['resume']['error'] == 0) {
        $file = $_FILES['resume'];
        $originalFileName = basename($file['name']);
        $fileExtension = pathinfo($originalFileName, PATHINFO_EXTENSION);

        $upload_dir = "uploads/resume/";
        
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }

        $newFileName = uniqid() . "." . $fileExtension;
        $resume_path = $upload_dir . $newFileName;

        if (move_uploaded_file($file['tmp_name'], $resume_path)) {
            $upload_resume = $resume_path;
        } else {
            echo json_encode(["success" => false, "message" => "Failed to upload resume"]);
            exit();
        }
    }

    if ($job_id !== "0") {
    $jobdata = $conn->prepare("SELECT id, job_title FROM joblist WHERE id = $job_id");
   
    $jobdata->execute();
    $result = $jobdata->fetch(PDO::FETCH_ASSOC);
        $title=$result['job_title'];
     }else {
        $title="Genral Submission";
    }
  
    $stmt = $conn->prepare("SELECT id FROM job_applications WHERE email = :email AND job_id = :job_id");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':job_id', $job_id);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        echo json_encode(["success" => false, "message" => "You have already applied for this job"]);
        exit();
    }

    $stmt = $conn->prepare("INSERT INTO job_applications (name, email, country_code, mobile, job_id, upload_resume) 
                            VALUES (:name, :email, :country_code, :mobile, :job_id, :resume_path)");

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':mobile', $mobile);
    $stmt->bindParam(':country_code', $country_code);
    // $stmt->bindParam(':message', $message);
    $stmt->bindParam(':job_id', $job_id, PDO::PARAM_NULL);
    $stmt->bindParam(':resume_path', $newFileName);

    if ($stmt->execute()) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'ashish@angel-portal.com';
            $mail->Password = 'ovpxdeioephlelas';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('ashish@angel-portal.com', 'Angel Gulf');
            $mail->addAddress('ashish@angel-portal.com');

            if ($upload_resume) {
                $mail->addAttachment($upload_resume,$newFileName);
            }

            $mail->isHTML(true);
            $mail->Subject = "New Job Application from $name for: " . $title;
            $body = "<p>You have received a new job application. Here are the details:</p>";
            $body .= "<p><strong>Name:</strong> $name</p>";
            $body .= "<p><strong>Email:</strong> $email</p>";
            $body .= "<p><strong>Mobile:</strong>$country_code $mobile</p>";
            // $body .= "<p><strong>Message:</strong> $message</p>";
            $body .= "<p><strong>Job Title:</strong>". $title."</p>";

            $mail->Body = $body;

            if ($mail->send()) {
                echo json_encode(["success" => true, "message" => "Application submitted successfully, file saved, and email sent"]);
            } else {
                echo json_encode(["success" => false, "message" => "Application submitted and file saved, but failed to send email"]);
            }
        } catch (Exception $e) {
            echo json_encode(["success" => false, "message" => "Mailer Error: " . $mail->ErrorInfo]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to submit the application"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
}

?>