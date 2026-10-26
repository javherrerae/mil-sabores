import { useState } from 'react'
import ProductoCard from '../components/ProductoCard'
import FiltrosCatalogo from '../components/FiltrosCatalogo'
import { useSearchParams } from 'react-router-dom'
import { obtenerProductos } from '../data/productos'
import { agregarAlCarrito } from '../data/carrito'

import '../css/estilos.css'
import '../css/bootstrap.min.css'

const filtrosIniciales = {
  forma: [],
  tamano: [],
  diet: []
}

function Catalogo() {
  const [productos] = useState(obtenerProductos)
  const [filtros, setFiltros] = useState(filtrosIniciales)
  const [mensaje, setMensaje] = useState('')
  const [searchParams] = useSearchParams()

const busqueda = (searchParams.get('q') || '')
  .trim()
  .toLocaleLowerCase('es')

  // Seleccionar o desmarcar filtros
  function cambiarFiltro(campo, valor) {
    setFiltros((anteriores) => {
      const seleccionados = anteriores[campo]

      const nuevos = seleccionados.includes(valor)
        ? seleccionados.filter((item) => item !== valor)
        : [...seleccionados, valor]

      return {
        ...anteriores,
        [campo]: nuevos
      }
    })
  }

  // Limpiar todos los filtros
  function limpiarFiltros() {
    setFiltros({
      forma: [],
      tamano: [],
      diet: []
    })
  }

  // Filtrar productos según la selección
 const productosFiltrados = productos.filter((producto) => {

  // Comprobar coincidencia con el texto buscado
  const textoProducto = (
    producto.nombre + ' ' + producto.descripcion
  ).toLocaleLowerCase('es')

  const cumpleBusqueda = textoProducto.includes(busqueda)

  // Comprobar filtros seleccionados
  const cumpleFiltros = Object.keys(filtros).every((campo) => {
    return (
      filtros[campo].length === 0 ||
      filtros[campo].includes(producto[campo])
    )
  })

  return cumpleBusqueda && cumpleFiltros
})

  // Guardar el producto en localStorage
    // Agregar el producto al carrito y mostrar un mensaje
  function manejarAgregar(producto) {
    try {
      agregarAlCarrito(producto)
      setMensaje(`${producto.nombre} añadido al carrito`)
    } catch {
      setMensaje('No fue posible guardar el carrito')
    }
  }

  return (
    <main className="layout-catalogo container-fluid px-0">
      <FiltrosCatalogo
        filtros={filtros}
        onCambiar={cambiarFiltro}
        onLimpiar={limpiarFiltros}
      />

      <section className="vista-productos">
        <h2 className="titulo-catalogo">
          Nuestro Catálogo
        </h2>

        <p className="text-center">
          Mostrando {productosFiltrados.length} productos
        </p>

        {mensaje && (
          <p className="alert alert-success" role="status">
            {mensaje}
          </p>
        )}

        <div className="grilla-productos">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <ProductoCard
                key={producto.id}
                producto={producto}
                onAgregar={manejarAgregar}
              />
            ))
          ) : (
            <p>No hay productos con esos filtros.</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Catalogo
