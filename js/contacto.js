document.addEventListener('DOMContentLoaded', function() {
    
    const formContacto = document.getElementById('formContacto');
    const mensajeSistema = document.getElementById('mensajeSistemaContacto');

    formContacto.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nombre = document.getElementById('nombreContacto').value.trim();
        const email = document.getElementById('emailContacto').value.trim();
        const asunto = document.getElementById('asuntoContacto').value.trim();
        const mensaje = document.getElementById('mensajeContacto').value.trim();

        mensajeSistema.className = '';
        mensajeSistema.innerHTML = '';

        if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
            mostrarMensaje('error', 'Por favor, completa todos los campos obligatorios (*).');
            return;
        }

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoCorreo.test(email)) {
            mostrarMensaje('error', 'El formato del correo electrónico no es válido.');
            return;
        }

        if (mensaje.length < 15) {
            mostrarMensaje('error', 'Tu mensaje es muy corto. Por favor, detalla un poco más tu consulta.');
            return;
        }

        mostrarMensaje('exito', `¡Gracias por escribirnos, <strong>${nombre}</strong>! Hemos recibido tu mensaje y te responderemos pronto al correo ${email}.`);
        
        formContacto.reset();
    });

    function mostrarMensaje(tipo, textoHTML) {
        mensajeSistema.innerHTML = textoHTML;
        if (tipo === 'error') {
            mensajeSistema.className = 'mensaje-error';
        } else if (tipo === 'exito') {
            mensajeSistema.className = 'mensaje-exito';
        }
    }
});