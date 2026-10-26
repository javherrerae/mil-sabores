import '../css/estilos.css'
import '../css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import ContadorCarrito from './ContadorCarrito'
import Buscador from './Buscador'

function Header() {
  return (
    <header className="cabecera-principal">
      <Buscador />
      <div className="logo">
        <Link to="/" aria-label="Ir al inicio">
          <img src="/img/logo-imagen.png" alt="Logo Pastelería Mil Sabores" className="img-logo" />
        </Link>
      </div>
      <div className="caja-acciones">
        <Link to="/Perfil" className="enlace-accion">
          Mi Cuenta
          <img src="/img/icono-cuenta.png" alt="" className="icono-accion" />
        </Link>
        <Link to="/carrito" className="enlace-accion">
          Carrito
          <img src="/img/icono-carrito.png" alt="" className="icono-accion" />
          <ContadorCarrito />
        </Link>
      </div>
    </header>
  )
}

export default Header
