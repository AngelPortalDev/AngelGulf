<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600");
    exit();
}

include 'conn.php';  // Include database connection
require_once('PHPMailer/src/PHPMailer.php');
require_once('PHPMailer/src/SMTP.php');
require_once('PHPMailer/src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$formData = $_POST;

// Check if required fields are set
if (isset($formData['username'], $formData['email'], $formData['message'], $formData['company'], $formData['phone'], $formData['country'], $formData['city'])) {
    $name = $formData['username']; 
    $email = $formData['email'];
    $phone = $formData['phone'];
    $company = $formData['company'];
    $country = $formData['country'];
    $city = $formData['city']; 
    $message = $formData['message'];

    // Insert data into the grievance table
    $stmt = $conn->prepare("INSERT INTO grievances (name, email, phone, company, country, city, message) 
                            VALUES (:name, :email, :phone, :company, :country, :city, :message)");

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':company', $company);
    $stmt->bindParam(':country', $country);
    $stmt->bindParam(':city', $city);
    $stmt->bindParam(':message', $message);

    // If data is inserted successfully, send email
    if ($stmt->execute()) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'ashish@angel-portal.com';  // Your email address
            $mail->Password = 'ovpxdeioephlelas';  // Your email password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('ashish@angel-portal.com', 'Grievance System');
            $mail->addAddress('ashish@angel-portal.com');  // Admin email address

            // Email content
            $mail->isHTML(true);
            $mail->Subject = "New Grievance Form Submission from $name";
            $body = "<p>You have received a new grievance. Here are the details:</p>";
            $body .= "<p><strong>Name:</strong> $name</p>";
            $body .= "<p><strong>Email:</strong> $email</p>";
            $body .= "<p><strong>Phone:</strong> $phone</p>";
            $body .= "<p><strong>Company:</strong> $company</p>";
            $body .= "<p><strong>Country:</strong> $country</p>";
            $body .= "<p><strong>City:</strong> $city</p>";
            $body .= "<p><strong>Message:</strong> $message</p>";

            $mail->Body = $body;

            // Send the email
            if ($mail->send()) {
                echo json_encode(["success" => true, "message" => "Grievance form submitted successfully."]);
            }
        } catch (Exception $e) {
            echo json_encode(["success" => false, "message" => "Error sending email. Please try again later."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to submit grievance form. Please try again later."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
}

?>
