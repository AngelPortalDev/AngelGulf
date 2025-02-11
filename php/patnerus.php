<<<<<<< HEAD
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
if (isset($formData['name'], $formData['email'])) {
    $name = $formData['name'];
    $email = $formData['email'];
    $company_name = $formData['company_name'];
    $mobile_no = $formData['mobile_no'];
    $designation = $formData['designation'];   
    $country_id = $formData['country_id'];
    $city = $formData['city'];
    $msg = $formData['msg'];
    
   

 
 $stmt = $conn->prepare("INSERT INTO  patner_us (name, email, company_name,mobile_no,designation,country_id,city,msg) 
                            VALUES (:name, :email ,:company_name,:mobile_no,:designation,:country_id,:city,:msg)");

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':company_name', $company_name);   
    $stmt->bindParam(':mobile_no', $mobile_no);
    $stmt->bindParam(':designation', $designation);
    $stmt->bindParam(':country_id', $country_id);
    $stmt->bindParam(':city', $city);
    $stmt->bindParam(':msg', $msg);



    if ($stmt->execute()) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'prince@angel-portal.com';
            $mail->Password = 'khsuzotfghhoxluo';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('no-reply@angel-portal.com', 'Angel Portal');
            $mail->addAddress('prince@yopmail.com');

         

            $mail->isHTML(true);
            $mail->Subject = "New contact form " . $name;
            $body = "<p>You have received a new job application. Here are the details:</p>";
            $body .= "<p><strong>Name:</strong> $name</p>";
            $body .= "<p><strong>Email:</strong> $email</p>";
            $body .= "<p><strong>Company Name:</strong> $company_name</p>";
            $body .= "<p><strong>Mobile No:</strong> $mobile_no</p>";
            $body .= "<p><strong>Designation:</strong> $designation</p>";
          
            $body .= "<p><strong>City:</strong> $city</p>";
            $body .= "<p><strong>Message:</strong> $msg</p>";
            // $body .= "<p><strong>Job ID:</strong> $job_id</p>";

            $mail->Body = $body;

            if ($mail->send()) {
                echo json_encode(["success" => true, "message" => "Partner us Form Submit"]);
            } 
        } catch (Exception $e) {
            echo json_encode(["success" => false, "message" => "Something Went Worng"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Partner us Form Submit"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
}

?>
=======
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
if (isset($formData['name'], $formData['email'])) {
    $name = $formData['name'];
    $email = $formData['email'];
    $company_name = $formData['company_name'];
    $mobile_no = $formData['mobile_no'];
    $designation = $formData['designation'];   
    $country_id = $formData['country_id'];
    $city = $formData['city'];
    $msg = $formData['msg'];
    
   

 
 $stmt = $conn->prepare("INSERT INTO  patner_us (name, email, company_name,mobile_no,designation,country_id,city,msg) 
                            VALUES (:name, :email ,:company_name,:mobile_no,:designation,:country_id,:city,:msg)");

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':company_name', $company_name);   
    $stmt->bindParam(':mobile_no', $mobile_no);
    $stmt->bindParam(':designation', $designation);
    $stmt->bindParam(':country_id', $country_id);
    $stmt->bindParam(':city', $city);
    $stmt->bindParam(':msg', $msg);



    if ($stmt->execute()) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'prince@angel-portal.com';
            $mail->Password = 'khsuzotfghhoxluo';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('no-reply@angel-portal.com', 'Angel Portal');
            $mail->addAddress('prince@yopmail.com');

         

            $mail->isHTML(true);
            $mail->Subject = "New contact form " . $name;
            $body = "<p>You have received a new job application. Here are the details:</p>";
            $body .= "<p><strong>Name:</strong> $name</p>";
            $body .= "<p><strong>Email:</strong> $email</p>";
            $body .= "<p><strong>Company Name:</strong> $company_name</p>";
            $body .= "<p><strong>Mobile No:</strong> $mobile_no</p>";
            $body .= "<p><strong>Designation:</strong> $designation</p>";
          
            $body .= "<p><strong>City:</strong> $city</p>";
            $body .= "<p><strong>Message:</strong> $msg</p>";
            // $body .= "<p><strong>Job ID:</strong> $job_id</p>";

            $mail->Body = $body;

            if ($mail->send()) {
                echo json_encode(["success" => true, "message" => "Partner us Form Submit"]);
            } 
        } catch (Exception $e) {
            echo json_encode(["success" => false, "message" => "Something Went Worng"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Partner us Form Submit"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
}

?>
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
