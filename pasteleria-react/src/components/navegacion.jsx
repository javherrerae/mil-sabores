import '../css/estilos.css'
import '../css/bootstrap.min.css'

function Navegacion() {

    return (

        <>

            <nav className="menu-categorias">


                    {/* CLICKER DE IMAGEN A INICIO O INDEX DE LA PAGINA */}
                <a href="/" className="icono-home">

                    <img src="img/icono-home.png" alt="Inicio"/>
                </a>
                <ul>
                
                        {/* CLICKER A RUTA CATOLOGO */}
                    <li><a href="/catalogo">Catálogo</a></li>
                    <li><a href="/Tabla_porciones">Guía de Porciones</a></li>
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