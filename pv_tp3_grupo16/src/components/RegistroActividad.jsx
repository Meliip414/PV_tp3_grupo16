const RegistroActividad = ({ actualizacion }) => {

    if (actualizacion === null)
        return null;

    const dia = actualizacion.toLocaleDateString();

    const hora = actualizacion.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return (
        <section className="registro-actividad">

            <h3>ACTIVIDAD RECIENTE</h3>

            <p>
                Última actualización de la lista: {dia} a las {hora} hs.
            </p>

        </section>
    )
}

export default RegistroActividad;