
    // Funcionalidad para cambiar preferencias
    document.querySelectorAll('.tarjeta-preferencia').forEach(card => {
      card.addEventListener('click', function() {
        this.classList.toggle('activa');
      });
    });
    
    // Funcionalidad para cambiar avatar
    document.querySelector('.cambiar-avatar').addEventListener('click', function() {
      alert('Funcionalidad para cambiar avatar en desarrollo');
    });
    
    // Funcionalidad para guardar cambios
    document.querySelector('.btn-guardar-perfil').addEventListener('click', function() {
      alert('Cambios guardados correctamente');
    });
