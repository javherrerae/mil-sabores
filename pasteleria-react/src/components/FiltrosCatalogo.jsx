
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

function FiltrosCatalogo({ filtros, onCambiar, onLimpiar }) {
  return (
    <aside className="barra-filtros">
      <h3>Filtrar por</h3>

      {grupos.map((grupo) => (
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
