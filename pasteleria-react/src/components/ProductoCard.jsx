import { Link } from 'react-router-dom'

function ProductoCard({ producto, onAgregar }) {
  const precioFormateado = producto.precio.toLocaleString('es-CL')

  return (
    <div className="tarjeta-catalogo">
      <div className="img-torta">
        <Link to={`/producto/${producto.id}`}>
          <img src={producto.imagen} alt={producto.nombre} />
        </Link>
      </div>

      <h3 className="fuente-artistica">
        <Link
          to={`/producto/${producto.id}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {producto.nombre}
        </Link>
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
