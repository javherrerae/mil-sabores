
import { Link } from 'react-router-dom'
import '../css/estilos.css'
import '../css/bootstrap.min.css'

function Navegacion() {
  return (
    <nav className="menu-categorias">
      <Link to="/" className="icono-home">
        <img src="/img/icono-home.png" alt="Inicio" />
      </Link>

      <ul>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/tabla_porciones">Guía de Porciones</Link></li>
        <li><Link to="/Quienes-somos">Quiénes Somos</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Faq">FAQ</Link></li>
        <li><Link to="/Perfil">Mi Perfil</Link></li>
      </ul>
    </nav>
  )
}

export default Navegacion
