document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
    // Si hay elementos adicionales que deben cambiar, puedes ajustar sus estilos aquí
    
    const formulario = document.getElementById('formulario');
    formulario.classList.toggle('dark-theme');
    const botonIngresar = document.getElementById('mostrarFormulario');
    botonIngresar.classList.toggle('dark-theme');
});

// Mostrar el formulario al hacer clic en el botón
document.getElementById('mostrarFormulario').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'block';
});

// Cerrar el formulario al hacer clic en el botón "Cerrar"
document.getElementById('cerrarFormulario').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'none';
});

// Agrega un evento para cerrar el formulario al hacer clic en el botón de cierre
document.getElementById('cerrarFormulario').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'none';
});

