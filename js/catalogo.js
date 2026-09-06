document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.filtro-cb');
    const productos = document.querySelectorAll('.tarjeta-catalogo');

    checkboxes.forEach(box => {
        box.addEventListener('change', filtrarProductos);
    });

    function filtrarProductos() {
        const formasMarcadas = Array.from(document.querySelectorAll('.cb-forma:checked')).map(cb => cb.value);
        const tamanosMarcados = Array.from(document.querySelectorAll('.cb-tamano:checked')).map(cb => cb.value);
        const dietMarcadas = Array.from(document.querySelectorAll('.cb-diet:checked')).map(cb => cb.value);

        productos.forEach(producto => {
            const formaProducto = producto.getAttribute('data-forma');
            const tamanoProducto = producto.getAttribute('data-tamano');
            const dietProducto = producto.getAttribute('data-diet');

            const cumpleForma = formasMarcadas.length === 0 || formasMarcadas.includes(formaProducto);
            const cumpleTamano = tamanosMarcados.length === 0 || tamanosMarcados.includes(tamanoProducto);
            const cumpleDiet = dietMarcadas.length === 0 || dietMarcadas.includes(dietProducto);

            if (cumpleForma && cumpleTamano && cumpleDiet) {
                producto.style.display = 'flex';
            } else {
                producto.style.display = 'none';
            }
        });
    }
});

// === LÓGICA PARA AÑADIR AL CARRITO (LOCALSTORAGE) ===
const botonesAgregar = document.querySelectorAll('.btn-agregar');

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', function(evento) {
        // Identificar qué producto se clickeó
        const tarjeta = evento.target.closest('.tarjeta-catalogo');
        
        // Armar el objeto del producto
        const producto = {
            id: tarjeta.getAttribute('data-id'),
            nombre: tarjeta.getAttribute('data-nombre'),
            precio: parseInt(tarjeta.getAttribute('data-precio')),
            imagen: tarjeta.getAttribute('data-imagen'),
            cantidad: 1 // Por defecto al añadir
        };

        // Traer el carrito actual desde localStorage (o crear uno vacío si no existe)
        let carrito = JSON.parse(localStorage.getItem('carritoMilSabores')) || [];

        // Verificar si el producto ya está en el carrito
        const indexExistente = carrito.findIndex(item => item.id === producto.id);
        
        if (indexExistente !== -1) {
            carrito[indexExistente].cantidad += 1; // Si existe, sumar 1 a la cantidad
        } else {
            carrito.push(producto); // Si no existe, agregarlo a la lista
        }

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carritoMilSabores', JSON.stringify(carrito));

        // Feedback visual simple
        alert(`¡${producto.nombre} añadido al carrito con éxito!`);
    });
});