// AUTENTICACIÓN DE DEMOSTRACIÓN (solo navegador, sin servidor).
// No usar con cuentas, contraseñas ni información personal real.
// Los verificadores PBKDF2 no sustituyen la autenticación del backend.
const USUARIOS_KEY = 'milSaboresReactUsuariosDemo'
const SESION_KEY = 'milSaboresReactSesionDemo'
const EVENTO_SESION = 'mil-sabores-sesion'

function leerJSON(key, predeterminado) {
  try {
    const valor = JSON.parse(localStorage.getItem(key) || 'null')
    return valor ?? predeterminado
  } catch {
    return predeterminado
  }
}

function leerUsuarios() {
  const datos = leerJSON(USUARIOS_KEY, [])
  return Array.isArray(datos) ? datos : []
}

function correoNormalizado(correo) {
  return correo.trim().toLowerCase()
}

async function obtenerVerificador(password, salt) {
  const llave = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits']
  )

  const datos = await crypto.subtle.deriveBits({
    name: 'PBKDF2',
    salt: new Uint8Array(salt),
    iterations: 120000,
    hash: 'SHA-256'
  }, llave, 256)

  return Array.from(new Uint8Array(datos))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export function obtenerSesion() {
  const sesion = leerJSON(SESION_KEY, null)
  return sesion && typeof sesion.email === 'string' ? sesion : null
}

export async function registrarUsuario({ nombre, email, fechaNac, password, codigoPromo }) {
  const usuarios = leerUsuarios()
  const correo = correoNormalizado(email)

  if (usuarios.some((usuario) => usuario.email === correo)) {
    throw new Error('Este correo ya está registrado.')
  }

  const salt = Array.from(crypto.getRandomValues(new Uint8Array(16)))
  const verificador = await obtenerVerificador(password, salt)

  const fecha = new Date(`${fechaNac}T12:00:00`)
  const hoy = new Date()
  let edad = hoy.getFullYear() - fecha.getFullYear()
  if (
    hoy.getMonth() < fecha.getMonth() ||
    (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate())
  ) edad -= 1

  const beneficios = []
  if (edad >= 50) beneficios.push('Beneficio por edad (simulado): 50%')
  if (codigoPromo.trim().toUpperCase() === 'FELICES50') {
    beneficios.push('Código promocional (simulado): 10%')
  }
  if (correo.endsWith('@duocuc.cl') || correo.endsWith('@alumnos.duoc.cl')) {
    beneficios.push('Beneficio estudiante Duoc (simulado)')
  }

  usuarios.push({
    nombre: nombre.trim(),
    email: correo,
    fechaNac,
    telefono: '',
    salt,
    verificador,
    beneficios
  })

  localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios))
  return beneficios
}

export async function iniciarSesion(email, password) {
  const usuario = leerUsuarios().find(
    (item) => item.email === correoNormalizado(email)
  )

  if (!usuario || !usuario.salt || !usuario.verificador) return false

  const verificador = await obtenerVerificador(password, usuario.salt)
  if (verificador !== usuario.verificador) return false

  const sesion = { email: usuario.email, nombre: usuario.nombre }
  localStorage.setItem(SESION_KEY, JSON.stringify(sesion))
  window.dispatchEvent(new Event(EVENTO_SESION))
  return true
}

export function obtenerPerfil() {
  const sesion = obtenerSesion()
  if (!sesion) return null
  return leerUsuarios().find((item) => item.email === sesion.email) ?? null
}

export function actualizarPerfil({ nombre, email, telefono }) {
  const sesion = obtenerSesion()
  if (!sesion) throw new Error('La sesión no está activa.')

  const correoNuevo = correoNormalizado(email)
  const usuarios = leerUsuarios()
  const indice = usuarios.findIndex((item) => item.email === sesion.email)
  if (indice < 0) throw new Error('No se encontró la cuenta.')

  if (usuarios.some((item, i) => i !== indice && item.email === correoNuevo)) {
    throw new Error('El correo ingresado ya está registrado.')
  }

  usuarios[indice] = {
    ...usuarios[indice],
    nombre: nombre.trim(),
    email: correoNuevo,
    telefono: telefono.trim()
  }

  localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios))
  localStorage.setItem(SESION_KEY, JSON.stringify({ nombre: nombre.trim(), email: correoNuevo }))
  window.dispatchEvent(new Event(EVENTO_SESION))
}

export function cerrarSesion() {
  localStorage.removeItem(SESION_KEY)
  window.dispatchEvent(new Event(EVENTO_SESION))
}
