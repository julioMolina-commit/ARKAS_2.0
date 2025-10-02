
<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}


// Verificar si el usuario está logueado
if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}

include "config.php"; // conexión a la BD

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $titulo = trim($_POST["titulo"]);
    $precio = floatval($_POST["precio"]);
    $fecha = $_POST["fecha"];
    $usuario_id = $_SESSION["usuario_id"];

    // Manejo de imagen
    $imagen = null;
    if (isset($_FILES["images/CamisetaRoja.png"]) && $_FILES["images/CamisetaRoja.png"]["error"] === 0) {
        $nombreArchivo = time() . "_" . basename($_FILES["images/CamisetaRoja.png"]["name"]);
        $rutaDestino = "uploads/" . $nombreArchivo;

        // Crear carpeta si no existe
        if (!is_dir("uploads")) {
            mkdir("uploads", 0777, true);
        }

        if (move_uploaded_file($_FILES["images/CamisetaRoja.png"]["tmp_name"], $rutaDestino)) {
            $imagen = $rutaDestino;
        }
    }

    // Insertar en la base de datos
    $sql = "INSERT INTO productos (usuario_id, titulo, precio, fecha, imagen) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isdss", $usuario_id, $titulo, $precio, $fecha, $imagen);

    if ($stmt->execute()) {
        header("Location: home.php"); // vuelve al home (desde allí se puede entrar al armario)
        exit;
    } else {
        echo "Error al añadir producto: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>