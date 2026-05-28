const RegistroActividad = ( {fecha} ) => {
    if(fecha === null)  return null;

    const dia= fecha.toLocaleDateString();
    const hora= (fecha.toLocaleTimeString()).slice(0, -3);
    
    return (
        <section>
            <h3>ACTIVIDAD RECIENTE</h3>
            <p font-family="cursive" >Última actualización de la lista: {dia} a las {hora}</p>
        </section>
    )
}

export default RegistroActividad;