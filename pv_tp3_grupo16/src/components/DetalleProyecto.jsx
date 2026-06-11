import { useParams, Link } from 'react-router-dom';
import gestionProyecto from '../services/proyectoService';

const DetalleProyecto = () => {

    const { id } = useParams();

    const proyectos = gestionProyecto.obtenerProyectosVisibles();

    const proyecto = proyectos.find(
        p => p.id === Number(id)
    );

    if (!proyecto) {
        return (
            <div className="detalle-contenedor">
                <h2>Proyecto no encontrado</h2>

                <Link
                    to="/proyectos"
                    className="boton-accion"
                >
                    Volver a Proyectos
                </Link>
            </div>
        );
    }

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
                        PDF: <a
                            href={proyecto.recursos.pdf || null}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {proyecto.recursos.pdf ? "abrir pdf" : "no disponible"}
                        </a>
                    </li>

                    <li>
                        Drive: <a
                            href={proyecto.recursos.drive || null}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {proyecto.recursos.drive ? "abrir enlace" : "no disponible"}
                        </a>
                    </li>

                    <li>
                        GitHub: <a
                            href={proyecto.recursos.github || null}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {proyecto.recursos.github ? "abrir enlace" : "no disponible"}
                        </a>
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

                <Link
                    to="/proyectos"
                    className="boton-accion"
                >
                    Cerrar Detalle
                </Link>

            </div>

        </div>
    );
};

export default DetalleProyecto;