import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormularioCheckout from '../components/FormularioCheckout'
import ResumenPedido from '../components/ResumenPedido'
import { obtenerCarrito, vaciarCarrito } from '../data/carrito'
import { OPCIONES_ENVIO, crearOrden } from '../data/ordenes'
import { obtenerSesion } from '../lib/authDemo'

import '../css/estilos.css'
import '../css/bootstrap.min.css'

const datosIniciales = {
  nombre: '',
  direccion: '',
  fecha: '',
  envio: 'domicilio',
  tarjeta: '',
  vencimiento: '',
  cvv: ''
}

function Checkout() {
  // logica
  const navigate = useNavigate()
  const sesion = obtenerSesion()

  const [items] = useState(obtenerCarrito)
  const [datos, setDatos] = useState(datosIniciales)
  const [error, setError] = useState('')

  // Totales: el envío depende de la opción elegida
  const opcionEnvio = OPCIONES_ENVIO.find((opcion) => opcion.valor === datos.envio)
  const costoEnvio = opcionEnvio.costo
  const subtotal = items.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  )
  const total = subtotal + costoEnvio

  function cambiar(evento) {
    const { name, value } = evento.target
    setDatos((valores) => ({ ...valores, [name]: value }))
    setError('')
  }

  function pagar(evento) {
    evento.preventDefault()

    const tarjeta = datos.tarjeta.replace(/\s/g, '')

    const hoy = new Date()
    const fechaHoy = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`

    if (datos.nombre.trim().length < 3) {
      setError('El nombre debe tener al menos 3 caracteres.')
      return
    }
    if (datos.direccion.trim().length < 5) {
      setError('Ingresa una dirección de despacho válida.')
      return
    }
    if (!datos.fecha || datos.fecha <= fechaHoy) {
      setError('La fecha de entrega debe ser desde mañana en adelante.')
      return
    }
    if (!/^\d{16}$/.test(tarjeta)) {
      setError('El número de tarjeta debe tener exactamente 16 dígitos.')
      return
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(datos.vencimiento)) {
      setError('El vencimiento debe tener el formato MM/AA.')
      return
    }
    if (!/^\d{3}$/.test(datos.cvv)) {
      setError('El CVV debe tener 3 dígitos.')
      return
    }

    // Simulación: las tarjetas que terminan en 0000 son rechazadas
    if (tarjeta.endsWith('0000')) {
      navigate('/compra-fallida')
      return
    }

    // Pago aprobado: guardamos la orden (sin número de tarjeta ni CVV)
    const orden = crearOrden({
      email: sesion.email,
      nombre: datos.nombre.trim(),
      direccion: datos.direccion.trim(),
      fechaEntrega: datos.fecha,
      envio: datos.envio,
      items,
      subtotal,
      costoEnvio,
      total,
      ultimos4: tarjeta.slice(-4)
    })

    vaciarCarrito()
    navigate(`/compra-exitosa/${orden.id}`)
  }

  // Sin sesión no se puede pagar
  if (!sesion) {
    return (
      <main className="container py-5 text-center">
        <h1>Inicia sesión para pagar</h1>
        <p>Necesitamos saber quién realiza la compra.</p>
        <Link to="/login" className="btn-marron">
          Iniciar sesión
        </Link>
      </main>
    )
  }

  // Sin productos no hay nada que pagar
  if (items.length === 0) {
    return (
      <main className="container py-5 text-center">
        <h1>Tu carrito está vacío</h1>
        <p>Agrega productos antes de pagar.</p>
        <Link to="/catalogo" className="btn-marron">
          Ver catálogo
        </Link>
      </main>
    )
  }

  // render
  return (
    <main className="container py-4">
      <h1 className="text-center mb-4">Finalizar Compra</h1>

      <div className="row">
        <div className="col-12 col-lg-7 mb-4">
          <FormularioCheckout
            datos={datos}
            onCambiar={cambiar}
            onEnviar={pagar}
            error={error}
          />
        </div>

        <div className="col-12 col-lg-5">
          <ResumenPedido
            items={items}
            subtotal={subtotal}
            costoEnvio={costoEnvio}
            total={total}
          />
        </div>
      </div>
    </main>
  )
}

export default Checkout