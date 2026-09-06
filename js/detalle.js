document.addEventListener('DOMContentLoaded', function() {
    const baseDeDatosProductos = [
        {
            id: "TC001",
            nombre: "Torta de prueba",
            categoria: "Tortas Cuadradas",
            precio: 45000,
            descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
            imagen: "img/torta-ph1.png" // Reemplaza con tus imágenes reales
        },
        {
            id: "TT001",
            nombre: "Torta Circular de Vainilla",
            categoria: "Tortas Circulares",
            precio: 40000,
            descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
            imagen: "img/torta-ph2.png"
        },
        {
            id: "PSA001",
            nombre: "Torta Sin Azúcar de Naranja",
            categoria: "Productos Sin Azúcar",
            precio: 48000,
            descripcion: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
            imagen: "img/torta-ph3.png"
        },
        {
            id: "TE001",
            nombre: "Torta Especial de Cumpleaños",
            categoria: "Tortas Especiales",
            precio: 55000,
            descripcion: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
            imagen: "img/torta-ph4.png"
        }
    ];

    const parametrosURL = new URLSearchParams(window.location.search);
    const idProductoURL = parametrosURL.get('id');

    const productoEncontrado = baseDeDatosProductos.find(prod => prod.id === idProductoURL);

    if (productoEncontrado) {
        document.getElementById('migaNombreProducto').textContent = productoEncontrado.nombre;
        document.getElementById('detalleNombre').textContent = productoEncontrado.nombre;
        document.getElementById('detalleCategoria').textContent = productoEncontrado.categoria;
        document.getElementById('detallePrecio').textContent = `$ ${productoEncontrado.precio.toLocaleString('es-CL')}`;
        document.getElementById('detalleDescripcion').textContent = productoEncontrado.descripcion;
        
        const imgElement = document.getElementById('detalleImg');
        imgElement.src = productoEncontrado.imagen;
        imgElement.alt = productoEncontrado.nombre;

        configurarBotonCarrito(productoEncontrado);

    } else {
        document.getElementById('vistaDetalle').innerHTML = `
            <div style="text-align: center; width: 100%; padding: 50px;">
                <h2>Producto no encontrado</h2>
                <p>Lo sentimos, no pudimos encontrar la torta que buscas.</p>
                <a href="catalogo.html" class="btn-marron" style="display: inline-block; margin-top: 20px;">Volver al Catálogo</a>
            </div>
        `;
    }

    function configurarBotonCarrito(producto) {
        const btnAgregar = document.getElementById('btnAgregarDetalle');
        const inputCantidad = document.getElementById('cantidadProducto');
        const mensajeFeedback = document.getElementById('mensajeFeedback');

        btnAgregar.addEventListener('click', function() {
            const cantidadDeseada = parseInt(inputCantidad.value);

            let carrito = JSON.parse(localStorage.getItem('carritoMilSabores')) || [];
            
            const indexExistente = carrito.findIndex(item => item.id === producto.id);
            
            if (indexExistente !== -1) {
                carrito[indexExistente].cantidad += cantidadDeseada;
            } else {
                carrito.push({
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    imagen: producto.imagen,
                    cantidad: cantidadDeseada
                });
            }

            localStorage.setItem('carritoMilSabores', JSON.stringify(carrito));

            mensajeFeedback.textContent = `¡Añadiste ${cantidadDeseada} "${producto.nombre}" al carrito!`;
            mensajeFeedback.className = 'mensaje-exito';
            
            setTimeout(() => {
                mensajeFeedback.className = 'mensaje-oculto';
            }, 3000);
        });
    }
});