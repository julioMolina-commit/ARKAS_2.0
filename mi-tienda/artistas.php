
<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}
?>
<div class="artistas">
    <h1>Artistas</h1>
    <p>Descubre a los artistas destacados de ARKAS.</p>
    <ul>
        <li>🎤 Artista 1 - Música urbana</li>
        <li>🎨 Artista 2 - Pintura digital</li>
        <li>🎸 Artista 3 - Rock alternativo</li>
        <li>📷 Artista 4 - Fotografía conceptual</li>
    </ul>
</div>

