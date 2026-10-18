import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/estilos.css'

function RecuperarPassword() {
  const [email, setEmail] = useState('')
  const [aviso, setAviso] = useState(null)

  function procesar(evento) {
    evento.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setAviso({ tipo: 'error', texto: 'Ingresa un correo electrónico válido.' })
      return
    }
    setAviso({
      tipo: 'exito',
      texto: 'Formulario validado. Esta demostración no envía correos ni recupera contraseñas; requiere backend.'
    })
    setEmail('')
  }

  return (
    <main className="contenedor-principal">
      <div className="caja-formulario">
        <h1 className="titulo-centrado">Recuperar Contraseña</h1>
        <p className="subtitulo-centrado">Ingresa tu correo electrónico.</p>
        <form id="formRecuperar" onSubmit={procesar} noValidate>
          <div className="grupo-input">
            <label htmlFor="emailRecuperar">Correo electrónico</label>
            <input id="emailRecuperar" type="email" value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              placeholder="correo@ejemplo.com" required />
          </div>
          {aviso && <p className={`mensaje-${aviso.tipo}`} role="status">{aviso.texto}</p>}
          <button type="submit" className="btn-marron btn-bloque">Validar solicitud</button>
        </form>
        <p className="enlace-alternativo">
          ¿Recordaste tu contraseña? <Link to="/login">Vuelve a iniciar sesión</Link>
        </p>
      </div>
    </main>
  )
}

export default RecuperarPassword
