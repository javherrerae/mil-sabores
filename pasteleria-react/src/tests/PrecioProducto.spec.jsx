import { render, screen } from '@testing-library/react'
import PrecioProducto from '../components/PrecioProducto'

describe('PrecioProducto', () => {
  const producto = { id: 'T1', nombre: 'Torta', precio: 20000, descuento: 20 }

  it('muestra la etiqueta y el precio rebajado cuando hay descuento', () => {
    render(<PrecioProducto producto={producto} />)

    expect(screen.getByText('-20%')).toBeTruthy()
    expect(screen.getByText(/16\.000/)).toBeTruthy()
  })

  it('no muestra etiqueta cuando no hay descuento', () => {
    render(<PrecioProducto producto={{ ...producto, descuento: 0 }} />)

    expect(screen.queryByText(/%/)).toBeNull()
    expect(screen.getByText(/20\.000/)).toBeTruthy()
  })
})