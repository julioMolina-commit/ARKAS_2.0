
<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}
?>
<div class="planes">
    <h1>Planes</h1>
    <p>Elige un plan que se adapte a ti:</p>

    <div class="plan">
        <h2>Free</h2>
        <p>Acceso básico a la plataforma.</p>
        <button>Elegir</button>
    </div>

    <div class="plan">
        <h2>Premium</h2>
        <p>Publica más productos y accede a beneficios exclusivos.</p>
        <button>Elegir</button>
    </div>

    <div class="plan">
        <h2>Pro</h2>
        <p>Plan completo con todas las funcionalidades de ARKAS.</p>
        <button>Elegir</button>
    </div>
</div>