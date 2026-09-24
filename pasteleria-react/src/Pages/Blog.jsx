function Blog() {

    return (

        <>
        
          <main className="contenedor-principal" style={{flexDirection: 'column', alignItems: 'center', paddingTop: '20px'}}>

      <div style={{textAlign: 'center', maxWidth: '800px', marginBottom: '40px'}}>
        <h2 className="titulo-centrado" style={{fontSize: '45px'}}>El Rincón del Pastelero</h2>
        <p style={{fontSize: '18px', lineHeight: '1.6', color: '#5D4037'}}>
          Descubre los mejores consejos, recetas y técnicas de repostería. Todo el contenido de esta sección
          es creado exclusivamente por los talentosos <strong>estudiantes de Gastronomía de Duoc UC</strong>.
        </p>
      </div>

      <div className="lista-articulos">

        {/* <!-- Artículo 1 --> */}
        <article className="articulo-completo">
          <span className="etiqueta-autor">Camila V. - Estudiante Duoc UC</span>
          <h3 className="titulo-articulo">El secreto para un bizcocho esponjoso</h3>
          <div className="img-articulo"><img src="img/blog1.png" alt="Bizcocho Perfecto"/></div>

          <p>La clave no está solo en batir las claras a punto de nieve, sino en la forma en la que integramos los
            ingredientes secos. Muchos principiantes cometen el error de usar la batidora eléctrica para mezclar la
            harina, lo que desarrolla el gluten y deja la masa dura.</p>
          <p><strong>Mis recomendaciones:</strong></p>
          <ul className="lista-consejos">
            <li>Tamiza la harina al menos dos veces antes de usarla.</li>
            <li>Usa una espátula de silicona (mezquino) para integrar la harina con movimientos envolventes, de abajo
              hacia arriba.</li>
            <li>Nunca abras la puerta del horno antes de los primeros 25 minutos, o el bizcocho se hundirá en el centro.
            </li>
          </ul>
        </article>

        {/* <!-- Artículo 2 --> */}
        <article className="articulo-completo">
          <span className="etiqueta-autor">Matías R. - Estudiante Duoc UC</span>
          <h3 className="titulo-articulo">Decoración con manga: Nivel Principiante</h3>
          <div className="img-articulo"><img src="img/blog2.png" alt="Decoración con manga"/></div>

          <p>¿Tus decoraciones quedan temblorosas? El pulso no es el único factor, la postura de tus manos y la
            consistencia de la crema son fundamentales para lograr rosetones perfectos en tus tortas tradicionales.</p>
          <p><strong>Sigue estos 3 pasos:</strong></p>
          <ul className="lista-consejos">
            <li><strong>Postura:</strong> Tu mano dominante (la que escribe) debe ir en la parte superior de la manga
              torciendo el plástico para hacer presión. Tu otra mano solo debe guiar suavemente la boquilla.</li>
            <li><strong>Temperatura:</strong> Si sientes que la crema está muy blanda, el calor de tus manos la está
              derritiendo. Métela 10 minutos al refrigerador antes de seguir decorando.</li>
            <li><strong>Práctica:</strong> Antes de decorar la torta real, practica tus rosetones sobre un papel
              mantequilla. ¡Puedes raspar la crema y volver a meterla a la manga sin desperdiciar nada!</li>
          </ul>
        </article>

      </div>
    </main>

        </>
    )
    
}

export default Blog