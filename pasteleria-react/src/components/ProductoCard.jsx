
function ProductoCard({ producto, onAgregar }) {
  const precioFormateado = producto.precio.toLocaleString('es-CL')

  return (
    <div className="tarjeta-catalogo">
      <div className="img-torta">
        <img
          src={producto.imagen}
          alt={producto.nombre}
        />
      </div>

      <h3 className="fuente-artistica">
        {producto.nombre}
      </h3>

      <p>{producto.descripcion}</p>

      <p className="precio">
        ${precioFormateado}
      </p>

      <button
        type="button"
        className="btn-marron btn-agregar"
        style={{ marginTop: '15px', width: '100%' }}
        onClick={() => onAgregar(producto)}
      >
        Añadir al Carrito
      </button>
    </div>
  )
}

export default ProductoCard
