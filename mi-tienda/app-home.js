
// Alternar login/registro
document.getElementById("showRegister").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("loginFormContainer").classList.add("hidden");
    document.getElementById("registerFormContainer").classList.remove("hidden");
});

document.getElementById("showLogin").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("registerFormContainer").classList.add("hidden");
    document.getElementById("loginFormContainer").classList.remove("hidden");
});

// Registro
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("register.php", {
        method: "POST",
        body: formData
    });

    const result = await response.text();
    alert(result);

    if (result.includes("Registro exitoso")) {
        document.getElementById("registerFormContainer").classList.add("hidden");
        document.getElementById("loginFormContainer").classList.remove("hidden");
    }
});

// Login con PHP y redirección a home.php
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("login.php", {
        method: "POST",
        body: formData
    });

    const result = await response.text();

    if (result.trim() === "success") {
        window.location.href = "home.php";
    } else {
        alert(result);
    }
});

// ===============================
// Contenido dinámico en home.php
// ===============================
const content = document.getElementById("content");
const sections = {
    inicio: `
        <h1>Inicio</h1>
        <p>Bienvenido a tu tienda online 🚀</p>
        <div class="productos-grid">
            ${Array.from({ length: 40 }).map((_, i) => `
                <div class="producto">
                    <img src="https://via.placeholder.com/150" alt="Producto ${i + 1}">
                    <h3>Producto ${i + 1}</h3>
                    <p><strong>Dueño:</strong> Usuario${i + 1}</p>
                    <p><strong>Fecha:</strong> 2025-09-24</p>
                    <p><strong>Precio:</strong> ${(10 + i)}€</p>
                    <button>❤️ Favoritos</button>
                    <button>🛒 Añadir</button>
                </div>
            `).join("")}
        </div>
    `,
    armario: `
        <h1>Armario</h1>
        <p>Aquí aparecerán tus artículos.</p>
        <div class="armario-mensaje">
            <p>No tienes productos en tu armario todavía.</p>
        </div>
        <div class="formulario-armario">
            <h2>Añadir nuevo producto</h2>
            <form>
                <input type="text" placeholder="Título del producto" required>
                <input type="text" placeholder="Dueño" required>
                <input type="file" required>
                <input type="date" required>
                <input type="number" placeholder="Precio (€)" required>
                <button type="submit">Añadir</button>
            </form>
        </div>
    `,
    artistas: "<h1>Artistas</h1><p>Descubre a los artistas destacados.</p>",
    creadores: "<h1>Creadores</h1><p>Conoce a los creadores de contenido.</p>",
    perfil: "<h1>Perfil y Cuenta</h1><p>Administra tu información personal.</p>",
    planes: "<h1>Planes</h1><p>Elige un plan que se adapte a ti.</p>"
};

// Manejo de navegación lateral
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const section = e.target.getAttribute("data-section");
        content.innerHTML = sections[section] || "<h1>Error</h1><p>Sección no encontrada.</p>";
    });
});
