import { Link } from 'react-router-dom'
import TarjetaResumen from '../components/TarjetaResumen'

// Datos de ejemplo: más adelante vendrán de la base de datos
const resumen = [
  { titulo: 'Compras', valor: '1.234', detalle: 'Dato de ejemplo', color: 'primary' },
  { titulo: 'Productos', valor: '400', detalle: 'Dato de ejemplo', color: 'success' },
  { titulo: 'Usuarios', valor: '890', detalle: 'Dato de ejemplo', color: 'secondary' }
]

const accesos = [
  { to: '/admin/ordenes', titulo: 'Órdenes', texto: 'Gestión y seguimiento de las órdenes de compra.' },
  { to: '/admin/productos', titulo: 'Productos', texto: 'Inventario y detalle de los productos.' },
  { to: '/admin/categorias', titulo: 'Categorías', texto: 'Organización de los productos por categoría.' },
  { to: '/admin/usuarios', titulo: 'Usuarios', texto: 'Cuentas de usuario y su historial de compras.' },
  { to: '/admin/reportes', titulo: 'Reportes', texto: 'Informes de ventas y operaciones.' },
  { to: '/admin/perfil', titulo: 'Perfil', texto: 'Datos personales del administrador.' }
]

function AdminDashboard() {
  return (
    <div>
      <h1 className="h3">Dashboard</h1>
      <p className="text-muted">
        Resumen de la actividad de la tienda (datos de ejemplo).
      </p>

      <div className="row g-3 mb-4">
        {resumen.map((dato) => (
          <div className="col-12 col-md-4" key={dato.titulo}>
            <TarjetaResumen
              titulo={dato.titulo}
              valor={dato.valor}
              detalle={dato.detalle}
              color={dato.color}
            />
          </div>
        ))}
      </div>

      <div className="card mb-4">
        <div className="card-body text-center text-muted py-5">
          Aquí se mostrará el gráfico de ventas (próximamente).
        </div>
      </div>

      <div className="row g-3">
        {accesos.map((acceso) => (
          <div className="col-12 col-md-6 col-lg-4" key={acceso.to}>
            <Link
              to={acceso.to}
              className="card h-100 text-decoration-none text-dark"
            >
              <div className="card-body">
                <h2 className="h6">{acceso.titulo}</h2>
                <p className="mb-0 small text-muted">{acceso.texto}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard