
function CarritoItem({ producto, onCantidad, onEliminar }) {
  const subtotal = producto.precio * producto.cantidad

  return (
    <tr>
      <td className="py-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              width: '65px',
              height: '65px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
          <strong>{producto.nombre}</strong>
        </div>
      </td>

      <td>${producto.precio.toLocaleString('es-CL')}</td>

      <td>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <button
            type="button"
            className="btn-cantidad"
            disabled={producto.cantidad <= 1}
            aria-label={`Restar ${producto.nombre}`}
            onClick={() => onCantidad(producto.id, -1)}
          >
            -
          </button>

          <span>{producto.cantidad}</span>

          <button
            type="button"
            className="btn-cantidad"
            aria-label={`Sumar ${producto.nombre}`}
            onClick={() => onCantidad(producto.id, 1)}
          >
            +
          </button>
        </div>
      </td>

      <td>
        <strong>${subtotal.toLocaleString('es-CL')}</strong>
      </td>

      <td>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => onEliminar(producto.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default CarritoItem
