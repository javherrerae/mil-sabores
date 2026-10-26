
import { useEffect, useState } from 'react'

function obtenerCantidad() {
  try {
    const datos = JSON.parse(
      localStorage.getItem('carritoMilSabores') || '[]'
    )

    if (!Array.isArray(datos)) return 0

    return datos.reduce(
      (total, producto) =>
        total + (Number(producto.cantidad) || 0),
      0
    )
  } catch {
    return 0
  }
}

function ContadorCarrito() {
  const [cantidad, setCantidad] = useState(obtenerCantidad)

  useEffect(() => {
    function actualizar() {
      setCantidad(obtenerCantidad())
    }

    window.addEventListener('carrito-actualizado', actualizar)
    window.addEventListener('storage', actualizar)

    return () => {
      window.removeEventListener('carrito-actualizado', actualizar)
      window.removeEventListener('storage', actualizar)
    }
  }, [])

  return (
    <span
      className="badge rounded-pill bg-danger"
      aria-label={`${cantidad} productos en el carrito`}
    >
      {cantidad}
    </span>
  )
}

export default ContadorCarrito
