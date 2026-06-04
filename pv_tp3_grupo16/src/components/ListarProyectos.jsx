import CardProyecto from './CardProyecto';
import Alert from 'react-bootstrap/Alert';

const ListarProyectos = ({ proyectos, verDetalle, eliminar }) => {
    if (proyectos.length === 0) return <Alert variant="warning">No hay proyectos registrados.</Alert>;

    return (
        <section className='contenedor-tarjetas'>
            {
                proyectos.map((proyecto) => (
                    <CardProyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                        verDetalle={verDetalle}
                        eliminar={eliminar}
                    />
                ))
            }

        </section>
    );
};

export default ListarProyectos;