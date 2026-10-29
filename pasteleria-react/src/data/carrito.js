import { calcularPrecioFinal } from './productos'

const CLAVE = 'carritoMilSabores'

// Agrega un producto al carrito
export function agregarAlCarrito(producto, cantidad = 1) {
  const guardado = localStorage.getItem(CLAVE)
  const datos = guardado ? JSON.parse(guardado) : []
  const carrito = Array.isArray(datos) ? datos : []

  const existente = carrito.find((item) => item.id === producto.id)

  if (existente) {  // si el producto existe, se agrega la cantidad
    existente.cantidad += cantidad
  } else {  // si no existe, se agrega al carrito con la cantidad indicada
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: calcularPrecioFinal(producto),
      imagen: producto.imagen,
      cantidad: cantidad
    })
  }

  localStorage.setItem(CLAVE, JSON.stringify(carrito))

  // Aviso a la aplicación que el carrito ha cambiado 
  window.dispatchEvent(new Event('carrito-actualizado'))
}

// READ: devuelve los productos guardados en el carrito
export function obtenerCarrito() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE) || '[]')
    return Array.isArray(datos) ? datos : []
  } catch {
    return []
  }
}

// DELETE: vacía el carrito y avisa al contador del header
export function vaciarCarrito() {
  localStorage.removeItem(CLAVE)
  window.dispatchEvent(new Event('carrito-actualizado'))
}