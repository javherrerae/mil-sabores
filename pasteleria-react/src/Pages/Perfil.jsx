function Perfil() {

    return(

        <>
        
          <main className="contenedor-principal layout-cuenta">

      {/* <!-- Columna Izquierda: Menú Lateral --> */}
      <div className="columna-sidebar">
        <h2 className="titulo-cuenta">Mi cuenta</h2>

        <aside className="sidebar-cuenta">
          <a href="perfil.html" className="item-sidebar activo">Mis datos</a>
          <a href="historial-pedidos.html" className="item-sidebar">Mis pedidos</a>
          <a href="#" className="item-sidebar">Direcciones</a>
          <a href="#" className="item-sidebar">Metodos de Pago</a>
          <a href="#" className="item-sidebar">Preferencias</a>
          <a href="login.html" className="item-sidebar">Cerrar Sesión</a>
        </aside>
      </div>

      {/* <!-- Columna Derecha: Formulario de Información Personal --> */}
      <div className="columna-contenido">
        <h2 className="titulo-cuenta">Información Personal</h2>

        {/* <!-- Validación de Edición de Perfil --> */}
        <form id="formPerfil" className="form-perfil" novalidate>

          <div className="grupo-input-perfil">
            <label for="nombrePerfil">Nombre</label>
            <input type="text" id="nombrePerfil" value="Javier Herrera Espinoza" required/>
          </div>

          <div className="grupo-input-perfil">
            <label for="emailPerfil">Correo Electronico</label>
            <input type="email" id="emailPerfil" value="j.herrera@duocuc.cl" required/>
          </div>

          <div className="grupo-input-perfil">
            <label for="telefonoPerfil">Telefono</label>
            <input type="tel" id="telefonoPerfil" value="912345678" required/>
          </div>

          {/* <!-- Contenedor de mensajes de error/éxito --> */}
          <div id="mensajePerfil" className="mensaje-oculto"></div>

          <div className="caja-boton-derecha">
            <button type="submit" className="btn-marron btn-guardar">Guardar Cambios</button>
          </div>
        </form>
      </div>

    </main>
        
        </>
    )
    
}
export default Perfil