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