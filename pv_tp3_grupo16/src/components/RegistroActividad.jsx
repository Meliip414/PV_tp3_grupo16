import Alert from 'react-bootstrap/Alert';

const RegistroActividad = ({ actualizacion }) => {
    if (actualizacion === null) return <>NO HAY REGISTRO DE ACTIVIDAD</>;

    if (actualizacion === null)
        return null;

    const dia = actualizacion.toLocaleDateString([], {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const hora = actualizacion.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return (
        

           <Alert variant="info">
                Última actualización de la lista: {dia} a las {hora} hs.
            </Alert>


    )
}

export default RegistroActividad;