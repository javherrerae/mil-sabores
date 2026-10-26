import { useState } from 'react'
import '../css/estilos.css'

const inicial = { nombre: '', email: '', asunto: '', mensaje: '' }

function Contacto() {
  const [datos, setDatos] = useState(inicial)
  const [aviso, setAviso] = useState(null)

  function cambiar(evento) {
    const { name, value } = evento.target
    setDatos((antes) => ({ ...antes, [name]: value }))
    setAviso(null)
  }

  function enviar(evento) {
    evento.preventDefault()
    const { nombre, email, asunto, mensaje } = datos
    if (!nombre.trim() || !email.trim() || !asunto.trim() || !mensaje.trim()) {
      setAviso({ tipo: 'error', texto: 'Completa todos los campos obligatorios.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setAviso({ tipo: 'error', texto: 'Escribe un correo válido.' })
      return
    }
    if (mensaje.trim().length < 15) {
      setAviso({ tipo: 'error', texto: 'El mensaje debe tener al menos 15 caracteres.' })
      return
    }
    setAviso({ tipo: 'exito', texto: 'Formulario validado. No se envió ningún mensaje real.' })
    setDatos(inicial)
  }

  return (
    <main className="contenedor-principal">
      <div className="caja-formulario">
        <h1 className="titulo-centrado">Contáctanos</h1>
        <p className="subtitulo-centrado">¿Tienes dudas o necesitas un pedido especial? Escríbenos.</p>
        <form id="formContacto" onSubmit={enviar} noValidate>
          {[
            ['nombre', 'Nombre completo *', 'text', 'Ej: María González'],
            ['email', 'Correo electrónico *', 'email', 'correo@ejemplo.com'],
            ['asunto', 'Asunto *', 'text', 'Ej: Consulta sobre tortas veganas']
          ].map(([name, label, type, placeholder]) => (
            <div className="grupo-input" key={name}>
              <label htmlFor={`${name}Contacto`}>{label}</label>
              <input id={`${name}Contacto`} type={type} name={name}
                placeholder={placeholder} value={datos[name]}
                onChange={cambiar} required />
            </div>
          ))}
          <div className="grupo-input">
            <label htmlFor="mensajeContacto">Mensaje *</label>
            <textarea id="mensajeContacto" name="mensaje" rows={5}
              placeholder="Escribe tu mensaje aquí..." value={datos.mensaje}
              onChange={cambiar} required />
          </div>
          {aviso && <p className={`mensaje-${aviso.tipo}`} role="status">{aviso.texto}</p>}
          <button type="submit" className="btn-marron btn-bloque">Validar mensaje</button>
        </form>
      </div>
    </main>
  )
}

export default Contacto
