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
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: cantidad
    })
  }

  localStorage.setItem(CLAVE, JSON.stringify(carrito))

  // Aviso a la aplicación que el carrito ha cambiado 
  window.dispatchEvent(new Event('carrito-actualizado'))
}