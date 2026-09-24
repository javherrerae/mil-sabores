import '../css/estilos.css'
import '../css/bootstrap.min.css'

function Navegacion() {

    return (

        <>

            <nav className="menu-categorias">
                <a href="index.html" className="icono-home">
                    <img src="img/icono-home.png" alt="Inicio"/>
                </a>
                <ul>
                    <li><a href="products.html">Catálogo</a></li>
                    <li><a href="tabla_porciones.html">Guía de Porciones</a></li>
                    <li><a href="quienes-somos.html">Quiénes Somos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="perfil.html">Mi Perfil</a></li>
                </ul>
            </nav>


        </>
    )

}

export default Navegacion