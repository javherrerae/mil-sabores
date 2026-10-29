import { OPCIONES_ENVIO } from '../data/ordenes'

const camposEnvio = [
  { name: 'nombre', label: 'Nombre de quien recibe', type: 'text', placeholder: 'Ej: Ana Pérez' },
  { name: 'direccion', label: 'Dirección de despacho', type: 'text', placeholder: 'Calle, número, comuna' },
  { name: 'fecha', label: 'Fecha de entrega', type: 'date' }
]

const camposPago = [
  { name: 'tarjeta', label: 'Número de tarjeta (16 dígitos)', type: 'text', placeholder: '1234 5678 1234 5678', maxLength: 19 },
  { name: 'vencimiento', label: 'Vencimiento', type: 'text', placeholder: 'MM/AA', maxLength: 5 },
  { name: 'cvv', label: 'CVV (3 dígitos)', type: 'password', placeholder: '123', maxLength: 3 }
]

// La entrega debe ser desde mañana en adelante
function obtenerFechaMinima() {
  const fecha = new Date()
  fecha.setDate(fecha.getDate() + 1)

  const anio = fecha.getFullYear()
  const mes = String(fecha.getMonth() + 1).padStart(2, '0')
  const dia = String(fecha.getDate()).padStart(2, '0')

  return `${anio}-${mes}-${dia}`
}

function FormularioCheckout({ datos, onCambiar, onEnviar, error }) {
  // logica
  function dibujarCampo(campo) {
    return (
      <div className="mb-3" key={campo.name}>
        <label htmlFor={`checkout-${campo.name}`} className="form-label">
          {campo.label}
        </label>
        <input
          id={`checkout-${campo.name}`}
          name={campo.name}
          type={campo.type}
          className="form-control"
          placeholder={campo.placeholder}
          maxLength={campo.maxLength}
          min={campo.name === 'fecha' ? obtenerFechaMinima() : undefined}
          value={datos[campo.name]}
          onChange={onCambiar}
          autoComplete="off"
        />
      </div>
    )
  }

  // render
  return (
    <section className="card p-4">
      <h3>Datos de Envío y Pago</h3>
      <p className="text-muted">
        Formulario de demostración académica: no uses datos reales de tarjeta.
      </p>

      <form onSubmit={onEnviar} noValidate>
        <h4 className="h5">1. Datos de envío</h4>
        {camposEnvio.map(dibujarCampo)}

        <div className="mb-3">
          <p className="form-label mb-1">Opción de entrega</p>
          {OPCIONES_ENVIO.map((opcion) => (
            <div className="form-check" key={opcion.valor}>
              <input
                className="form-check-input"
                type="radio"
                name="envio"
                id={`envio-${opcion.valor}`}
                value={opcion.valor}
                checked={datos.envio === opcion.valor}
                onChange={onCambiar}
              />
              <label
                className="form-check-label"
                htmlFor={`envio-${opcion.valor}`}
              >
                {opcion.texto} (
                {opcion.costo === 0
                  ? 'gratis'
                  : `$${opcion.costo.toLocaleString('es-CL')}`}
                )
              </label>
            </div>
          ))}
        </div>

        <h4 className="h5">2. Método de pago</h4>
        {camposPago.map(dibujarCampo)}

        {error && (
          <p role="alert" className="alert alert-danger">
            {error}
          </p>
        )}

        <button type="submit" className="btn-marron w-100">
          Pagar
        </button>
      </form>
    </section>
  )
}

export default FormularioCheckout