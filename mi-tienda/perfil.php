
<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}
?>
<div class="perfil">
    <h1>Perfil y Cuenta</h1>
    <p>Aquí puedes administrar tu información personal.</p>

    <form class="perfil-form">
        <label>Nombre:</label>
        <input type="text" value="<?= htmlspecialchars($_SESSION["usuario_nombre"]) ?>" readonly>

        <label>Email:</label>
        <input type="email" value="usuario@ejemplo.com" readonly>

        <button>Editar perfil</button>
        <button>Cambiar contraseña</button>
    </form>
    <p>Aqui aparece como se ve nuestro perfil con los fondos, ediciones y de mas</p>
</div>

