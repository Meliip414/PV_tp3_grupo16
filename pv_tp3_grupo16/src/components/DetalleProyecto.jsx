const DetalleProyecto = ({ proyecto, cerrarDetalle }) => {

    if (!proyecto) return null;

    return (
        <div className="detalle-overlay">

            <div className="detalle-contenedor">

                <h2>{proyecto.titulo}</h2>

                <p>
                    <strong>Categoría:</strong> {proyecto.categoria}
                </p>

                <p>
                    <strong>Estado:</strong> {proyecto.estado}
                </p>

                <h3>Descripción</h3>

                <p>{proyecto.descripcion}</p>

                <h3>Recursos</h3>

                <ul>
                    <li>
                        PDF: {proyecto.recursos.pdf}
                    </li>

                    <li>
                        Drive: {proyecto.recursos.drive}
                    </li>

                    <li>
                        GitHub: {proyecto.recursos.github}
                    </li>
                </ul>

                <h3>Equipo</h3>

                <ul>
                    {proyecto.equipo.map((miembro, index) => (
                        <li key={index}>
                            {miembro.nombre} - {miembro.rol}
                        </li>
                    ))}
                </ul>

                <button
                    className="boton-accion"
                    onClick={cerrarDetalle}
                >
                    Cerrar
                </button>

            </div>

        </div>
    );
};

export default DetalleProyecto;