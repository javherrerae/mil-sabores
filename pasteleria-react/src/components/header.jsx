import '../css/estilos.css'
import '../css/bootstrap.min.css'

function Header() {

    return (
        <>
            {/* Cabecera principal */}
            <header className="cabecera-principal">

                {/* Caja buscador */}
                <div className="caja-buscador">

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

                    <a href="login.html" className="enlace-accion">
                        Mi Cuenta

                        <img
                            src="/img/icono-cuenta.png"
                            alt="Usuario"
                            className="icono-accion"
                        />
                    </a>

                    <a href="carrito.html" className="enlace-accion">
                        Carrito

                        <img
                            src="/img/icono-carrito.png"
                            alt="Carrito"
                            className="icono-accion"
                        />
                    </a>

                </div>

            </header>
        </>
    )
}

export default Header