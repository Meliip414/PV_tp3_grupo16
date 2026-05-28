const RegistroActividad = ({ actualizacion }) => {
    if (actualizacion === null) return <>NO HAY REGISTRO DE ACTIVIDAD</>;

    const dia = actualizacion.toLocaleDateString();
    const hora = actualizacion.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return (
        <section>
            <h3>ACTIVIDAD RECIENTE</h3>
            <p fontFamily="cursive" >Última actualización de la lista: {dia} a las {hora}</p>
        </section>
    )
}

export default RegistroActividad;