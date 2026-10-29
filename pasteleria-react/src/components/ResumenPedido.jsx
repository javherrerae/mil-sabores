function ResumenPedido({ items, subtotal, costoEnvio, total }) {
  return (
    <section className="card p-4">
      <h3>Resumen del Pedido</h3>

      {items.map((item) => (
        <div key={item.id} className="d-flex justify-content-between mb-2">
          <span>
            {item.cantidad} x {item.nombre}
          </span>
          <span>
            ${(item.precio * item.cantidad).toLocaleString('es-CL')}
          </span>
        </div>
      ))}

      <hr />

      <div className="d-flex justify-content-between">
        <span>Subtotal</span>
        <span>${subtotal.toLocaleString('es-CL')}</span>
      </div>

      <div className="d-flex justify-content-between">
        <span>Envío</span>
        <span>
          {costoEnvio === 0
            ? 'Gratis'
            : `$${costoEnvio.toLocaleString('es-CL')}`}
        </span>
      </div>

      <hr />

      <h4 className="d-flex justify-content-between">
        <span>Total</span>
        <strong>${total.toLocaleString('es-CL')}</strong>
      </h4>
    </section>
  )
}

export default ResumenPedido