<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Verificar si el usuario está logueado
if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}
?>
<div class="inicio">
    <h1>Inicio</h1>
    <p>Bienvenido a ARKAS </p>

    <div class="productos-grid">
        <?php for ($i = 1; $i <= 40; $i++): ?>
            <div class="producto">
                <img src="images/CamisetaBlanca2.jpg" alt="Producto <?= $i ?>">
                <h3>Producto <?= $i ?></h3>
                <p><strong>Dueño:</strong> Usuario<?= $i ?></p>
                <p><strong>Fecha:</strong> <?= date("Y-m-d") ?></p>
                <p><strong>Precio:</strong> <?= 10 + $i ?> €</p>
                <button>❤️ Favoritos</button>
                <button>🛒 Añadir</button>
            </div>
        <?php endfor; ?>
    </div>
</div>
