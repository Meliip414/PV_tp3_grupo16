import '../css/index.css';
import proyectoService from '../services/proyectoService';
import { useState } from 'react';

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );
    const [busqueda, setBusqueda] = useState("");
    const eliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
    }
    const buscar = (texto) => {
    setBusqueda(texto);
    if(texto === ""){
        setProyectos(proyectoService.obtenerProyectos());
    }else{
        setProyectos(proyectoService.buscarProyecto(texto));
    }
    }

     return(
        <div>

            <h2>Lista de proyectos</h2>

            <input
            type="text"
            placeholder="Buscar proyecto"
            value={busqueda}
            onChange={(e) => buscar(e.target.value)}
            />

            {proyectos.map((proyecto) => (
                <div key={proyecto.id}>

                    <h3>{proyecto.titulo}</h3>

                    <p>Categoría: {proyecto.categoria}</p>

                    <p>Estado: {proyecto.estado}</p>

                    <button onClick={() => eliminar(proyecto.id)}>
                       Eliminar
                    </button>

                </div>
            ))}

        </div>
    )
}

export default ListaProyectos;