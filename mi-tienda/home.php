<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Si no hay sesión, redirige al login
if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}

// Detectar qué sección cargar
$seccion = $_GET["seccion"] ?? "inicio"; 
$archivo = $seccion . ".php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Mi Tienda</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Barra superior -->
    <header class="topbar">
        <div class="logo">ARKAS</div>
        <input type="text" placeholder="Buscar productos...">
        <div class="actions">
            <button>🛒</button>
            <button>⚙️</button>
            <a href="logout.php" class="logout">Cerrar sesión</a>
        </div>
    </header>

    <!-- Barra lateral -->
    <nav class="sidebar">
        <ul>
            <li><a href="home.php?seccion=inicio">Inicio</a></li>
            <li><a href="home.php?seccion=artistas">Artistas</a></li>
            <li><a href="home.php?seccion=creadores">Creadores</a></li>
            <li><a href="home.php?seccion=estadisticas">Estadísticas</a></li>
            <li><a href="home.php?seccion=armario">Armario</a></li>
            <li><a href="home.php?seccion=merchandising">Merchandising</a></li>
            <li><a href="home.php?seccion=perfil">Perfil y Cuenta</a></li>
            <li><a href="home.php?seccion=planes">Planes</a></li>
        </ul>
    </nav>

    <!-- Contenido dinámico -->
    <main class="content" id="content">
        <?php
        if (file_exists($archivo)) {
            // Cada sección debe validar sesión también si se accede directo
            include $archivo;
        } else {
            echo "<h1>Error</h1><p>Sección no encontrada.</p>";
        }
        ?>
    </main>

</body>
</html>
