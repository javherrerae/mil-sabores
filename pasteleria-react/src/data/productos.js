const CLAVE = 'productosMilSabores'

// Productos con los que parte la tienda la primera vez
const productosIniciales = [
  {
    id: 'TT001',
    nombre: 'Yogurt Fresa',
    descripcion: 'Torta Circular de Yogurt sabor a fresa',
    precio: 22990,
    imagen: '/img/tortas/tortap1.jpg',
    forma: 'circular',
    tamano: 'mediano',
    diet: 'tradicional'
  },
  {
    id: 'TT002',
    nombre: 'Torta Amor',
    descripcion: 'Torta Circular de Mil Hojas con manjar',
    precio: 24990,
    imagen: '/img/tortas/tortap2.jpg',
    forma: 'circular',
    tamano: 'grande',
    diet: 'tradicional'
  },
  {
    id: 'TT003',
    nombre: 'Selva Negra',
    descripcion: 'Torta Circular de Selva Negra',
    precio: 20990,
    imagen: '/img/tortas/tortap3.jpg',
    forma: 'circular',
    tamano: 'pequeno',
    diet: 'sin-azucar'
  },
  {
    id: 'TT004',
    nombre: 'Crema Piña',
    descripcion: 'Torta Circular de Crema Piña',
    precio: 22990,
    imagen: '/img/tortas/tortap4.jpg',
    forma: 'circular',
    tamano: 'mediano',
    diet: 'tradicional'
  },
  {
    id: 'TT005',
    nombre: 'Lúcuma Manjar',
    descripcion: 'Torta Circular de Lúcumas y Manjar',
    precio: 24990,
    imagen: '/img/tortas/tortap5.jpg',
    forma: 'circular',
    tamano: 'grande',
    diet: 'tradicional'
  },
  {
    id: 'TT006',
    nombre: 'Trufa Chocolate',
    descripcion: 'Torta Circular de Trufa Chocolate',
    precio: 20990,
    imagen: '/img/tortas/tortap6.jpg',
    forma: 'circular',
    tamano: 'pequeno',
    diet: 'sin-azucar'
  }
]

// Función para guardar la lista completa en localStorage
function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista))
}

// Función que devuelve todos los productos
export function obtenerProductos() {
  const guardado = localStorage.getItem(CLAVE)

  if (guardado) {
    return JSON.parse(guardado)
  }

  // la primera vez guardamos los iniciales y los devolvemos
  guardar(productosIniciales)
  return [...productosIniciales]
}

// Función que devuelve un solo producto según su id
export function obtenerProductoPorId(id) {
  return obtenerProductos().find((producto) => producto.id === id)
}

// Función para agregar un producto nuevo a la lista
export function crearProducto(producto) {
  const lista = [...obtenerProductos(), producto]
  guardar(lista)
  return producto
}

// Función que cambia solo los campos indicados de un producto
export function actualizarProducto(id, cambios) {
  const lista = obtenerProductos().map((producto) =>
    producto.id === id ? { ...producto, ...cambios } : producto
  )
  guardar(lista)
}

// Función para eliminar un producto de la lista
export function eliminarProducto(id) {
  const lista = obtenerProductos().filter((producto) => producto.id !== id)
  guardar(lista)
}