/* ===================================================
   app.js - Lógica principal de ARKAS
   =================================================== */

// Animación inicial del loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("auth").classList.remove("hidden");
        }, 300); // espera al fade-out
    }, 300); // loader dura 300ms
});

// Cambiar entre login y registro
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

// Simulación de login/registro
document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const resp = await fetch("login.php", {
        method: "POST",
        body: formData,
        credentials: "include" // <-- mantiene cookies/sesiones
    });

    const data = await resp.json();
    if (data.success) {
        // Redirige a la página protegida
        window.location.href = "home.php";
    } else {
        alert(data.message || "Login incorrecto");
    }
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    // aquí iría la lógica de registro real en PHP
    alert("Registro exitoso (simulado). Ahora inicia sesión.");
    document.getElementById("registerFormContainer").classList.add("hidden");
    document.getElementById("loginFormContainer").classList.remove("hidden");
});

// Navegación lateral con carga dinámica
const content = document.getElementById("content");

// Función para cargar cada sección desde PHP
async function loadSection(section) {
    const resp = await fetch(section + ".php", {
        credentials: "include" // Esto mantiene la sesión PHP
    });
    const html = await resp.text();
    document.getElementById("content").innerHTML = html;
}

// Detectar clicks en la barra lateral
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const section = e.target.getAttribute("data-section");
        loadSection(section);
    });
});
//tablas de estadisticas

function showTab(tabId) {
    // Ocultar todos
    document.querySelectorAll('.contenidoestadisticas').forEach(c => c.classList.remove('active'));
    // Mostrar el seleccionado
    document.getElementById(tabId).classList.add('active');
}

// Gráfico con datos desde PHP
const ctx = document.getElementById('ventasChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ventasLabels,
        datasets: [{
            label: "Ventas",
            data: ventasData,
            borderColor: "green",
            backgroundColor: "rgba(0,255,0,0.2)",
            tension: 0.3,
            fill: true
        }]
    }
});
