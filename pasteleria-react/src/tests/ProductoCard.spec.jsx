import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductoCard from '../components/ProductoCard'

describe('ProductoCard', () => {
  const producto = {
    id: 'T1',
    nombre: 'Torta Amor',
    descripcion: 'Mil hojas con manjar',
    precio: 24990,
    descuento: 0,
    imagen: '/img/t.jpg'
  }

  // ProductoCard usa Link, así que necesita un enrutador alrededor
  function dibujar(onAgregar = () => {}) {
    render(
      <MemoryRouter>
        <ProductoCard producto={producto} onAgregar={onAgregar} />
      </MemoryRouter>
    )
  }

  it('muestra el nombre, la descripción y el precio recibidos por props', () => {
    dibujar()

    expect(screen.getByText('Torta Amor')).toBeTruthy()
    expect(screen.getByText('Mil hojas con manjar')).toBeTruthy()
    expect(screen.getByText(/24\.990/)).toBeTruthy()
  })

  it('enlaza la imagen con el detalle del producto', () => {
    dibujar()

    const enlace = screen.getByAltText('Torta Amor').closest('a')
    expect(enlace.getAttribute('href')).toBe('/producto/T1')
  })

  it('llama a onAgregar con el producto al hacer clic en Añadir', () => {
    const onAgregar = jasmine.createSpy('onAgregar')
    dibujar(onAgregar)

    fireEvent.click(screen.getByText('Añadir al Carrito'))

    expect(onAgregar).toHaveBeenCalledTimes(1)
    expect(onAgregar).toHaveBeenCalledWith(producto)
  })
})