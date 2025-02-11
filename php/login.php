<<<<<<< HEAD
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600"); 
    exit(); 
}

session_start();  // Ensure session is started only once

include 'conn.php'; 

// Check if the data was sent properly from React
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data contains email and password
if (isset($data['email']) && isset($data['password'])) {
    $email = $data['email'];
    $password = $data['password'];
  
  
    if (!empty($email) && !empty($password)) {
       
        $stmt = $conn->prepare("SELECT * FROM admin_user WHERE UserName = :email");
      
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
      
        if ($user && password_verify($password, $user['Password'])) {
           
            $_SESSION['admin'] = $user['id']; 
            echo json_encode(["success" => true, "token" => session_id()]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid Credentials"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Email and password are required"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid data format or missing fields"]);
}
=======
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Max-Age: 3600"); 
    exit(); 
}

session_start();  // Ensure session is started only once

include 'conn.php'; 

// Check if the data was sent properly from React
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data contains email and password
if (isset($data['email']) && isset($data['password'])) {
    $email = $data['email'];
    $password = $data['password'];
  
  
    if (!empty($email) && !empty($password)) {
       
        $stmt = $conn->prepare("SELECT * FROM admin_user WHERE UserName = :email");
      
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
      
        if ($user && password_verify($password, $user['Password'])) {
           
            $_SESSION['admin'] = $user['id']; 
            echo json_encode(["success" => true, "token" => session_id()]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid Credentials"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Email and password are required"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid data format or missing fields"]);
}
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
?>