import '../css/estilos.css'
import '../css/bootstrap.min.css'


function footer() {

    return (

        // <!-- Pie de página -->
        <footer className="pie-pagina">

            {/* <!-- Texto del centro --> */}
            <div className="copyright">
                <p>&copy; 2026 Pastelería Mil Sabores. Todos los derechos reservados.</p>
            </div>

            {/* <!-- Columnas del pie de pagina --> */}
            <div className="footer-columnas">
                <div className="columna">
                    <h4>Contáctanos</h4>
                    <p>contacto@milsabores.cl</p>
                    <p>+56 9 1234 5678</p>
                </div>

                <div className="columna">
                    <h4>Encuentranos en:</h4>
                    <div className="redes-sociales">
                        <span>Facebook</span>
                        <img src="img/icono-facebook.png" alt="Facebook" className="icono-red"/>
                    </div>
                    <div className="redes-sociales">
                        <span>Instagram</span>
                        <img src="img/icono-instagram.png" alt="Instagram" className="icono-red"/> 
                    </div>
                </div>

                <div className="columna">
                    <h4>Ubicación</h4>
                    <p>Av. Pasteleros #123</p>
                    <p>Mall Cenco Costanera</p>
                </div>
            </div>
        </footer>
    )

}

export default footer