function Faq() {

    return(

        <>
         <main className="contenedor-principal" style={{flexDirection: 'column', alignItems: 'center', paddingTopp: '20px'}}>

      <div style={{width: '100%', maxWidth: '800px'}}>
        <h2 className="titulo-centrado" style={{fontSize: '45px', marginBottom: '50px'}}>Preguntas Frecuentes</h2>

        <div className="bloque-faq">
          <h3 className="pregunta-faq">1. ¿Con cuánto tiempo de anticipación debo hacer mi pedido?</h3>
          <p className="respuesta-faq">Para asegurar la frescura y calidad de nuestros productos, solicitamos que los
            pedidos de catálogo se realicen con al menos 48 horas de anticipación. Si necesitas una torta con diseño
            personalizado, el plazo mínimo es de 5 días hábiles.</p>
        </div>

        <div className="bloque-faq">
          <h3 className="pregunta-faq">2. ¿Realizan despachos a domicilio?</h3>
          <p className="respuesta-faq">¡Sí! Realizamos despachos a toda la Región Metropolitana. El costo del envío se
            calcula automáticamente en el Checkout (paso de pago) dependiendo de tu comuna. También puedes seleccionar
            la opción de "Retiro en Tienda" sin costo adicional.</p>
        </div>

        <div className="bloque-faq">
          <h3 className="pregunta-faq">3. ¿Qué métodos de pago aceptan?</h3>
          <p className="respuesta-faq">Aceptamos tarjetas de crédito y débito (Webpay), transferencias bancarias y pagos a
            través de aplicaciones móviles (Mach, MercadoPago). Todos los pagos están encriptados y son 100% seguros.
          </p>
        </div>

        <div className="bloque-faq">
          <h3 className="pregunta-faq">4. ¿Tienen opciones para personas con restricciones alimentarias?</h3>
          <p className="respuesta-faq">Absolutamente. En nuestro catálogo puedes usar los filtros laterales para encontrar
            fácilmente nuestras líneas exclusivas de tortas Sin Azúcar, Sin Gluten y Veganas. Cuidamos estrictamente la
            contaminación cruzada en nuestra cocina.</p>
        </div>

        <div className="bloque-faq">
          <h3 className="pregunta-faq">5. ¿Cómo funciona el beneficio para estudiantes?</h3>
          <p className="respuesta-faq">Si eres estudiante de Duoc UC, al registrarte con tu correo institucional
            (@duocuc.cl) obtendrás automáticamente beneficios especiales en tu Perfil, incluyendo la promoción de una
            torta gratis durante el mes de tu cumpleaños.</p>
        </div>

      </div>

    </main>
        
        </>
    )
    
}

export default Faq