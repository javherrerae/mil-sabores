import { Link, useParams } from 'react-router-dom'
import ResumenPedido from '../components/ResumenPedido'
import { OPCIONES_ENVIO, obtenerOrdenPorId } from '../data/ordenes'

import '../css/estilos.css'
import '../css/bootstrap.min.css'

function CompraExitosa() {
  // logica
  const { id } = useParams()
  const orden = obtenerOrdenPorId(id)

  if (!orden) {
    return (
      <main className="container py-5 text-center">
        <h1>Orden no encontrada</h1>
        <Link to="/catalogo" className="btn-marron">
          Ir al catálogo
        </Link>
      </main>
    )
  }

  const opcionEnvio = OPCIONES_ENVIO.find((opcion) => opcion.valor === orden.envio)
  const fechaEntrega = new Date(`${orden.fechaEntrega}T12:00:00`).toLocaleDateString('es-CL')

  // render
  return (
    <main className="container py-4">
      <div className="text-center mb-4">
        <h1>¡Compra exitosa!</h1>
        <p>
          Gracias por tu compra, {orden.nombre}. Pago simulado aprobado con la
          tarjeta terminada en {orden.ultimos4}.
        </p>
        <p>
          N° de orden: <strong>{orden.id}</strong>
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-6">
          <ResumenPedido
            items={orden.items}
            subtotal={orden.subtotal}
            costoEnvio={orden.costoEnvio}
            total={orden.total}
          />

          <section className="card p-4 mt-3">
            <h3>Datos de entrega</h3>
            <p className="mb-1">Recibe: {orden.nombre}</p>
            <p className="mb-1">Dirección: {orden.direccion}</p>
            <p className="mb-1">Fecha: {fechaEntrega}</p>
            <p className="mb-0">Entrega: {opcionEnvio?.texto}</p>
          </section>

          <div className="text-center mt-3">
            <Link to="/catalogo" className="btn-marron">
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CompraExitosa