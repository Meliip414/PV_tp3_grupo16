const CardProyecto = ({ proyecto, verDetalle, eliminarProyecto }) => {

 return (
        <article className="card">
            <h3>{proyecto.titulo}</h3>
            <p>Categoría: {proyecto.categoria}</p>
            <p>Estado: {proyecto.estado}</p>

            <button
                className="boton-accion"
                onClick={() => verDetalle(proyecto)}
            >
                Ver Detalle
            </button>
            <button
                className="btn-eliminar"
                onClick={() => eliminarProyecto(proyecto)}
            >
                Eliminar
            </button>

        </article>

    );

};

export default CardProyecto;