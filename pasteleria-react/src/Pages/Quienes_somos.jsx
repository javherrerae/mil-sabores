
import '../css/estilos.css'
import '../css/bootstrap.min.css'

function Quienes_somos() {
  return (
    <>
      <main
        className="contenedor-principal"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        {/* <!-- Sección de Historia --> */}
        <section className="caja-historia">
          <h2 className="titulo-centrado">Nuestra Historia</h2>
          <p>
            Pastelería 1000 Sabores celebra su 50 aniversario como un referente
            en la repostería chilena. Somos famosos por nuestra participación en
            un récord Guinness en 1995, cuando colaboramos en la creación de la
            torta más grande del mundo. Hoy, buscamos renovar nuestro sistema de
            ventas online para ofrecer una experiencia de compra moderna y
            accesible para todos nuestros clientes.
          </p>
        </section>

        {/* <!-- Sección de Misión y Visión --> */}
        <section className="contenedor-mision-vision">
          <article className="tarjeta-institucional">
            <h3>Nuestra Misión</h3>
            <p>
              Ofrecer una experiencia dulce y memorable a nuestros clientes,
              proporcionando tortas y productos de repostería de alta calidad
              para todas las ocasiones, mientras celebramos nuestras raíces
              históricas y fomentamos la creatividad en la repostería.
            </p>
          </article>

          <article className="tarjeta-institucional">
            <h3>Nuestra Visión</h3>
            <p>
              Convertirnos en la tienda online líder de productos de repostería
              en Chile, conocida por nuestra innovación, calidad y el impacto
              positivo en la comunidad, especialmente en la formación de nuevos
              talentos en gastronomía.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Quienes_somos;
