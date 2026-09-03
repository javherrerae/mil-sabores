document.addEventListener('DOMContentLoaded', function() {
    
    const formularioLogin = document.getElementById('formLogin');
    const mensajeLogin = document.getElementById('mensajeLogin');

    formularioLogin.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const email = document.getElementById('emailLogin').value.trim();
        const password = document.getElementById('passwordLogin').value;

        mensajeLogin.className = '';
        mensajeLogin.innerHTML = '';

        if (email === '' || password === '') {
            mostrarMensaje('error', 'Por favor, ingresa tu correo y contraseña.');
            return;
        }

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoCorreo.test(email)) {
            mostrarMensaje('error', 'El formato del correo electrónico no es válido.');
            return;
        }

        if (password.length < 6) {
            mostrarMensaje('error', 'La contraseña ingresada es demasiado corta.');
            return;
        }

        mostrarMensaje('exito', '¡Inicio de sesión exitoso! Redirigiendo a tu perfil...');
        
        setTimeout(() => {
            window.location.href = "perfil.html";
        }, 2000);
    });

    function mostrarMensaje(tipo, textoHTML) {
        mensajeLogin.innerHTML = textoHTML;
        if (tipo === 'error') {
            mensajeLogin.className = 'mensaje-error';
        } else if (tipo === 'exito') {
            mensajeLogin.className = 'mensaje-exito';
        }
    }
});