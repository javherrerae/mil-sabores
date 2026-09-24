import '../css/estilos.css'
import '../css/bootstrap.min.css'

function Contacto() {

    return(

        <>
        
        <main className="contenedor-principal">
      <div className="caja-formulario">
        <h2 className="titulo-centrado">Contáctanos</h2>
        <p className="subtitulo-centrado">¿Tienes dudas o necesitas un pedido especial? Escríbenos.</p>

        <form id="formContacto" novalidate>

          <div className="grupo-input">
            <label for="nombreContacto">Nombre Completo *</label>
            <input type="text" id="nombreContacto" required placeholder="Ej: María González"/>
          </div>

          <div className="grupo-input">
            <label for="emailContacto">Correo Electrónico *</label>
            <input type="email" id="emailContacto" required placeholder="correo@ejemplo.com"/>
          </div>

          <div className="grupo-input">
            <label for="asuntoContacto">Asunto *</label>
            <input type="text" id="asuntoContacto" required placeholder="Ej: Consulta sobre tortas veganas"/>
          </div>

          <div className="grupo-input">
            <label for="mensajeContacto">Mensaje *</label>
            <textarea id="mensajeContacto" rows="5" required placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>

          {/* <!-- Contenedor para mostrar mensajes del sistema --> */}
          <div id="mensajeSistemaContacto" className="mensaje-oculto"></div>

          <button type="submit" className="btn-marron btn-bloque">Enviar Mensaje</button>
        </form>
      </div>
    </main>

        </>
    )
    
}
export default Contacto