document.addEventListener('DOMContentLoaded', function() {
    
    const formulario = document.getElementById('formRegistro');
    const mensajeSistema = document.getElementById('mensajeSistema');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const fechaNac = document.getElementById('fechaNac').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const codigoPromo = document.getElementById('codigoPromo').value.trim().toUpperCase(); // Normalizamos a mayúsculas

        mensajeSistema.className = '';
        mensajeSistema.innerHTML = '';

        if (nombre === '' || email === '' || fechaNac === '' || password === '' || confirmPassword === '') {
            mostrarMensaje('error', 'Por favor, completa todos los campos obligatorios (*).');
            return;
        }

        if (password.length < 6) {
            mostrarMensaje('error', 'La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            mostrarMensaje('error', 'Las contraseñas no coinciden.');
            return;
        }

        const fechaNacimiento = new Date(fechaNac);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        let beneficios = [];

        if (edad >= 50) {
            beneficios.push('<li><strong>¡Beneficio por Edad!</strong> Tienes un 50% de descuento en todos nuestros productos.</li>');
        }

        if (codigoPromo === 'FELICES50') {
            beneficios.push('<li><strong>¡Código Válido!</strong> Has desbloqueado un 10% de descuento de por vida.</li>');
        }

        if (email.endsWith('@duocuc.cl') || email.endsWith('@alumnos.duoc.cl')) {
            beneficios.push('<li><strong>¡Beneficio Estudiante Duoc!</strong> Reclama una torta gratis en el mes de tu cumpleaños.</li>');
        }

        let mensajeFinal = `<p>¡Registro exitoso, <strong>${nombre}</strong>!</p>`;
        
        if (beneficios.length > 0) {
            mensajeFinal += `<p>Has desbloqueado los siguientes beneficios:</p><ul>${beneficios.join('')}</ul>`;
        } else {
            mensajeFinal += `<p>Bienvenido a la comunidad de Mil Sabores.</p>`;
        }

        mostrarMensaje('exito', mensajeFinal);
        
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