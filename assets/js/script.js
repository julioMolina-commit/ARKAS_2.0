// Funcionalidades comunes para todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de búsqueda
    const barraBusqueda = document.querySelector('.barra-busqueda input');
    const btnBuscar = document.querySelector('.barra-busqueda button');
    
    if (barraBusqueda && btnBuscar) {
        btnBuscar.addEventListener('click', function() {
            const terminoBusqueda = barraBusqueda.value.trim();
            if (terminoBusqueda) {
                // Aquí iría la lógica de búsqueda
                console.log('Buscando:', terminoBusqueda);
                // Por ahora solo mostramos un alert
                alert(`Buscando: ${terminoBusqueda}`);
            }
        });
        
        // Permitir búsqueda con Enter
        barraBusqueda.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                btnBuscar.click();
            }
        });
    }
    
    // Funcionalidad de filtros (si existe)
    const btnFiltrar = document.querySelector('.btn-filtrar');
    const btnOrdenar = document.querySelector('.btn-ordenar');
    
    if (btnFiltrar) {
        btnFiltrar.addEventListener('click', function() {
            // Lógica para mostrar filtros
            console.log('Mostrar filtros');
        });
    }
    
    if (btnOrdenar) {
        btnOrdenar.addEventListener('click', function() {
            // Lógica para ordenar
            console.log('Ordenar elementos');
        });
    }
    
    // Funcionalidad de botones de compra/reserva
    document.querySelectorAll('.btn-evento').forEach(boton => {
        boton.addEventListener('click', function() {
            const prenda = this.closest('.tarjeta-evento').querySelector('h3').textContent;
            alert(`Has seleccionado: ${prenda}`);
        });
    });
});