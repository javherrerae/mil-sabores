import '../css/estilos.css'
import '../css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import ContadorCarrito from './ContadorCarrito'
import Buscador from './Buscador'

function Header() {

    return (
        <>
            {/* Cabecera principal */}
            <header className="cabecera-principal">

                {/* Caja buscador */}
                        <div className="Buscador">

                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            className="input-buscador"
                        />

                        <img
                            src="/img/icono-buscar.png"
                            alt="Buscar"
                            className="icono-lupa"
                        />

                        </div>
                {/* Logo */}
                <div className="logo">

                    <img
                        src="/img/logo-imagen.png"
                        alt="Logo Pastelería Mil Sabores"
                        className="img-logo"
                    />

                </div>

             
                        {/* Acciones */}
                        <div className="caja-acciones">

                        {/* Mi Cuenta */}
                        <Link to="/Perfil" className="enlace-accion">
                            Mi Cuenta

                            <img
                            src="/img/icono-cuenta.png"
                            alt="Usuario"
                            className="icono-accion"
                            />
                        </Link>

                        {/* Carrito */}
                        <Link to="/carrito" className="enlace-accion">
                            Carrito

                            <img
                            src="/img/icono-carrito.png"
                            alt="Carrito"
                            className="icono-accion"
                            />

                            <ContadorCarrito />
                        </Link>

                        </div>


            </header>
        </>
    )
}

export default Header