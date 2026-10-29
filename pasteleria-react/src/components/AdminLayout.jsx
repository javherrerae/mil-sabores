import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom'
import { cerrarSesion, esAdmin } from '../lib/authDemo'

import '../css/bootstrap.min.css'

const enlaces = [
  { to: '/admin', texto: 'Dashboard' },
  { to: '/admin/ordenes', texto: 'Órdenes' },
  { to: '/admin/productos', texto: 'Productos' },
  { to: '/admin/categorias', texto: 'Categorías' },
  { to: '/admin/usuarios', texto: 'Usuarios' },
  { to: '/admin/reportes', texto: 'Reportes' },
  { to: '/admin/perfil', texto: 'Perfil' }
]

function AdminLayout({ children }) {
  // logica
  const navigate = useNavigate()

  function salir() {
    cerrarSesion()
    navigate('/login')
  }

  // Solo el administrador puede ver el panel
  if (!esAdmin()) {
    return <Navigate to="/login" replace />
  }

  // render
  return (
    <div
      className="d-flex my-3 rounded overflow-hidden shadow-sm"
      style={{ minHeight: '80vh' }}
    >
      <aside
        className="bg-dark text-white p-3 d-flex flex-column"
        style={{ width: '230px' }}
      >
        <h2 className="h5 mb-4">Mil Sabores Admin</h2>

        <nav className="nav flex-column gap-1 flex-grow-1">
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.to}
              to={enlace.to}
              end={enlace.to === '/admin'}
              className={({ isActive }) =>
                'nav-link text-white rounded' + (isActive ? ' bg-primary' : '')
              }
            >
              {enlace.texto}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="btn btn-light mb-2">
          Tienda
        </Link>
        <button type="button" className="btn btn-danger" onClick={salir}>
          Cerrar sesión
        </button>
      </aside>

      <main className="flex-grow-1 bg-light p-4">{children}</main>
    </div>
  )
}

export default AdminLayout