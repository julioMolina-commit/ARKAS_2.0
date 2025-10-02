<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION["usuario_id"])) {
    header("Location: index.php");
    exit;
}

// Datos simulados
$ventasTotales = 34;
$ventasMensuales = 6;
$saldo = 340.00;
$ingresosMensuales = 60.00;
$publicoTotal = 29;

$ventasPorMes = [
    "Ene" => 3,
    "Feb" => 5,
    "Mar" => 4,
    "Abr" => 7,
    "May" => 8,
    "Jun" => 10
];

$lugares = [
    "España" => ["Madrid" => 20, "Barcelona" => 6, "Valencia" => 3],
    "Italia" => ["Palermo" => 1]
];
?>
<!DOCTYPE html>
<html lang="es">
    <body>
    <head>
        <meta charset="UTF-8">
        <title>Estadísticas</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <style>
    .tablas {
        margin-bottom: 1em;
    }
    .contenidoestadisticas { display: none; }
    .contenidoestadisticas.active { display: block; }
        </style>
    </head>
    <h2>📊 ESTADÍSTICAS</h2>

    <!-- Botones -->
    <div class="tablas">
        <button onclick="showTab('ventas')">Ventas</button>
        <button onclick="showTab('saldo')">Saldo</button>
        <button onclick="showTab('publico')">Público</button>
    </div>

    <!-- Contenido Ventas -->
    <div id="ventas" class="contenidoestadisticas active">
        <canvas id="ventasChart"></canvas>
        <p>VENTAS TOTALES: <?= $ventasTotales ?></p>
        <p>VENTAS MENSUALES: <?= $ventasMensuales ?></p>
    </div>

    <!-- Contenido Saldo -->
    <div id="saldo" class="contenidoestadisticas">
        <p>SALDO: <?= number_format($saldo, 2) ?>€</p>
        <p>INGRESOS MENSUALES: <?= number_format($ingresosMensuales, 2) ?>€</p>
        <button>Mejorar Plan</button>
        <button>Información de Saldo</button>
        <button>Retirar Dinero</button>
        <button>Ingresar Dinero</button>
    </div>

    <!-- Contenido Público -->
    <div id="publico" class="contenidoestadisticas">
        <p>PERSONAS QUE HAN COMPRADO: <?= $publicoTotal ?></p>
        <p><b>LUGARES</b></p>
        <ul>
            <?php foreach($lugares as $pais => $ciudades): ?>
                <li><b><?= $pais ?></b> (<?= array_sum($ciudades) ?>)</li>
                <ul>
                    <?php foreach($ciudades as $ciudad => $num): ?>
                        <li><?= $ciudad ?> (<?= $num ?>)</li>
                    <?php endforeach; ?>
                </ul>
            <?php endforeach; ?>
        </ul>
    </div>

    <!-- Paso datos PHP a JS -->
    <script>
        const ventasLabels = <?= json_encode(array_keys($ventasPorMes)) ?>;
        const ventasData = <?= json_encode(array_values($ventasPorMes)) ?>;
    </script>
    <script src="app.js"></script>
</body>
</html>
