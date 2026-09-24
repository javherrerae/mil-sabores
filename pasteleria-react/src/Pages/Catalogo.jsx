import '../css/estilos.css'
import '../css/bootstrap.min.css'

function Catalogo() {

    return (

        <>

            <main className="layout-catalogo">

                {/* <!-- Barra Lateral de Filtros --> */}
                <aside className="barra-filtros">
                    <h3>Filtrar por</h3>

                    <div className="grupo-filtro">
                        <h4>Forma</h4>
                        <label><input type="checkbox" className="filtro-cb cb-forma" value="cuadrada"/> Cuadradas</label>
                        <label><input type="checkbox" className="filtro-cb cb-forma" value="circular"/> Circulares</label>
                    </div>

                    <div className="grupo-filtro">
                        <h4>Tamaño</h4>
                        <label><input type="checkbox" className="filtro-cb cb-tamano" value="pequeno"/> Pequeño</label>
                        <label><input type="checkbox" className="filtro-cb cb-tamano" value="mediano"/> Mediano</label>
                        <label><input type="checkbox" className="filtro-cb cb-tamano" value="grande"/> Grande</label>
                    </div>

                    <div className="grupo-filtro">
                        <h4>Dietéticas</h4>
                        <label><input type="checkbox" className="filtro-cb cb-diet" value="sin-azucar"/> Sin Azúcar</label>
                        <label><input type="checkbox" className="filtro-cb cb-diet" value="sin-gluten"/> Sin gluten</label>
                        <label><input type="checkbox" className="filtro-cb cb-diet" value="veganas"/> Veganas</label>
                    </div>
                </aside>

                <div className="grilla-productos" id="contenedorProductos">

                    {/* Producto 1 */}
                    <div className="tarjeta-catalogo" data-id="p1" data-nombre="Yogurt Fresa" data-precio="22990"
                        data-imagen="img/tortas/tortap1.jpg" data-forma="circular" data-tamano="mediano" data-diet="tradicional">
                        <div className="img-torta"><img src="img/tortas/tortap1.jpg" alt="Yogurt Fresa"/></div>
                        <h3 className="fuente-artistica">Yogurt Fresa</h3>
                        <a href="detalle-producto.html?id=TT001" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Torta Circular de Yogurt sabor a fresa</a>
                        <p className="precio">$ 22.990</p>
                        <button className="btn-marron btn-agregar" style={{ marginTop: '15px', width: '100%' }}>Añadir al Carrito</button>
                    </div>

                    {/* Producto 2 */}
                    <div className="tarjeta-catalogo" data-id="p2" data-nombre="Torta Amor" data-precio="24990"
                        data-imagen="img/tortas/tortap2.jpg" data-forma="circular" data-tamano="grande" data-diet="tradicional">
                        <div className="img-torta"><img src="img/tortas/tortap2.jpg" alt="Torta Amor"/></div>
                        <h3 className="fuente-artistica">Torta Amor</h3>
                        <a href="detalle-producto.html?id=TT002" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Torta Circular de Mil Hojas con manjar</a>
                        <p className="precio">$ 24.990</p>
                        <button className="btn-marron btn-agregar" style={{ marginTop: '15px', width: '100%' }}>Añadir al Carrito</button>
                    </div>

                    {/* Producto 3 */}
                    <div className="tarjeta-catalogo" data-id="p3" data-nombre="Selva Negra" data-precio="20990"
                        data-imagen="img/tortas/tortap3.jpg" data-forma="circular" data-tamano="pequeno" data-diet="sin-azucar">
                        <div className="img-torta"><img src="img/tortas/tortap3.jpg" alt="Selva Negra"/></div>
                        <h3 className="fuente-artistica">Selva Negra</h3>
                        <a href="detalle-producto.html?id=TT003" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Torta Circular de Selva Negra</a>
                        <p className="precio">$ 20.990</p>
                        <button className="btn-marron btn-agregar" style={{ marginTop: '15px', width: '100%' }}>Añadir al Carrito</button>
                    </div>

                    {/* Producto 4 */}
                    <div className="tarjeta-catalogo" data-id="p1" data-nombre="Dulce Piña" data-precio="22990"
                        data-imagen="img/tortas/tortap4.jpg" data-forma="circular" data-tamano="mediano" data-diet="tradicional">
                        <div className="img-torta"><img src="img/tortas/tortap4.jpg" alt="Crema Piña"/></div>
                        <h3 className="fuente-artistica">Crema Piña</h3>
                        <a href="detalle-producto.html?id=TT004" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Torta Circular de Crema Piña</a>
                        <p className="precio">$ 22.990</p>
                        <button className="btn-marron btn-agregar" style={{ marginTop: '15px', width: '100%' }}>Añadir al Carrito</button>
                    </div>

                    {/* Producto 5 */}
                    <div className="tarjeta-catalogo" data-id="p2" data-nombre="Lúcuma Manjar" data-precio="24990"
                        data-imagen="img/tortas/tortap5.jpg" data-forma="circular" data-tamano="grande" data-diet="tradicional">
                        <div className="img-torta"><img src="img/tortas/tortap5.jpg" alt="Lúcuma Manjar"/></div>
                        <h3 className="fuente-artistica">Lúcuma Manjar</h3>
                        <a href="detalle-producto.html?id=TT005" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Torta Circular de Lúcumas y Manjar</a>
                        <p className="precio">$ 24.990</p>
                        <button className="btn-marron btn-agregar" style={{ marginTop: '15px', width: '100%' }}>Añadir al Carrito</button>
                    </div>

                    {/* Producto 6 */}
                    <div className="tarjeta-catalogo" data-id="p3" data-nombre="Trufa Chocolate" data-precio="20990"
                        data-imagen="img/tortas/tortap6.jpg" data-forma="circular" data-tamano="pequeno" data-diet="sin-azucar">
                        <div className="img-torta"><img src="img/tortas/tortap6.jpg" alt="Trufa Chocolate"/></div>
                        <h3 className="fuente-artistica">Trufa Chocolate</h3>
                        <a href="detalle-producto.html?id=TT006" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Torta Circular de Trufa Chocolate</a>
                        <p className="precio">$ 20.990</p>
                        <button className="btn-marron btn-agregar" style={{ marginTop: '15px', width: '100%' }}>Añadir al Carrito</button>
                    </div>
                </div>
            

        </main>
        
        </>
    )
}

export default Catalogo