import {
  esAdmin,
  iniciarSesion,
  obtenerSesion,
  registrarUsuario
} from '../lib/authDemo'

describe('authDemo', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  function datos(email) {
    return {
      nombre: 'Usuario Prueba',
      email,
      fechaNac: '1990-01-01',
      password: 'clave1234',
      codigoPromo: ''
    }
  }

  it('el correo del administrador queda con el rol admin', async () => {
    await registrarUsuario(datos('admin@milsabores.cl'))
    await iniciarSesion('admin@milsabores.cl', 'clave1234')

    expect(esAdmin()).toBe(true)
  })

  it('un cliente normal no es administrador', async () => {
    await registrarUsuario(datos('ana@correo.cl'))
    await iniciarSesion('ana@correo.cl', 'clave1234')

    expect(esAdmin()).toBe(false)
  })

  it('rechaza el inicio de sesión con una contraseña incorrecta', async () => {
    await registrarUsuario(datos('ana@correo.cl'))

    const resultado = await iniciarSesion('ana@correo.cl', 'otraclave')

    expect(resultado).toBe(false)
    expect(obtenerSesion()).toBeNull()
  })
})