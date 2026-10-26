import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registrarUsuario } from '../lib/authDemo'
import '../css/estilos.css'

const inicio = {
  nombre: '', email: '', fechaNac: '', password: '',
  confirmPassword: '', codigoPromo: ''
}

function Registro() {
  const [datos, setDatos] = useState(inicio)
  const [aviso, setAviso] = useState(null)
  const [procesando, setProcesando] = useState(false)
  const navigate = useNavigate()

  function actualizar(evento) {
    const { name, value } = evento.target
    setDatos((antes) => ({ ...antes, [name]: value }))
    setAviso(null)
  }

  async function registrar(evento) {
    evento.preventDefault()
    const nombre = datos.nombre.trim()
    const email = datos.email.trim()

    if (!nombre || !email || !datos.fechaNac || !datos.password || !datos.confirmPassword) {
      setAviso({ tipo: 'error', texto: 'Completa todos los campos obligatorios.' })
      return
    }
    if (nombre.length < 3) {
      setAviso({ tipo: 'error', texto: 'El nombre debe tener al menos 3 caracteres.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAviso({ tipo: 'error', texto: 'Escribe un correo electrónico válido.' })
      return
    }
    const hoy = new Date()
    const fechaHoy = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`
    if (datos.fechaNac > fechaHoy) {
      setAviso({ tipo: 'error', texto: 'La fecha de nacimiento no puede ser futura.' })
      return
    }
    if (datos.password.length < 8) {
      setAviso({ tipo: 'error', texto: 'La contraseña debe tener al menos 8 caracteres.' })
      return
    }
    if (datos.password !== datos.confirmPassword) {
      setAviso({ tipo: 'error', texto: 'Las contraseñas no coinciden.' })
      return
    }

    setProcesando(true)
    try {
      await registrarUsuario({ ...datos, nombre, email })
      navigate('/login', { state: { registroExitoso: true } })
    } catch (error) {
      setAviso({ tipo: 'error', texto: error.message || 'No fue posible registrar la cuenta.' })
    } finally {
      setProcesando(false)
    }
  }

  const campos = [
    { name: 'nombre', label: 'Nombre completo *', type: 'text', placeholder: 'Ej: Juan Pastelero' },
    { name: 'email', label: 'Correo electrónico *', type: 'email', placeholder: 'correo@ejemplo.com' },
    { name: 'fechaNac', label: 'Fecha de nacimiento *', type: 'date' },
    { name: 'password', label: 'Contraseña *', type: 'password', placeholder: 'Mínimo 8 caracteres' },
    { name: 'confirmPassword', label: 'Confirmar contraseña *', type: 'password', placeholder: 'Repite tu contraseña' },
    { name: 'codigoPromo', label: 'Código promocional (opcional)', type: 'text', placeholder: 'Ej: FELICES50' }
  ]

  return (
    <main className="contenedor-principal">
      <div className="caja-formulario">
        <h1 className="titulo-centrado">Crea tu Cuenta</h1>
        <p className="subtitulo-centrado">Únete a nuestra dulce comunidad</p>
        <p className="nota-campo">Demostración local: no uses contraseñas ni datos personales reales.</p>

        <form id="formRegistro" onSubmit={registrar} noValidate>
          {campos.map(({ name, label, type, placeholder }) => (
            <div className="grupo-input" key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                id={name} name={name} type={type} placeholder={placeholder}
                value={datos[name]} onChange={actualizar}
                autoComplete={name === 'password' ? 'new-password' : undefined}
                required={name !== 'codigoPromo'}
              />
              {name === 'email' && (
                <small className="nota-campo">El correo institucional permite identificar beneficios de demostración.</small>
              )}
            </div>
          ))}

          {aviso && (
            <p className={`mensaje-${aviso.tipo}`} role="alert">{aviso.texto}</p>
          )}
          <button className="btn-marron btn-bloque" type="submit" disabled={procesando}>
            {procesando ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
        <p className="enlace-alternativo">¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
      </div>
    </main>
  )
}

export default Registro
