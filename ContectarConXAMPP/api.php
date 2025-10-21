<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$db_server = "192.168.101.80";
$db_user = "root";
$db_pass = "";
$db_name = "testing";

$conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

if (!$conn) {
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

// Direct query to productos table
$result = mysqli_query($conn, "SELECT * FROM productos");

if ($result === false) {
    // If query fails, show the error
    echo json_encode([
        "error" => "Query failed", 
        "mysql_error" => mysqli_error($conn),
        "table" => "productos"
    ]);
} else {
    $products = [];
    
    while ($row = mysqli_fetch_assoc($result)) {
        $products[] = $row;
    }
    
    echo json_encode([
        "success" => true,
        "count" => count($products),
        "data" => $products
    ]);
}

mysqli_close($conn);
?>