
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CarritoItem from '../components/CarritoItem'
import FormularioCarrito from '../components/FormularioCarrito'

import '../css/estilos.css'
import '../css/bootstrap.min.css'

// Recuperar productos guardados
function leerCarrito() {
  try {
    const datos = JSON.parse(
      localStorage.getItem('carritoMilSabores') || '[]'
    )

    return Array.isArray(datos) ? datos : []
  } catch {
    return []
  }
}

function Carrito() {
  const [carrito, setCarrito] = useState(leerCarrito)

  // Guardar los cambios del carrito
  useEffect(() => {
    localStorage.setItem(
      'carritoMilSabores',
      JSON.stringify(carrito)
    )

    window.dispatchEvent(new Event('carrito-actualizado'))
  }, [carrito])

  // Aumentar o disminuir cantidades
  function modificarCantidad(id, cambio) {
    setCarrito((anterior) =>
      anterior.map((producto) => {
        if (producto.id !== id) return producto

        return {
          ...producto,
          cantidad: Math.max(1, producto.cantidad + cambio)
        }
      })
    )
  }

  // Eliminar producto
  function eliminarProducto(id) {
    setCarrito((anterior) =>
      anterior.filter((producto) => producto.id !== id)
    )
  }

  // Calcular totales
  const subtotal = carrito.reduce(
    (total, producto) =>
      total + producto.precio * producto.cantidad,
    0
  )

  const descuento = 0
  const total = subtotal - descuento

  return (
    <main className="container py-4">

      <h1 className="text-center mb-4">
        Mi Carrito de Compras
      </h1>

      {carrito.length === 0 ? (

        <div className="text-center py-5">
          <h3>Tu carrito está vacío</h3>
          <p>Explora nuestro catálogo de tortas.</p>

          <Link to="/catalogo" className="btn-marron">
            Ver productos
          </Link>
        </div>

      ) : (
        <>

          {/* TABLA DE PRODUCTOS */}
          <div className="table-responsive">
            <table className="table tabla-carrito align-middle">

              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {carrito.map((producto) => (
                  <CarritoItem
                    key={producto.id}
                    producto={producto}
                    onCantidad={modificarCantidad}
                    onEliminar={eliminarProducto}
                  />
                ))}
              </tbody>

            </table>
          </div>

          {/* RESUMEN DE COMPRA */}
          <div className="row justify-content-end mt-4">
            <div className="col-12 col-md-5">

              <div className="card p-4">
                <h3>Resumen de Compra</h3>

                <p>
                  Subtotal:
                  <strong className="float-end">
                    ${subtotal.toLocaleString('es-CL')}
                  </strong>
                </p>

                <p>
                  Descuento:
                  <strong className="float-end">
                    ${descuento.toLocaleString('es-CL')}
                  </strong>
                </p>

                <hr />

                <h4>
                  Total:
                  <strong className="float-end">
                    ${total.toLocaleString('es-CL')}
                  </strong>
                </h4>

                <Link
                  to="/catalogo"
                  className="btn-marron text-center mt-3"
                >
                  Seguir comprando
                </Link>

              </div>
            </div>
          </div>

          {/* FORMULARIO DE PEDIDO */}
          <div className="row justify-content-end mt-4">
            <div className="col-12 col-md-6">

              <FormularioCarrito total={total} />

            </div>
          </div>

        </>
      )}

    </main>
  )
}

export default Carrito
