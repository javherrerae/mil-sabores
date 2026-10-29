import { fireEvent, render, screen } from '@testing-library/react'
import CarritoItem from '../components/CarritoItem'

describe('CarritoItem', () => {
  const producto = {
    id: 'A',
    nombre: 'Torta',
    precio: 20000,
    cantidad: 3,
    imagen: '/img/t.jpg'
  }

  // CarritoItem es una fila (tr), así que va dentro de una tabla
  function dibujar(prod = producto, onCantidad = () => {}, onEliminar = () => {}) {
    render(
      <table>
        <tbody>
          <CarritoItem producto={prod} onCantidad={onCantidad} onEliminar={onEliminar} />
        </tbody>
      </table>
    )
  }

  it('calcula y muestra el subtotal (precio por cantidad)', () => {
    dibujar()

    expect(screen.getByText('$60.000')).toBeTruthy()
  })

  it('deshabilita el botón de restar cuando la cantidad es 1', () => {
    dibujar({ ...producto, cantidad: 1 })

    expect(screen.getByLabelText('Restar Torta').disabled).toBe(true)
  })

  it('avisa con el id y el cambio al sumar y al restar', () => {
    const onCantidad = jasmine.createSpy('onCantidad')
    dibujar(producto, onCantidad)

    fireEvent.click(screen.getByLabelText('Sumar Torta'))
    fireEvent.click(screen.getByLabelText('Restar Torta'))

    expect(onCantidad).toHaveBeenCalledWith('A', 1)
    expect(onCantidad).toHaveBeenCalledWith('A', -1)
  })

  it('llama a onEliminar con el id al hacer clic en Eliminar', () => {
    const onEliminar = jasmine.createSpy('onEliminar')
    dibujar(producto, () => {}, onEliminar)

    fireEvent.click(screen.getByText('Eliminar'))

    expect(onEliminar).toHaveBeenCalledWith('A')
  })
})