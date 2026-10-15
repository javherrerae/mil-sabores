
import { useState } from 'react'

const imagenes = [
  {
    id: 1,
    src: '/img/generica1.jpg',
    alt: 'Torta decorativa 1'
  },
  {
    id: 2,
    src: '/img/generica2.jpg',
    alt: 'Torta decorativa 2'
  },
  {
    id: 3,
    src: '/img/generica3.jpg',
    alt: 'Torta decorativa 3'
  }
]

function CarruselInicio() {
  const [actual, setActual] = useState(0)

  function siguiente() {
    setActual((anterior) =>
      (anterior + 1) % imagenes.length
    )
  }

  function anterior() {
    setActual((anterior) =>
      (anterior - 1 + imagenes.length) % imagenes.length
    )
  }

  return (
    <div
      className="torta-central"
      style={{ maxWidth: '100%' }}
    >
      <div id="carruselHero" className="carousel slide">
        <div className="carousel-inner">

          {imagenes.map((imagen, indice) => (
            <div
              key={imagen.id}
              className={
                `carousel-item ${indice === actual ? 'active' : ''}`
              }
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="d-block w-100 rounded"
              />
            </div>
          ))}

        </div>
      </div>

      <div className="d-flex justify-content-center gap-2 mt-3">
        <button
          type="button"
          className="btn btn-outline-dark btn-sm"
          onClick={anterior}
        >
          Anterior
        </button>

        <span className="align-self-center">
          {actual + 1} / {imagenes.length}
        </span>

        <button
          type="button"
          className="btn btn-outline-dark btn-sm"
          onClick={siguiente}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default CarruselInicio
