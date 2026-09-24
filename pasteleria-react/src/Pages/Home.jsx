import '../css/estilos.css'
import '../css/bootstrap.min.css'

function Home() {

    return (

        <>
            <main>

                {/* <!-- Main del inicio --> */}
                {/* <!-- Sección Titulo principal --> */}
                <section className="hero">

                    {/* <!-- Texto y botones--> */}
                    <div className="hero-texto">
                        <h1>Celebra la Dulzura de tu Vida</h1>
                        <p className="subtitulo">Tortas y postres para cada ocasión especial</p>

                        <div className="caja-botones">
                            <a href="products.html" className="btn-marron">Ver productos</a>
                        </div>
                    </div>

                    <div className="hero-imagen"/>

                        {/* <!--!!!! TODO LO DE AQUI PARA ABAJO ESTÁ COPIADO DE BOOTSTRAP, HAY QUE REVISARLO !!!!--> */}
                        {/* <!-- ToDo: Arreglar el carrusel pq las fotos están desalineadas --> */}
                        {/* <!-- Carrusel Bootstrap --> */}
                        <div id="carruselHero" className="carousel slide torta-central" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="img/generica1.jpg" className="d-block w-100 rounded" alt="Torta decorativa 1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/generica2.jpg" className="d-block w-100 rounded" alt="Torta decorativa 2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/generica3.jpg" className="d-block w-100 rounded" alt="Torta decorativa 3"/>
                                </div>
                            </div>
                        </div>
                </section>


                {/* <!-- Sección Recomendaciones del Mes --> */}
                <section className="recomendaciones">
                    <div className="titulo-recomendaciones">
                        <h2>Recomendaciones del Mes</h2>
                        <p className="subtitulo-gris">Agosto: Cosecha de Frutos Rojos</p>
                        <p className="subtitulo-gris">* Disponibles solo a pedido</p>
                    </div>

                    <div className="tarjetas-recomendaciones">

                        {/* <!-- Tarjeta 1 --> */}
                        <div className="tarjeta-producto">
                            <img src="img/torta1.jpg" alt="Cosecha de corazones"/>
                                <h3>Cosecha de corazones</h3>
                                <p className="precio">$ 29.990</p>
                                <p className="descripcion">Bizcocho de Vainilla, mermelada de frutilla y toques de licor de ambar. Adornada con
                                    varios frutos rojos.</p>
                        </div>

                        {/* <!-- Tarjeta 2 --> */}
                        <div className="tarjeta-producto">
                            <img src="img/torta2.jpg" alt="Princesa del verano"/>
                                <h3>Princesa del verano</h3>
                                <p className="precio">$ 34.990</p>
                                <p className="descripcion">Bizcocho de Vainilla con mermelada de arándanos y frambuesas. Adornada con nuestra
                                    salsa de frutilla junto a frutos rojos y merengue.</p>
                        </div>

                        {/* <!-- Tarjeta 3 --> */}
                        <div className="tarjeta-producto">
                            <img src="img/torta3.jpg" alt="Dulce sol"/>
                                <h3>Dulce sol</h3>
                                <p className="precio">$ 24.990</p>
                                <p className="descripcion">Bizcocho de vainilla con crema pastelera y manjar. Adornada con variados frutos rojos.
                                </p>
                        </div>

                    </div>
                </section>
            </main>

        </>
    )

}

export default Home