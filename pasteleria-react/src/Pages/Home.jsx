
import { Link } from 'react-router-dom'
import CarruselInicio from '../components/CarruselInicio'

import '../css/estilos.css'
import '../css/bootstrap.min.css'

function Home() {
  return (
    <main>

      {/* SECCIÓN PRINCIPAL: HERO */}
      <section className="hero">

        {/* Texto y botón principal */}
        <div className="hero-texto">

          <h1>Celebra la Dulzura de tu Vida</h1>

          <p className="subtitulo">
            Tortas y postres para cada ocasión especial
          </p>

          <div className="caja-botones">
            <Link to="/catalogo" className="btn-marron">
              Ver productos
            </Link>
          </div>

        </div>

        {/* Carrusel de imágenes con React */}
        <CarruselInicio />

      </section>


      {/* SECCIÓN: RECOMENDACIONES DEL MES */}
      <section className="recomendaciones">

        {/* Título de recomendaciones */}
        <div className="titulo-recomendaciones">

          <h2>Recomendaciones del Mes</h2>

          <p className="subtitulo-gris">
            Agosto: Cosecha de Frutos Rojos
          </p>

          <p className="subtitulo-gris">
            * Disponibles solo a pedido
          </p>

        </div>


        {/* TARJETAS DE PRODUCTOS */}
        <div className="tarjetas-recomendaciones">

          {/* Producto 1: Cosecha de corazones */}
          <div className="tarjeta-producto">

            <img
              src="/img/torta1.jpg"
              alt="Torta Cosecha de corazones"
            />

            <h3>Cosecha de corazones</h3>

            <p className="precio">$ 29.990</p>

            <p className="descripcion">
              Bizcocho de vainilla, mermelada de frutilla
              y toques de licor de ámbar. Adornada con
              variados frutos rojos.
            </p>

          </div>


          {/* Producto 2: Princesa del verano */}
          <div className="tarjeta-producto">

            <img
              src="/img/torta2.jpg"
              alt="Torta Princesa del verano"
            />

            <h3>Princesa del verano</h3>

            <p className="precio">$ 34.990</p>

            <p className="descripcion">
              Bizcocho de vainilla con mermelada de
              arándanos y frambuesas. Adornada con
              nuestra salsa de frutilla, frutos rojos
              y merengue.
            </p>

          </div>


          {/* Producto 3: Dulce sol */}
          <div className="tarjeta-producto">

            <img
              src="/img/torta3.jpg"
              alt="Torta Dulce sol"
            />

            <h3>Dulce sol</h3>

            <p className="precio">$ 24.990</p>

            <p className="descripcion">
              Bizcocho de vainilla con crema pastelera
              y manjar. Adornada con variados frutos rojos.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home
