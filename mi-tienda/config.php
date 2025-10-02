<?php
$host = "127.0.0.1";   // Usa la IP para evitar problemas de resolución
$usuario = "root";     // Usuario por defecto en XAMPP
$password = "";        // Contraseña vacía por defecto en XAMPP
$bd = "tienda";        // Nombre de tu base de datos
$puerto = 3309;         // Puerto correcto según tu configuración

$conn = new mysqli($host, $usuario, $password, $bd, $puerto);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
