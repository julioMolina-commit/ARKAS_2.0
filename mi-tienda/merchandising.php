<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}
?>

<div class="merchandising">
    <h1>Merchandising</h1>
    <p>Explora y crea tu propio merchandising.</p>

    <div class="productos-grid">
        <?php for ($i = 1; $i <= 8; $i++): ?>
            <div class="producto">
                <img src="images/CamisetaBlanca2.jpg" alt="Producto <?= $i ?>">
                <h3>Producto <?= $i ?></h3>
                <p><strong>Dueño:</strong> ARKAS</p>
                <p><strong>Fecha:</strong> <?= date("Y-m-d") ?></p>
                <p><strong>Precio:</strong> <?= 20 + $i ?> €</p>
                <button>❤️ Favoritos</button>
                <button>🛒 Añadir</button>
            </div>
        <?php endfor; ?>
    </div>
</div>
<div class="formulario-armario">
        <h2>Añadir nuevo producto</h2>
        <form method="POST" action="armario_add.php" enctype="multipart/form-data">
            <input type="text" name="titulo" placeholder="Título del producto" required>
            <input type="file" name="imagen" required>
            <input type="date" name="fecha" required>
            <input type="number" name="precio" placeholder="Precio (€)" required>
            <button type="submit">Añadir</button>
        </form>
    </div>