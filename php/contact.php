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

// print_r($formData);
// exit();
if (isset($formData['name'], $formData['email'], $formData['message'], $formData['enquiry_type'])) {
    $name = $formData['name'];
    $email = $formData['email'];
    $phone = $formData['phone'];
    $message = $formData['message'];
    $enquiry_type = $formData['enquiry_type'];
   
  

 
 $stmt = $conn->prepare("INSERT INTO contact (name, email, message, phone,enquiry_type) 
                            VALUES (:name, :email, :message, :phone, :enquiry_type)");

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':message', $message);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam('enquiry_type',$enquiry_type);


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

            $mail->setFrom('ashish@angel-portal.com', 'Angel Gulf Jobs');
            $mail->addAddress('ashish@yopmail.com');

         

            $mail->isHTML(true);
            $mail->Subject = "New contact form " . $name;
            $body = "<p>You have received a new inquiry:</p>";
            $body .= "<p><strong>Name:</strong> $name</p>";
            $body .= "<p><strong>Email:</strong> $email</p>";
            $body .= "<p><strong>Mobile No:</strong> $phone</p>";
            $body .= "<p><strong>Enquiry Type:</strong> $enquiry_type</p>";
            $body .= "<p><strong>Message:</strong> $message</p>";
            // $body .= "<p><strong>Job ID:</strong> $job_id</p>";

            $mail->Body = $body;

            if ($mail->send()) {
                echo json_encode(["success" => true, "message" => "Contact Form Submit"]);
            } 
        } catch (Exception $e) {
            echo json_encode(["success" => false, "message" => "Something Went Worng"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Contact Form Submit"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
}

?>
