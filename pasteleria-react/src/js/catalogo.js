// Aplica filtros al catálogo y agrega productos al carrito persistido.
document.addEventListener('DOMContentLoaded', function() {
    // Conecta todos los filtros con la función que actualiza el catálogo.
    const checkboxes = document.querySelectorAll('.filtro-cb');
    const productos = document.querySelectorAll('.tarjeta-catalogo');

    checkboxes.forEach(box => {
        box.addEventListener('change', filtrarProductos);
    });

    function filtrarProductos() {
        // Reúne los valores seleccionados en cada grupo de filtros.
        const formasMarcadas = Array.from(document.querySelectorAll('.cb-forma:checked')).map(cb => cb.value);
        const tamanosMarcados = Array.from(document.querySelectorAll('.cb-tamano:checked')).map(cb => cb.value);
        const dietMarcadas = Array.from(document.querySelectorAll('.cb-diet:checked')).map(cb => cb.value);

        // Oculta o muestra cada tarjeta según los filtros activos.
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

const botonesAgregar = document.querySelectorAll('.btn-agregar');

// Registra la acción de agregar productos al carrito persistido.
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', function(evento) {
        const tarjeta = evento.target.closest('.tarjeta-catalogo');
        
        const producto = {
            id: tarjeta.getAttribute('data-id'),
            nombre: tarjeta.getAttribute('data-nombre'),
            precio: parseInt(tarjeta.getAttribute('data-precio')),
            imagen: tarjeta.getAttribute('data-imagen'),
            cantidad: 1
        };

        // Reutiliza la línea existente o crea una nueva si es la primera compra.
        let carrito = JSON.parse(localStorage.getItem('carritoMilSabores')) || [];

        const indexExistente = carrito.findIndex(item => item.id === producto.id);
        
        if (indexExistente !== -1) {
            carrito[indexExistente].cantidad += 1;
        } else {
            carrito.push(producto);
        }

        localStorage.setItem('carritoMilSabores', JSON.stringify(carrito));

        alert(`¡${producto.nombre} añadido al carrito con éxito!`);
    });
});