import { calcularPrecioFinal } from '../data/productos'

function PrecioProducto({ producto }) {
  const enOferta = producto.descuento > 0
  const precioFinal = calcularPrecioFinal(producto)

  // Sin oferta sale solo el precio normal
  if (!enOferta) {
    return <p className="precio">${producto.precio.toLocaleString('es-CL')}</p>
  }

  // Si esta en oferta, el precio antiguoe es tachado, precio nuevo y etiqueta de descuento
  return (
    <p className="precio">
      <del className="text-muted me-2">
        ${producto.precio.toLocaleString('es-CL')}
      </del>
      ${precioFinal.toLocaleString('es-CL')}
      <span className="badge bg-danger ms-2">-{producto.descuento}%</span>
    </p>
  )
}

export default PrecioProducto