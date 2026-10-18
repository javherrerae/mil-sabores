import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { actualizarPerfil, cerrarSesion, obtenerPerfil, obtenerSesion } from '../lib/authDemo'
import '../css/estilos.css'

function Perfil() {
  const [usuario, setUsuario] = useState(obtenerPerfil)
  const [datos, setDatos] = useState(() => ({
    nombre: usuario?.nombre || '',
    email: usuario?.email || '',
    telefono: usuario?.telefono || ''
  }))
  const [aviso, setAviso] = useState(null)
  const navigate = useNavigate()

  if (!obtenerSesion() || !usuario) return <Navigate to="/login" replace />

  function cambiar(evento) {
    const { name, value } = evento.target
    setDatos((previo) => ({ ...previo, [name]: value }))
    setAviso(null)
  }

  function guardar(evento) {
    evento.preventDefault()
    const nombre = datos.nombre.trim()
    const email = datos.email.trim()
    const telefono = datos.telefono.trim()

    if (nombre.length < 3) {
      setAviso({ tipo: 'error', texto: 'El nombre debe tener al menos 3 caracteres.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAviso({ tipo: 'error', texto: 'El correo no es válido.' })
      return
    }
    if (telefono && !/^\d{9}$/.test(telefono)) {
      setAviso({ tipo: 'error', texto: 'El teléfono debe contener 9 dígitos (sin +56).' })
      return
    }

    try {
      actualizarPerfil({ nombre, email, telefono })
      setUsuario(obtenerPerfil())
      setAviso({ tipo: 'exito', texto: 'Datos de demostración actualizados.' })
    } catch (error) {
      setAviso({ tipo: 'error', texto: error.message })
    }
  }

  function salir() {
    cerrarSesion()
    navigate('/login', { replace: true })
  }

  return (
    <main className="contenedor-principal layout-cuenta">
      <div className="columna-sidebar">
        <h1 className="titulo-cuenta">Mi cuenta</h1>
        <aside className="sidebar-cuenta">
          <Link to="/Perfil" className="item-sidebar activo">Mis datos</Link>
          <span className="item-sidebar" aria-disabled="true">Mis pedidos (próximamente)</span>
          <span className="item-sidebar" aria-disabled="true">Direcciones (próximamente)</span>
          <span className="item-sidebar" aria-disabled="true">Métodos de pago (próximamente)</span>
          <button type="button" className="item-sidebar" onClick={salir}>
            Cerrar sesión
          </button>
        </aside>
      </div>
      <div className="columna-contenido">
        <h2 className="titulo-cuenta">Información Personal</h2>
        <p className="nota-campo">Datos guardados solo en este navegador, para fines académicos.</p>
        <form className="form-perfil" onSubmit={guardar} noValidate>
          {[
            ['nombre', 'Nombre', 'text'],
            ['email', 'Correo electrónico', 'email'],
            ['telefono', 'Teléfono (9 dígitos)', 'tel']
          ].map(([name, label, type]) => (
            <div className="grupo-input-perfil" key={name}>
              <label htmlFor={`${name}Perfil`}>{label}</label>
              <input
                id={`${name}Perfil`} type={type} name={name}
                value={datos[name]} onChange={cambiar} required={name !== 'telefono'}
              />
            </div>
          ))}
          {aviso && <p className={`mensaje-${aviso.tipo}`} role="status">{aviso.texto}</p>}
          <div className="caja-boton-derecha">
            <button type="submit" className="btn-marron btn-guardar">Guardar cambios</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Perfil
