<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ARKAS</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <!-- ======================================
         Pantalla de carga inicial
    ======================================= -->
    <div id="loader">
        <h1>A R K A S</h1>
    </div>

    <!-- ======================================
         Login / Registro
    ======================================= -->
    <div id="auth" class="auth-container">
        <div class="auth-box">

            <!-- Login -->
            <div id="loginFormContainer">
                <h2>Iniciar Sesión</h2>
                <form id="loginForm" method="POST">
                    <input type="email" name="email" placeholder="Correo electrónico" required>
                    <input type="password" name="password" placeholder="Contraseña" required>
                    <button type="submit">Entrar</button>
                </form>
                <p>¿No tienes cuenta? <a href="#" id="showRegister">Regístrate aquí</a></p>
            </div>

            <!-- Registro -->
            <div id="registerFormContainer" class="hidden">
                <h2>Crear Cuenta</h2>
                <form id="registerForm" method="POST">
                    <input type="text" name="nombre" placeholder="Nombre completo" required>
                    <input type="email" name="email" placeholder="Correo electrónico" required>
                    <input type="password" name="password" placeholder="Contraseña" required>
                    <button type="submit">Registrarse</button>
                </form>
                <p>¿Ya tienes cuenta? <a href="#" id="showLogin">Inicia sesión aquí</a></p>
            </div>

        </div>
    </div>

    <!-- ======================================
         Home principal
    ======================================= -->
    <div id="home" class="hidden">
        <!-- Barra superior -->
        <header class="topbar">
            <div class="logo"> ARKAS </div>
            <input type="text" placeholder="Buscar productos...">
            <div class="actions">
                <button>🛒</button>
                <button>⚙️</button>
            </div>
        </header>

        <!-- Barra lateral -->
        <nav class="sidebar">
            <ul>
                <li><a href="#" data-section="inicio">Inicio</a></li>
                <li><a href="#" data-section="armario">Armario</a></li>
                <li><a href="#" data-section="artistas">Artistas</a></li>
                <li><a href="#" data-section="creadores">Creadores</a></li>
                <li><a href="#" data-section="perfil">Perfil y Cuenta</a></li>
                <li><a href="#" data-section="planes">Planes</a></li>
            </ul>
        </nav>

        <!-- Contenido dinámico -->
        <main class="content" id="content">
            <h1>Bienvenido a ARKAS</h1>
            <p>Selecciona una sección desde el menú lateral.</p>
        </main>
    </div>

    <!-- Scripts -->
    <script src="app.js"></script>
</body>

</html>