function TarjetaResumen({ titulo, valor, detalle, color }) {
  return (
    <div className={`card text-white bg-${color} h-100`}>
      <div className="card-body">
        <h3 className="h6">{titulo}</h3>
        <p className="display-6 mb-1">{valor}</p>
        <small>{detalle}</small>
      </div>
    </div>
  )
}

export default TarjetaResumen