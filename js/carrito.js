// Gestiona la representación, cantidades y eliminación de productos del carrito.
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a los elementos donde se renderizan el carrito y sus totales.
    const cuerpoCarrito = document.getElementById('cuerpoCarrito');
    const mensajeVacio = document.getElementById('mensajeCarritoVacio');
    const txtSubtotal = document.getElementById('resumenSubtotal');
    const txtDescuento = document.getElementById('resumenDescuento');
    const txtTotal = document.getElementById('resumenTotal');

    // Dibuja el estado inicial guardado en el navegador.
    renderizarCarrito();

    function renderizarCarrito() {
        // Recupera los productos y muestra el mensaje correspondiente si no hay artículos.
        let carrito = JSON.parse(localStorage.getItem('carritoMilSabores')) || [];
        
        cuerpoCarrito.innerHTML = ''; // Limpiar la tabla

        if (carrito.length === 0) {
            mensajeVacio.style.display = 'block';
            return;
        }

        mensajeVacio.style.display = 'none';
        let subtotalGlobal = 0;

        // Genera una fila por producto y calcula el subtotal general.
        carrito.forEach((producto, index) => {
            const subtotalProducto = producto.precio * producto.cantidad;
            subtotalGlobal += subtotalProducto;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="padding: 15px 0;"><strong>${producto.nombre}</strong></td>
                <td>$${producto.precio.toLocaleString('es-CL')}</td>
                <td>
                    <button class="btn-cantidad" onclick="modificarCantidad(${index}, -1)">-</button>
                    <span style="padding: 0 10px;">${producto.cantidad}</span>
                    <button class="btn-cantidad" onclick="modificarCantidad(${index}, 1)">+</button>
                </td>
                <td style="font-weight: bold;">$${subtotalProducto.toLocaleString('es-CL')}</td>
                <td>
                    <button onclick="eliminarProducto(${index})" style="background: none; border: none; cursor: pointer; color: red;">🗑️ Eliminar</button>
                </td>
            `;
            cuerpoCarrito.appendChild(tr);
        });

        actualizarTotales(subtotalGlobal);
    }

    function actualizarTotales(subtotal) {
        // Actualiza los importes visibles del resumen de compra.
        const descuento = 0; 
        const total = subtotal - descuento;

        txtSubtotal.textContent = `$${subtotal.toLocaleString('es-CL')}`;
        txtDescuento.textContent = `-$${descuento.toLocaleString('es-CL')}`;
        txtTotal.textContent = `$${total.toLocaleString('es-CL')}`;
    }

    window.modificarCantidad = function(index, cambio) {
        // Cambia la cantidad solicitada y vuelve a renderizar el carrito.
        let carrito = JSON.parse(localStorage.getItem('carritoMilSabores'));
        carrito[index].cantidad += cambio;

        if (carrito[index].cantidad < 1) {
            carrito[index].cantidad = 1; // No permitir menos de 1
        }

        localStorage.setItem('carritoMilSabores', JSON.stringify(carrito));
        renderizarCarrito();
    };

    window.eliminarProducto = function(index) {
        // Elimina el producto seleccionado y conserva el nuevo estado.
        let carrito = JSON.parse(localStorage.getItem('carritoMilSabores'));
        carrito.splice(index, 1); // Cortar el producto del arreglo
        
        localStorage.setItem('carritoMilSabores', JSON.stringify(carrito));
        renderizarCarrito();
    };
});