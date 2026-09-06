document.addEventListener('DOMContentLoaded', function() {
    
    const formPerfil = document.getElementById('formPerfil');
    const mensajeSistema = document.getElementById('mensajePerfil');

    formPerfil.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nombre = document.getElementById('nombrePerfil').value.trim();
        const email = document.getElementById('emailPerfil').value.trim();
        const telefono = document.getElementById('telefonoPerfil').value.trim();

        mensajeSistema.className = '';
        mensajeSistema.innerHTML = '';

        if (nombre === '' || email === '' || telefono === '') {
            mostrarMensaje('error', 'Por favor, completa todos tus datos personales.');
            return;
        }

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoCorreo.test(email)) {
            mostrarMensaje('error', 'El formato del correo electrónico no es válido.');
            return;
        }

        const formatoTelefono = /^[0-9]{8,11}$/;
        if (!formatoTelefono.test(telefono)) {
            mostrarMensaje('error', 'El teléfono debe contener solo números (entre 8 y 11 dígitos).');
            return;
        }

        mostrarMensaje('exito', '¡Tus datos han sido actualizados con éxito!');
        
        setTimeout(() => {
            mensajeSistema.className = 'mensaje-oculto';
        }, 4000);
    });

    function mostrarMensaje(tipo, textoHTML) {
        mensajeSistema.innerHTML = textoHTML;
        if (tipo === 'error') {
            mensajeSistema.className = 'mensaje-error';
            mensajeSistema.style.display = 'block';
        } else if (tipo === 'exito') {
            mensajeSistema.className = 'mensaje-exito';
            mensajeSistema.style.display = 'block';
        }
    }
});