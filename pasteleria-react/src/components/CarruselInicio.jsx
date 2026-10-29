import { Carousel } from 'react-bootstrap'

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
  return (
    <div
      className="torta-central"
      style={{ maxWidth: '100%' }}
    >
      <Carousel controls={false} indicators={false} interval={5000}>
        {imagenes.map((imagen) => (
          <Carousel.Item key={imagen.id}>
            <img
              src={imagen.src}
              alt={imagen.alt}
              className="d-block w-100 rounded"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default CarruselInicio