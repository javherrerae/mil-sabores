import {
  actualizarProducto,
  calcularPrecioFinal,
  crearProducto,
  eliminarProducto,
  obtenerCategorias,
  obtenerOfertas,
  obtenerProductoPorId,
  obtenerProductos
} from '../data/productos'

describe('productos (datos)', () => {
  // Cada prueba parte con el localStorage vacío
  beforeEach(() => {
    localStorage.clear()
  })

  describe('calcularPrecioFinal', () => {
    it('aplica el porcentaje de descuento', () => {
      expect(calcularPrecioFinal({ precio: 20990, descuento: 20 })).toBe(16792)
    })

    it('devuelve el mismo precio si no hay descuento', () => {
      expect(calcularPrecioFinal({ precio: 20990, descuento: 0 })).toBe(20990)
      expect(calcularPrecioFinal({ precio: 20990 })).toBe(20990)
    })
  })

  it('obtenerOfertas devuelve solo los productos con descuento', () => {
    const ofertas = obtenerOfertas()

    expect(ofertas.length).toBe(3)
    expect(ofertas.every((producto) => producto.descuento > 0)).toBe(true)
  })

  it('obtenerCategorias devuelve cada categoría una sola vez', () => {
    const categorias = obtenerCategorias()

    expect(categorias.length).toBe(3)
    expect(categorias).toContain('Chocolate')
  })

  it('crearProducto agrega un producto a la lista', () => {
    const antes = obtenerProductos().length

    crearProducto({ id: 'NUEVO', nombre: 'Torta nueva', precio: 1000, descuento: 0 })

    expect(obtenerProductos().length).toBe(antes + 1)
    expect(obtenerProductoPorId('NUEVO').nombre).toBe('Torta nueva')
  })

  it('actualizarProducto cambia solo los campos indicados', () => {
    const original = obtenerProductoPorId('TT001')

    actualizarProducto('TT001', { precio: 9999 })

    const cambiado = obtenerProductoPorId('TT001')
    expect(cambiado.precio).toBe(9999)
    expect(cambiado.nombre).toBe(original.nombre)
  })

  it('eliminarProducto quita el producto de la lista', () => {
    eliminarProducto('TT001')

    expect(obtenerProductoPorId('TT001')).toBeUndefined()
  })
})