import CardProyecto from './CardProyecto';

const ListaProyectos = ({ proyectos, verDetalle, eliminar }) => {
    if (proyectos.length === 0) return <p>No hay proyectos registrados.</p>;

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

export default ListaProyectos;