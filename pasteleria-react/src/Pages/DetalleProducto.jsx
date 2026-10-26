import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../data/productos'
import { agregarAlCarrito } from '../data/carrito'

import '../css/estilos.css'
import '../css/bootstrap.min.css'

function DetalleProducto() {
  // logica
  const { id } = useParams()
  const producto = obtenerProductoPorId(id)

  const [cantidad, setCantidad] = useState(1)
  const [mensaje, setMensaje] = useState('')

  function restar() {
    setCantidad((anterior) => Math.max(1, anterior - 1))
  }

  function sumar() {
    setCantidad((anterior) => anterior + 1)
  }

  function agregar() {
    try {
      agregarAlCarrito(producto, cantidad)
      setMensaje(`${cantidad} x ${producto.nombre} añadido al carrito`)
    } catch {
      setMensaje('No fue posible guardar el carrito')
    }
  }

  // si el id de la URL no existe, salta un aviso
  if (!producto) {
    return (
      <main className="container py-5 text-center">
        <h1>Producto no encontrado</h1>
        <p>El producto que buscas no existe.</p>
        <Link to="/catalogo" className="btn-marron">
          Volver al catálogo
        </Link>
      </main>
    )
  }

  // render
  return (
    <main className="container py-4">
      <Link to="/catalogo">← Volver al catálogo</Link>

      <div className="row mt-3">
        <div className="col-12 col-md-6 mb-3">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-12 col-md-6">
          <h1 className="fuente-artistica">{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <p className="precio">${producto.precio.toLocaleString('es-CL')}</p>

          <div className="d-flex align-items-center gap-2 mb-3">
            <button
              type="button"
              className="btn-cantidad"
              disabled={cantidad <= 1}
              onClick={restar}
            >
              -
            </button>
            <span>{cantidad}</span>
            <button type="button" className="btn-cantidad" onClick={sumar}>
              +
            </button>
          </div>

          <button type="button" className="btn-marron" onClick={agregar}>
            Añadir al Carrito
          </button>

          {mensaje && (
            <p className="alert alert-success mt-3" role="status">
              {mensaje}
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

export default DetalleProducto