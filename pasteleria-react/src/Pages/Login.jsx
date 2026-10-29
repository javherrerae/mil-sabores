import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { esAdmin, iniciarSesion } from '../lib/authDemo'
import '../css/estilos.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [procesando, setProcesando] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  async function ingresar(evento) {
    evento.preventDefault()
    setError('')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || !password) {
      setError('Ingresa un correo válido y tu contraseña.')
      return
    }

    setProcesando(true)
    try {
      const correcto = await iniciarSesion(email, password)
      if (!correcto) {
        setError('Correo o contraseña incorrectos.')
        return
      }
      navigate(esAdmin() ? '/admin' : '/Perfil', { replace: true })
    } catch {
      setError('No fue posible iniciar sesión en esta demostración.')
    } finally {
      setProcesando(false)
    }
  }

  return (
    <main className="contenedor-principal">
      <div className="caja-formulario">
        <h1 className="titulo-centrado">Iniciar Sesión</h1>
        <p className="subtitulo-centrado">¡Qué bueno verte de nuevo!</p>
        <p className="nota-campo">Acceso de demostración local. No uses credenciales reales.</p>

        {location.state?.registroExitoso && (
          <p className="mensaje-exito" role="status">Cuenta de demostración creada. Ya puedes ingresar.</p>
        )}

        <form id="formLogin" onSubmit={ingresar} noValidate>
          <div className="grupo-input">
            <label htmlFor="emailLogin">Correo electrónico</label>
            <input
              type="email" id="emailLogin" autoComplete="username"
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com" required
            />
          </div>
          <div className="grupo-input">
            <label htmlFor="passwordLogin">Contraseña</label>
            <input
              type="password" id="passwordLogin" autoComplete="current-password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña" required
            />
          </div>
          {error && <p className="mensaje-error" role="alert">{error}</p>}
          <button className="btn-marron btn-bloque" disabled={procesando} type="submit">
            {procesando ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
        <p className="enlace-alternativo">
          ¿Olvidaste tu contraseña? <Link to="/recuperar-password">Recupérala aquí</Link>
        </p>
        <p className="enlace-alternativo">
          ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
        </p>
      </div>
    </main>
  )
}

export default Login
