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
    diet: 'tradicional',
    categoria: 'Frutales',
    descuento: 0
  },
  {
    id: 'TT002',
    nombre: 'Torta Amor',
    descripcion: 'Torta Circular de Mil Hojas con manjar',
    precio: 24990,
    imagen: '/img/tortas/tortap2.jpg',
    forma: 'circular',
    tamano: 'grande',
    diet: 'tradicional',
    categoria: 'Clasicas',
    descuento: 10
  },
  {
    id: 'TT003',
    nombre: 'Selva Negra',
    descripcion: 'Torta Circular de Selva Negra',
    precio: 20990,
    imagen: '/img/tortas/tortap3.jpg',
    forma: 'circular',
    tamano: 'pequeno',
    diet: 'sin-azucar',
    categoria: 'Chocolate',
    descuento: 20
  },
  {
    id: 'TT004',
    nombre: 'Crema Piña',
    descripcion: 'Torta Circular de Crema Piña',
    precio: 22990,
    imagen: '/img/tortas/tortap4.jpg',
    forma: 'circular',
    tamano: 'mediano',
    diet: 'tradicional',
    categoria: 'Frutales',
    descuento: 0
  },
  {
    id: 'TT005',
    nombre: 'Lúcuma Manjar',
    descripcion: 'Torta Circular de Lúcumas y Manjar',
    precio: 24990,
    imagen: '/img/tortas/tortap5.jpg',
    forma: 'circular',
    tamano: 'grande',
    diet: 'tradicional',
    categoria: 'Clasicas',
    descuento: 15
  },
  {
    id: 'TT006',
    nombre: 'Trufa Chocolate',
    descripcion: 'Torta Circular de Trufa Chocolate',
    precio: 20990,
    imagen: '/img/tortas/tortap6.jpg',
    forma: 'circular',
    tamano: 'pequeno',
    diet: 'sin-azucar',
    categoria: 'Chocolate',
    descuento: 0
  }
]

// Funcion para guardar la lista completa en localStorage
function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista))
}

// Funcion que devuelve todos los productos
export function obtenerProductos() {
  const guardado = localStorage.getItem(CLAVE)

  if (guardado) {
    return JSON.parse(guardado)
  }

  // la primera vez guardamos los iniciales y los devolvemos
  guardar(productosIniciales)
  return [...productosIniciales]
}

// Funcion que devuelve un solo producto segun su id
export function obtenerProductoPorId(id) {
  return obtenerProductos().find((producto) => producto.id === id)
}

// Funcion para agregar un producto nuevo a la lista
export function crearProducto(producto) {
  const lista = [...obtenerProductos(), producto]
  guardar(lista)
  return producto
}

// Funcion que cambia solo los campos indicados de un producto
export function actualizarProducto(id, cambios) {
  const lista = obtenerProductos().map((producto) =>
    producto.id === id ? { ...producto, ...cambios } : producto
  )
  guardar(lista)
}

// Funcion para eliminar un producto de la lista
export function eliminarProducto(id) {
  const lista = obtenerProductos().filter((producto) => producto.id !== id)
  guardar(lista)
}

// Funcion que devuelve la lista de categorias, sin repetir
export function obtenerCategorias() {
  const categorias = obtenerProductos().map((producto) => producto.categoria)
  return [...new Set(categorias)]
}

// Fucnion que devuelve solo los productos que estan en oferta
export function obtenerOfertas() {
  return obtenerProductos().filter((producto) => producto.descuento > 0)
}

// Funcion que calcula el precio con el descuento aplicado
export function calcularPrecioFinal(producto) {
  const descuento = producto.descuento || 0
  return Math.round(producto.precio * (1 - descuento / 100))
}