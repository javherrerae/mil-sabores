// Valida el checkout, calcula el total y confirma el pedido del cliente.
document.addEventListener('DOMContentLoaded', function() {
    // Carga el resumen de productos y calcula el total del pedido.
    const listaProductos = document.getElementById('listaProductosCheckout');
    const txtTotal = document.getElementById('totalCheckout');
    let carrito = JSON.parse(localStorage.getItem('carritoMilSabores')) || [];
    let totalGlobal = 0;

    // Desactiva el envío si no existen productos para comprar.
    if (carrito.length === 0) {
        listaProductos.innerHTML = '<p style="color: red;">Tu carrito está vacío.</p>';
        document.querySelector('button[type="submit"]').disabled = true;
    } else {
        carrito.forEach(producto => {
            const subtotal = producto.precio * producto.cantidad;
            totalGlobal += subtotal;
            
            listaProductos.innerHTML += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px;">
                    <span>${producto.cantidad}x ${producto.nombre}</span>
                    <span>$${subtotal.toLocaleString('es-CL')}</span>
                </div>
            `;
        });
        txtTotal.textContent = `$${totalGlobal.toLocaleString('es-CL')}`;
    }

    // Configura la validación del formulario de pago y entrega.
    const formCheckout = document.getElementById('formCheckout');
    const mensajeSistema = document.getElementById('mensajeCheckout');

    formCheckout.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nombre = document.getElementById('nombreCheckout').value.trim();
        const direccion = document.getElementById('direccionCheckout').value.trim();
        const fecha = document.getElementById('fechaCheckout').value;
        const tarjeta = document.getElementById('tarjetaCheckout').value.replace(/\s/g, ''); // Quita espacios
        const cvv = document.getElementById('cvvCheckout').value.trim();

        mensajeSistema.className = '';
        mensajeSistema.innerHTML = '';

        // Comprueba que los datos obligatorios estén completos y sean válidos.
        if (nombre === '' || direccion === '' || fecha === '' || tarjeta === '' || cvv === '') {
            mostrarMensaje('error', 'Por favor, completa todos los datos de envío y pago.');
            return;
        }

        const fechaSeleccionada = new Date(fecha);
        const hoy = new Date();
        hoy.setHours(0,0,0,0);
        
        if (fechaSeleccionada <= hoy) {
            mostrarMensaje('error', 'La fecha de entrega debe ser al menos para el día de mañana.');
            return;
        }

        const formatoNumeros = /^[0-9]+$/;
        if (!formatoNumeros.test(tarjeta) || tarjeta.length !== 16) {
            mostrarMensaje('error', 'El número de tarjeta debe contener exactamente 16 dígitos numéricos.');
            return;
        }

        if (!formatoNumeros.test(cvv) || cvv.length !== 3) {
            mostrarMensaje('error', 'El código CVV debe tener 3 dígitos numéricos.');
            return;
        }

        // Confirma el pedido, vacía el carrito y redirige al historial.
        mostrarMensaje('exito', '¡Pago aprobado! Tu pedido ha sido confirmado. Redirigiendo a tu historial...');
        
        localStorage.removeItem('carritoMilSabores');

        setTimeout(() => {
            window.location.href = "historial-pedidos.html";
        }, 3000);
    });

    function mostrarMensaje(tipo, textoHTML) {
        // Muestra el resultado de la validación con el estilo correspondiente.
        mensajeSistema.innerHTML = textoHTML;
        if (tipo === 'error') {
            mensajeSistema.className = 'mensaje-error';
        } else if (tipo === 'exito') {
            mensajeSistema.className = 'mensaje-exito';
        }
    }
});