import { Link, useParams } from 'react-router-dom'

const secciones = [
  { clave: 'ordenes', titulo: 'Órdenes', descripcion: 'Gestión y seguimiento de todas las órdenes de compra.', espacio: 'la tabla de órdenes y sus boletas' },
  { clave: 'productos', titulo: 'Productos', descripcion: 'Administración del inventario y de los productos disponibles.', espacio: 'el inventario y el listado de productos críticos' },
  { clave: 'categorias', titulo: 'Categorías', descripcion: 'Organización de los productos por categoría.', espacio: 'la lista de categorías' },
  { clave: 'usuarios', titulo: 'Usuarios', descripcion: 'Gestión de cuentas de usuario y sus roles.', espacio: 'los usuarios y su historial de compras' },
  { clave: 'reportes', titulo: 'Reportes', descripcion: 'Informes detallados sobre las operaciones de la tienda.', espacio: 'los reportes de ventas' },
  { clave: 'perfil', titulo: 'Perfil', descripcion: 'Información personal del administrador.', espacio: 'los datos del perfil del administrador' }
]

function AdminSeccion() {
  // logica
  const { seccion } = useParams()
  const datos = secciones.find((item) => item.clave === seccion)

  if (!datos) {
    return (
      <div>
        <h1 className="h3">Sección no encontrada</h1>
        <Link to="/admin">Volver al Dashboard</Link>
      </div>
    )
  }

  // render
  return (
    <div>
      <h1 className="h3">{datos.titulo}</h1>
      <p className="text-muted">{datos.descripcion}</p>

      <div className="card">
        <div className="card-body text-center text-muted py-5">
          Aquí se mostrará {datos.espacio} (próximamente).
        </div>
      </div>
    </div>
  )
}

export default AdminSeccion