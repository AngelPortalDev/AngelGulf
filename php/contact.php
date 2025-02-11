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
if (isset($formData['name'], $formData['email'], $formData['message'])) {
    $name = $formData['name'];
    $email = $formData['email'];
    $phone = $formData['phone'];
    $message = $formData['message'];
   
  

 
 $stmt = $conn->prepare("INSERT INTO contact (name, email, message, phone) 
                            VALUES (:name, :email, :message, :phone)");

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':message', $message);
    $stmt->bindParam(':phone', $phone);


    if ($stmt->execute()) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'info@angelgulfjobs.com';
            $mail->Password = 'fwabkwhzkmoktjsy';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('info@angelgulfjobs.com', 'Angel Gulf Jobs');
            // $mail->addAddress('prince@yopmail.com');

         

            $mail->isHTML(true);
            $mail->Subject = "New contact form " . $name;
            $body = "<p>You have received a new job application. Here are the details:</p>";
            $body .= "<p><strong>Name:</strong> $name</p>";
            $body .= "<p><strong>Email:</strong> $email</p>";
            $body .= "<p><strong>Mobile No:</strong> $phone</p>";
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
