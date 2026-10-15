
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function Buscador() {
  const [busqueda, setBusqueda] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  // Sincronizar el buscador con la dirección del catálogo
  useEffect(() => {
    const parametros = new URLSearchParams(location.search)

    if (location.pathname.toLowerCase() === '/catalogo') {
      setBusqueda(parametros.get('q') || '')
    } else {
      setBusqueda('')
    }
  }, [location.pathname, location.search])

  function buscarProducto(evento) {
    evento.preventDefault()

    const texto = busqueda.trim()

    if (texto) {
      navigate(`/catalogo?q=${encodeURIComponent(texto)}`)
    } else {
      navigate('/catalogo')
    }
  }

  return (
    <form
      className="caja-buscador"
      role="search"
      onSubmit={buscarProducto}
    >
      <input
        type="search"
        placeholder="Buscar productos..."
        aria-label="Buscar productos"
        className="input-buscador"
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

      <button
        type="submit"
        aria-label="Buscar"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <img
          src="/img/icono-buscar.png"
          alt=""
          className="icono-lupa"
        />
      </button>
    </form>
  )
}

export default Buscador
