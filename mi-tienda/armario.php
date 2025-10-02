
<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}
?>
<div class="armario">
    <h1>Tu Armario</h1>
    <p>Aquí puedes ver, organizar y gestionar tus artículos en ARKAS.</p>

    <?php
    // Ejemplo: array simulado de productos (esto luego vendrá de la BD)
    $productos = [
        ["titulo" => "Camiseta Roja", "dueño" => $_SESSION["usuario_nombre"], "precio" => 25, "fecha" => "2025-09-01", "imagen" => "images/CamisetaRoja.png"],
        ["titulo" => "Camiseta Blanca", "dueño" => $_SESSION["usuario_nombre"], "precio" => 15, "fecha" => "2025-09-10", "imagen" => "images/CamisetaBlanca.jpg"],
        ["titulo" => "Camiseta Blanca 2", "dueño" => $_SESSION["usuario_nombre"], "precio" => 15, "fecha" => "2025-09-10", "imagen" => "images/CamisetaBlanca2.jpg"],
        ["titulo" => "Sudadera Negra", "dueño" => $_SESSION["usuario_nombre"], "precio" => 40, "fecha" => "2025-09-15", "imagen" => "images/SudaderaNegra.png"],
        ["titulo" => "Sudadera Roja", "dueño" => $_SESSION["usuario_nombre"], "precio" => 40, "fecha" => "2025-09-15", "imagen" => "images/SudaderaRoja.png"],
        ["titulo" => "Sudadera Blanca", "dueño" => $_SESSION["usuario_nombre"], "precio" => 40, "fecha" => "2025-09-15", "imagen" => "images/SudaderaBlanca.png"],
        ["titulo" => "Gorra Roja", "dueño" => $_SESSION["usuario_nombre"], "precio" => 15, "fecha" => "2025-09-10", "imagen" => "images/GorraRoja.jpg"],
        ["titulo" => "Entradas", "dueño" => $_SESSION["usuario_nombre"], "precio" => 15, "fecha" => "2025-09-10", "imagen" => "images/Entradas.jpg"],
        ["titulo" => "Póster Edición Limitada", "dueño" => $_SESSION["usuario_nombre"], "precio" => 15, "fecha" => "2025-09-10", "imagen" => "images/PosterLimitado.png"],
    ];
    ?>

    <?php if (empty($productos)): ?>
        <div class="armario-mensaje">
            <p>No tienes productos en tu armario todavía.</p>
        </div>
    <?php else: ?>
        <div class="productos-grid">
            <?php foreach ($productos as $p): ?>
                <div class="producto">
                    <img src="<?= $p["imagen"] ?>" alt="<?= htmlspecialchars($p["titulo"]) ?>">
                    <h3><?= htmlspecialchars($p["titulo"]) ?></h3>
                    <p><strong>Dueño:</strong> <?= htmlspecialchars($p["dueño"]) ?></p>
                    <p><strong>Fecha:</strong> <?= $p["fecha"] ?></p>
                    <p><strong>Precio:</strong> <?= $p["precio"] ?> €</p>
                    <button>❤️ Favoritos</button>
                    <button>🛒 Añadir</button>
                    <button>🙈 Ocultar</button>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>

    
</div>