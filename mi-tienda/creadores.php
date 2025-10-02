
<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}
?>
<div class="creadores">
    <h1>Creadores</h1>
    <p>Conoce a los creadores de contenido de la comunidad ARKAS.</p>
    <ul>
        <li>🎬 Creador 1 - Videos documentales</li>
        <li>📝 Creador 2 - Blogs y artículos</li>
        <li>🎮 Creador 3 - Gameplays y directos</li>
        <li>📚 Creador 4 - Novelas y cuentos</li>
    </ul>
</div>
