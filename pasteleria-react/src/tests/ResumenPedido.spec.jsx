import { render, screen } from '@testing-library/react'
import ResumenPedido from '../components/ResumenPedido'

describe('ResumenPedido', () => {
  const items = [
    { id: 'A', nombre: 'Torta Amor', precio: 20000, cantidad: 2 },
    { id: 'B', nombre: 'Selva Negra', precio: 10000, cantidad: 1 }
  ]

  it('lista todos los productos con su cantidad', () => {
    render(
      <ResumenPedido items={items} subtotal={50000} costoEnvio={3990} total={53990} />
    )

    expect(screen.getByText('2 x Torta Amor')).toBeTruthy()
    expect(screen.getByText('1 x Selva Negra')).toBeTruthy()
  })

  it('muestra el subtotal, el envío y el total recibidos por props', () => {
    render(
      <ResumenPedido items={items} subtotal={50000} costoEnvio={3990} total={53990} />
    )

    expect(screen.getByText('$50.000')).toBeTruthy()
    expect(screen.getByText('$3.990')).toBeTruthy()
    expect(screen.getByText('$53.990')).toBeTruthy()
  })

  it('muestra Gratis solo cuando el envío no tiene costo', () => {
    const { unmount } = render(
      <ResumenPedido items={items} subtotal={50000} costoEnvio={0} total={50000} />
    )
    expect(screen.getByText('Gratis')).toBeTruthy()
    unmount()

    render(
      <ResumenPedido items={items} subtotal={50000} costoEnvio={3990} total={53990} />
    )
    expect(screen.queryByText('Gratis')).toBeNull()
  })
})