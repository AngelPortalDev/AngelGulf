<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600");
    exit();
}

include 'conn.php'; // Database connection
require_once('PHPMailer/src/PHPMailer.php');
require_once('PHPMailer/src/SMTP.php');
require_once('PHPMailer/src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$formData = $_POST;
$filesData = $_FILES;

if (isset($formData['full_name'], $formData['current_location'], $formData['country_code'], $formData['whatsup_no'], $formData['category'], $formData['position'])) {
    $full_name = $formData['full_name'];
    $category = $formData['category'];
    $position = $formData['position'];
    $whatsup_no = $formData['whatsup_no'];
    $country_code = $formData['country_code'];
    $current_location = $formData['current_location'];
    $email = isset($formData['email']) ? $formData['email'] : '';
    $gulf_exp = isset($formData['gulf_exp']) ? $formData['gulf_exp'] : '';
    $india_exp = isset($formData['india_exp']) ? $formData['india_exp'] : '';
    $terms = isset($formData['terms']) ? $formData['terms'] : 0;

    // Check if the user is already registered
    $stmt = $conn->prepare("SELECT id FROM registration WHERE email = :email OR whatsup_no = :whatsup_no");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':whatsup_no', $whatsup_no);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // If a user with the same email or WhatsApp number already exists, return an error
        echo json_encode(["success" => false, "message" => "You have already registered with this email or WhatsApp number."]);
        exit();
    }

    // Handle resume file upload
    $resume_path = null;  // Initialize resume path variable

    if (isset($_FILES['resume']) && $_FILES['resume']['error'] == 0) {
        $file = $_FILES['resume'];
        $originalFileName = basename($file['name']);
        $fileExtension = pathinfo($originalFileName, PATHINFO_EXTENSION);

        $upload_dir = "uploads/resume/";

        // Create upload directory if it doesn't exist
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }

        // Generate a unique file name
        $newFileName = uniqid() . "." . $fileExtension;
        $resume_path = $upload_dir . $newFileName;

        // Move the uploaded file to the directory
        if (move_uploaded_file($file['tmp_name'], $resume_path)) {
            // File is successfully uploaded and saved
        } else {
            echo json_encode(["success" => false, "message" => "Failed to upload resume"]);
            exit();
        }
    }

    // Insert data into the database
    $stmt = $conn->prepare("INSERT INTO registration (full_name, category, position, whatsup_no, country_code, current_location, email, gulf_exp, india_exp, resume,terms) 
                            VALUES (:full_name, :category, :position, :whatsup_no, :country_code, :current_location, :email, :gulf_exp, :india_exp, :resume, :terms)");

    $stmt->bindParam(':full_name', $full_name);
    $stmt->bindParam(':category', $category);
    $stmt->bindParam(':position', $position);
    $stmt->bindParam(':whatsup_no', $whatsup_no);
    $stmt->bindParam(':country_code', $country_code);
    $stmt->bindParam(':current_location', $current_location);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':gulf_exp', $gulf_exp);
    $stmt->bindParam(':india_exp', $india_exp);
    $stmt->bindParam(':resume', $resume_path);  // Save the file path in the database
    $stmt->bindParam(':terms', $terms, PDO::PARAM_BOOL); 

    if ($stmt->execute()) {
        // Send email notification
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'ashish@angel-portal.com';
            $mail->Password = 'ovpxdeioephlelas';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('ashish@angel-portal.com', 'Your Portal');
            $mail->addAddress('ashish@angel-portal.com'); // Admin email

            // Attach resume if uploaded
            if ($resume_path) {
                $mail->addAttachment($resume_path, $newFileName);  // Attach the resume to the email
            }

            $mail->isHTML(true);
            $mail->Subject = "New Registration: $full_name";
            $body = "<p>You have received a new registration. Here are the details:</p>";
            $body .= "<p><strong>Name:</strong> $full_name</p>";
            $body .= "<p><strong>Email:</strong> $email</p>";
            $body .= "<p><strong>WhatsApp Number:</strong> $country_code $whatsup_no</p>";
            $body .= "<p><strong>Category:</strong> $category</p>";
            $body .= "<p><strong>Position:</strong> $position</p>";
            $body .= "<p><strong>Current Location:</strong> $current_location</p>";
            $body .= "<p><strong>Gulf Experience:</strong> $gulf_exp</p>";
            $body .= "<p><strong>India Experience:</strong> $india_exp</p>";
            $body .= "<p><strong>Accepted Terms:</strong> " . ($terms ? 'Yes' : 'No') . "</p>";

            $mail->Body = $body;

            if ($mail->send()) {
                echo json_encode(["success" => true, "message" => "Registration successful!"]);
            }
        } catch (Exception $e) {
            echo json_encode(["success" => false, "message" => "Email could not be sent. Please try again."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to submit registration. Please try again."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Missing required fields."]);
}

?>
