
import { useState } from 'react'

function obtenerFechaMinima() {
  const fecha = new Date()
  fecha.setDate(fecha.getDate() + 1)

  const anio = fecha.getFullYear()
  const mes = String(fecha.getMonth() + 1).padStart(2, '0')
  const dia = String(fecha.getDate()).padStart(2, '0')

  return `${anio}-${mes}-${dia}`
}

function FormularioCarrito({ total }) {
  const [datos, setDatos] = useState({
    nombre: '',
    direccion: '',
    fecha: ''
  })

  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  function manejarCambio(evento) {
    const { name, value } = evento.target

    setDatos((anteriores) => ({
      ...anteriores,
      [name]: value
    }))

    setError('')
    setMensaje('')
  }

  function confirmarPedido(evento) {
    evento.preventDefault()

    const nombre = datos.nombre.trim()
    const direccion = datos.direccion.trim()
    const fechaMinima = obtenerFechaMinima()

    if (nombre.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres.')
      return
    }

    if (direccion.length < 5) {
      setError('Ingresa una dirección válida.')
      return
    }

    if (!datos.fecha || datos.fecha < fechaMinima) {
      setError('Selecciona una fecha desde mañana en adelante.')
      return
    }

    setError('')
    setMensaje(
      `Simulación de pedido completada para ${nombre}. ` +
      `Total: $${total.toLocaleString('es-CL')}. ` +
      'No se realizó ningún pago ni se envió un pedido real.'
    )
  }

  return (
    <section className="card p-4 mt-4">
      <h3>Datos del Pedido</h3>

      <p className="text-muted">
        Formulario de demostración académica.
      </p>

      <form onSubmit={confirmarPedido} noValidate>

        <div className="mb-3">
          <label htmlFor="nombrePedido" className="form-label">
            Nombre completo
          </label>

          <input
            id="nombrePedido"
            type="text"
            name="nombre"
            className="form-control"
            value={datos.nombre}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="direccionPedido" className="form-label">
            Dirección de entrega
          </label>

          <input
            id="direccionPedido"
            type="text"
            name="direccion"
            className="form-control"
            value={datos.direccion}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fechaPedido" className="form-label">
            Fecha de entrega
          </label>

          <input
            id="fechaPedido"
            type="date"
            name="fecha"
            className="form-control"
            min={obtenerFechaMinima()}
            value={datos.fecha}
            onChange={manejarCambio}
            required
          />
        </div>

        {error && (
          <p role="alert" className="alert alert-danger">
            {error}
          </p>
        )}

        {mensaje && (
          <p role="status" className="alert alert-success">
            {mensaje}
          </p>
        )}

        <button
          type="submit"
          className="btn-marron w-100"
          disabled={total <= 0}
        >
          Simular pedido
        </button>

      </form>
    </section>
  )
}

export default FormularioCarrito
