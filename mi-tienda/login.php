<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
include "config.php";

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    $sql = "SELECT id, nombre, password FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        // Para depuración
        file_put_contents("debug.txt", "Hash en BD: " . $row["password"] . "\n", FILE_APPEND);
        file_put_contents("debug.txt", "Password enviada: " . $password . "\n", FILE_APPEND);
        if (password_verify($password, $row["password"])) {
        $_SESSION["usuario_id"] = $row["id"];
        $_SESSION["usuario_nombre"] = $row["nombre"];
        echo json_encode(["success" => true]);
        exit;
} else {
            file_put_contents("debug.txt", "NO COINCIDE\n", FILE_APPEND);
        }
    }
    echo json_encode(["success" => false, "message" => "Credenciales incorrectas"]);
    exit;
}
echo json_encode(["success" => false, "message" => "Método no permitido"]);
?>
