import '../css/estilos.css'
import '../css/bootstrap.min.css'


function Tabla_porciones() {

    return (

        <>

            {/* <!-- Main de la Guía de Porciones --> */}
             <main className="contenedor-principal" style={{flexDirection: 'column', alignItems: 'center', paddingTop: '20px'}}>

                <div style={{width: '100%', maxWidth: '800px', textAlign: 'center'}}>
                    <h2 className="titulo-centrado" style={{fontSize: '45px', marginBottom: '20px'}}>Guía de Porciones</h2>
                    <p style={{ fontSize: '18px', color: '#5D4037', marginBottom: '40px', lineHeight: '1.6' }}>
                        ¿No estás seguro de qué tamaño elegir? Utiliza nuestra guía de referencia para calcular
                        la torta perfecta según la cantidad de invitados a tu celebración.
                    </p>

                    <div className="contenedor-tabla">
                        <table className="tabla-porciones">
                            <thead>
                                <tr>
                                    <th>Tamaño de Torta</th>
                                    <th>Diámetro Aprox.</th>
                                    <th>Cantidad de Porciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Pequeña</strong></td>
                                    <td>15 cm</td>
                                    <td>8 a 10 personas</td>
                                </tr>
                                <tr>
                                    <td><strong>Mediana</strong></td>
                                    <td>20 cm</td>
                                    <td>15 a 18 personas</td>
                                </tr>
                                <tr>
                                    <td><strong>Grande</strong></td>
                                    <td>26 cm</td>
                                    <td>25 a 30 personas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p style={{ fontSize: '14px', color: '#795548', marginTop: '20px', fontStyle: 'italic' }}>
                        * Las porciones están calculadas en base a un corte estándar de fiesta (aprox. 100 gramos por rebanada).
                    </p>
                </div>

            </main>

        </>
    )

}
export default Tabla_porciones