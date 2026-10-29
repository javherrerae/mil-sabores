
const grupos = [
  {
    titulo: 'Forma',
    campo: 'forma',
    opciones: [
      { valor: 'cuadrada', texto: 'Cuadradas' },
      { valor: 'circular', texto: 'Circulares' }
    ]
  },
  {
    titulo: 'Tamaño',
    campo: 'tamano',
    opciones: [
      { valor: 'pequeno', texto: 'Pequeño' },
      { valor: 'mediano', texto: 'Mediano' },
      { valor: 'grande', texto: 'Grande' }
    ]
  },
  {
    titulo: 'Dietéticas',
    campo: 'diet',
    opciones: [
      { valor: 'sin-azucar', texto: 'Sin azúcar' },
      { valor: 'sin-gluten', texto: 'Sin gluten' },
      { valor: 'veganas', texto: 'Veganas' }
    ]
  }
]

function FiltrosCatalogo({
  filtros,
  onCambiar,
  onLimpiar,
  categorias = [],
  soloOfertas,
  onSoloOfertas
}) {

  // El grupo de categorías se arma con los datos, no está escrito a mano
  const grupoCategoria = {
    titulo: 'Categoría',
    campo: 'categoria',
    opciones: categorias.map((categoria) => ({
      valor: categoria,
      texto: categoria
    }))
  }

  const todosLosGrupos = [grupoCategoria, ...grupos]
  
  return (
    <aside className="barra-filtros">
      <h3>Filtrar por</h3>

      {todosLosGrupos.map((grupo) => (
        <div className="grupo-filtro" key={grupo.campo}>
          <h4>{grupo.titulo}</h4>

          {grupo.opciones.map((opcion) => (
            <label key={opcion.valor}>
              <input
                type="checkbox"
                className="filtro-cb"
                value={opcion.valor}
                checked={filtros[grupo.campo].includes(opcion.valor)}
                onChange={() =>
                  onCambiar(grupo.campo, opcion.valor)
                }
              />
              {opcion.texto}
            </label>
          ))}
        </div>
      ))}

      <div className="grupo-filtro">
        <h4>Ofertas</h4>
        <label>
          <input
            type="checkbox"
            className="filtro-cb"
            checked={soloOfertas}
            onChange={(evento) => onSoloOfertas(evento.target.checked)}
          />
          Solo ofertas
        </label>
      </div>
      
      <button
        type="button"
        className="btn-marron"
        onClick={onLimpiar}
      >
        Limpiar filtros
      </button>
    </aside>
  )
}

export default FiltrosCatalogo
