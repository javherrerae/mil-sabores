
import { useState } from 'react'
import ProductoCard from '../components/ProductoCard'
import FiltrosCatalogo from '../components/FiltrosCatalogo'
import { useSearchParams } from 'react-router-dom'

import '../css/estilos.css'
import '../css/bootstrap.min.css'

// Productos originales de Mil Sabores
const productos = [
  {
    id: 'TT001',
    nombre: 'Yogurt Fresa',
    descripcion: 'Torta Circular de Yogurt sabor a fresa',
    precio: 22990,
    imagen: '/img/tortas/tortap1.jpg',
    forma: 'circular',
    tamano: 'mediano',
    diet: 'tradicional'
  },
  {
    id: 'TT002',
    nombre: 'Torta Amor',
    descripcion: 'Torta Circular de Mil Hojas con manjar',
    precio: 24990,
    imagen: '/img/tortas/tortap2.jpg',
    forma: 'circular',
    tamano: 'grande',
    diet: 'tradicional'
  },
  {
    id: 'TT003',
    nombre: 'Selva Negra',
    descripcion: 'Torta Circular de Selva Negra',
    precio: 20990,
    imagen: '/img/tortas/tortap3.jpg',
    forma: 'circular',
    tamano: 'pequeno',
    diet: 'sin-azucar'
  },
  {
    id: 'TT004',
    nombre: 'Crema Piña',
    descripcion: 'Torta Circular de Crema Piña',
    precio: 22990,
    imagen: '/img/tortas/tortap4.jpg',
    forma: 'circular',
    tamano: 'mediano',
    diet: 'tradicional'
  },
  {
    id: 'TT005',
    nombre: 'Lúcuma Manjar',
    descripcion: 'Torta Circular de Lúcumas y Manjar',
    precio: 24990,
    imagen: '/img/tortas/tortap5.jpg',
    forma: 'circular',
    tamano: 'grande',
    diet: 'tradicional'
  },
  {
    id: 'TT006',
    nombre: 'Trufa Chocolate',
    descripcion: 'Torta Circular de Trufa Chocolate',
    precio: 20990,
    imagen: '/img/tortas/tortap6.jpg',
    forma: 'circular',
    tamano: 'pequeno',
    diet: 'sin-azucar'
  }
]

const filtrosIniciales = {
  forma: [],
  tamano: [],
  diet: []
}

function Catalogo() {
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
  function agregarAlCarrito(producto) {
    try {
      const guardado = localStorage.getItem('carritoMilSabores') 
      const datos = guardado ? JSON.parse(guardado) : []
      const carrito = Array.isArray(datos) ? datos : []

      const existente = carrito.find(
        (item) => item.id === producto.id
      )

      if (existente) {
        existente.cantidad += 1
      } else {
        carrito.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          imagen: producto.imagen,
          cantidad: 1
        })
      }

      localStorage.setItem(
        'carritoMilSabores',
        JSON.stringify(carrito)
      )
      
      window.dispatchEvent(new Event('carrito-actualizado'))

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
                onAgregar={agregarAlCarrito}
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
