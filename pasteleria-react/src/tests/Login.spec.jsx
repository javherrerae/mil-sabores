import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Login from '../Pages/Login'

describe('Login', () => {
  function dibujar() {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
  }

  it('actualiza el valor del campo cuando el usuario escribe', () => {
    dibujar()
    const campo = screen.getByLabelText('Correo electrónico')

    fireEvent.change(campo, { target: { value: 'ana@correo.cl' } })

    expect(campo.value).toBe('ana@correo.cl')
  })

  it('muestra un error solo después de enviar el formulario incompleto', () => {
    dibujar()
    expect(screen.queryByRole('alert')).toBeNull()

    fireEvent.submit(screen.getByText('Ingresar').closest('form'))

    expect(screen.getByRole('alert').textContent).toBe(
      'Ingresa un correo válido y tu contraseña.'
    )
  })
})