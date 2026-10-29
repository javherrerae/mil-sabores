const CLAVE = 'ordenesMilSabores'

// Opciones de entrega disponibles en el checkout
export const OPCIONES_ENVIO = [
  { valor: 'domicilio', texto: 'Despacho a domicilio', costo: 3990 },
  { valor: 'retiro', texto: 'Retiro en tienda', costo: 0 }
]

// Función interna: guarda la lista completa en localStorage
function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista))
}

// READ: devuelve todas las órdenes (la usará el panel de administración)
export function obtenerOrdenes() {
  const guardado = localStorage.getItem(CLAVE)
  return guardado ? JSON.parse(guardado) : []
}

// READ: devuelve una orden según su id
export function obtenerOrdenPorId(id) {
  return obtenerOrdenes().find((orden) => orden.id === id)
}

// READ: devuelve las órdenes de un usuario (se identifica por su correo)
export function obtenerOrdenesDeUsuario(email) {
  return obtenerOrdenes().filter((orden) => orden.email === email)
}

// CREATE: agrega una orden nueva y la devuelve con su id y fecha
export function crearOrden(datos) {
  const orden = {
    ...datos,
    id: 'ORD-' + Date.now(),
    fecha: new Date().toISOString()
  }
  guardar([...obtenerOrdenes(), orden])
  return orden
}