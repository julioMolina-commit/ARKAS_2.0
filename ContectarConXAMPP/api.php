<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "arkas";

$conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

if (!$conn) {
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

// ---------------------------------------------------------^^^^^^^^---------------------------------- This is the part that makes the connection
// --------------------------------------------------------vvvvvvv------------------------------------ These are the queries

// Extract products
$result = mysqli_query($conn, "SELECT product.name, product.description, product.price FROM product"); // We take only the user side data from the table

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