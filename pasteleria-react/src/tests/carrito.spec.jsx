import {
  agregarAlCarrito,
  obtenerCarrito,
  vaciarCarrito
} from '../data/carrito'

describe('carrito (datos)', () => {
  const torta = {
    id: 'T1',
    nombre: 'Torta',
    precio: 20000,
    descuento: 0,
    imagen: '/img/t.jpg'
  }

  beforeEach(() => {
    localStorage.clear()
  })

  it('agrega un producto nuevo con cantidad 1', () => {
    agregarAlCarrito(torta)

    const carrito = obtenerCarrito()
    expect(carrito.length).toBe(1)
    expect(carrito[0].cantidad).toBe(1)
  })

  it('suma la cantidad si el producto ya estaba en el carrito', () => {
    agregarAlCarrito(torta)
    agregarAlCarrito(torta, 2)

    const carrito = obtenerCarrito()
    expect(carrito.length).toBe(1)
    expect(carrito[0].cantidad).toBe(3)
  })

  it('guarda el precio con el descuento aplicado', () => {
    agregarAlCarrito({ ...torta, descuento: 20 })

    expect(obtenerCarrito()[0].precio).toBe(16000)
  })

  it('avisa con el evento carrito-actualizado', () => {
    // Espía: observa la llamada sin cambiar su comportamiento
    spyOn(window, 'dispatchEvent').and.callThrough()

    agregarAlCarrito(torta)

    const evento = window.dispatchEvent.calls.mostRecent().args[0]
    expect(window.dispatchEvent).toHaveBeenCalled()
    expect(evento.type).toBe('carrito-actualizado')
  })

  it('vaciarCarrito deja el carrito sin productos', () => {
    agregarAlCarrito(torta)

    vaciarCarrito()

    expect(obtenerCarrito()).toEqual([])
  })

  it('obtenerCarrito devuelve una lista vacía si los datos guardados están dañados', () => {
    localStorage.setItem('carritoMilSabores', 'esto no es JSON')

    expect(obtenerCarrito()).toEqual([])
  })

  it('obtenerCarrito ignora datos guardados que no son una lista', () => {
    localStorage.setItem('carritoMilSabores', '{"a":1}')

    expect(obtenerCarrito()).toEqual([])
  })
})