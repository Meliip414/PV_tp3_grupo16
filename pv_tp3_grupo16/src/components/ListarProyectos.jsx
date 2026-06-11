import CardProyecto from './CardProyecto';
import Alert from 'react-bootstrap/Alert';

const ListarProyectos = ({ proyectos, eliminar }) => {
    if (proyectos.length === 0) return <Alert variant="warning">No hay proyectos registrados.</Alert>;

    return (
        <section className='contenedor-tarjetas'>
            {
                proyectos.map((proyecto) => (
                    <CardProyecto
                        key={proyecto.id}
                        proyecto={proyecto}
  
                        eliminar={eliminar}
                    />
                ))
            }

        </section>
    );
};

export default ListarProyectos;