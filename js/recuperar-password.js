document.addEventListener('DOMContentLoaded', function() {
    
    const formRecuperar = document.getElementById('formRecuperar');
    const mensajeRecuperar = document.getElementById('mensajeRecuperar');

    formRecuperar.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const email = document.getElementById('emailRecuperar').value.trim();

        mensajeRecuperar.className = '';
        mensajeRecuperar.innerHTML = '';

        if (email === '') {
            mostrarMensaje('error', 'Por favor, ingresa tu correo electrónico.');
            return;
        }

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoCorreo.test(email)) {
            mostrarMensaje('error', 'Por favor, ingresa un formato de correo válido.');
            return;
        }

        mostrarMensaje('exito', `Si el correo <strong>${email}</strong> está registrado, recibirás un enlace de recuperación en los próximos minutos.`);
        
        formRecuperar.reset();
    });

    function mostrarMensaje(tipo, textoHTML) {
        mensajeRecuperar.innerHTML = textoHTML;
        if (tipo === 'error') {
            mensajeRecuperar.className = 'mensaje-error';
            mensajeRecuperar.style.display = 'block';
        } else if (tipo === 'exito') {
            mensajeRecuperar.className = 'mensaje-exito';
            mensajeRecuperar.style.display = 'block';
        }
    }
});