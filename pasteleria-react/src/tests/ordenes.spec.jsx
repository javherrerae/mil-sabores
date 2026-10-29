import {
  crearOrden,
  obtenerOrdenes,
  obtenerOrdenesDeUsuario,
  obtenerOrdenPorId
} from '../data/ordenes'

describe('ordenes (datos)', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('obtenerOrdenes devuelve una lista vacía si no hay compras', () => {
    expect(obtenerOrdenes()).toEqual([])
  })

  it('crearOrden agrega el id y la fecha a la orden', () => {
    const orden = crearOrden({ email: 'ana@correo.cl', total: 10000 })

    expect(orden.id.startsWith('ORD-')).toBe(true)
    expect(orden.fecha).toBeTruthy()
    expect(orden.email).toBe('ana@correo.cl')
  })

  it('obtenerOrdenPorId encuentra la orden creada', () => {
    const orden = crearOrden({ email: 'ana@correo.cl', total: 1000 })

    expect(obtenerOrdenPorId(orden.id).total).toBe(1000)
  })

  it('obtenerOrdenesDeUsuario devuelve solo las órdenes de ese correo', () => {
    crearOrden({ email: 'ana@correo.cl', total: 1000 })
    crearOrden({ email: 'luis@correo.cl', total: 2000 })
    crearOrden({ email: 'ana@correo.cl', total: 3000 })

    const deAna = obtenerOrdenesDeUsuario('ana@correo.cl')

    expect(deAna.length).toBe(2)
    expect(deAna.every((orden) => orden.email === 'ana@correo.cl')).toBe(true)
  })
})