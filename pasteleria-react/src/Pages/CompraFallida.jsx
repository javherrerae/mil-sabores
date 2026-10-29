import { Link } from 'react-router-dom'

import '../css/estilos.css'
import '../css/bootstrap.min.css'

function CompraFallida() {
  return (
    <main className="container py-5 text-center">
      <h1>No se pudo realizar el pago</h1>
      <p>
        Tu tarjeta fue rechazada. No se realizó ningún cobro y tu carrito sigue
        guardado.
      </p>

      <div className="d-flex justify-content-center gap-2">
        <Link to="/checkout" className="btn-marron">
          Intentar nuevamente
        </Link>
        <Link to="/carrito" className="btn btn-outline-secondary">
          Volver al carrito
        </Link>
      </div>
    </main>
  )
}

export default CompraFallida