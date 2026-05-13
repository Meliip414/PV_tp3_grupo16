import '../css/index.css';
import proyectoService from '../services/proyectoService';
import { useState } from 'react';

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

     return(
        <div>

            <h2>Lista de proyectos</h2>

            {proyectos.map((proyecto) => (
                <div key={proyecto.id}>

                    <h3>{proyecto.titulo}</h3>

                    <p>Categoría: {proyecto.categoria}</p>

                    <p>Estado: {proyecto.estado}</p>

                </div>
            ))}

        </div>
    )
}

export default ListaProyectos;