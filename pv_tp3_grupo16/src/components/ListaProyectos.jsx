import '../css/index.css';
import proyectoService from '../services/proyectoService';
import { useState } from 'react';

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );
    const [busqueda, setBusqueda] = useState("");

    const [titulo, setTitulo] = useState("");

    const [categoria, setCategoria] = useState("");

    const [estado, setEstado] = useState("");
 
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

    const agregar = () => {
    const nuevoProyecto = {
        titulo,
        categoria,
        estado
    };
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
    setTitulo("");
    setCategoria("");
    setEstado("");
    }

     return(
        <div>

            <h2>LISTA DE PROYECTOS</h2>

           <div className="buscador">
             <input
             type="text"
             placeholder="Buscar proyecto"
             value={busqueda}
             onChange={(e) => buscar(e.target.value)}
            />
            </div>

            <hr />

            <div className="contenedor-principal">

            <div className="formulario">
            <h3>AGREGAR PROYECTO</h3>

             <input
             type="text"
             placeholder="Título"
             value={titulo}
             onChange={(e) => setTitulo(e.target.value)}
            />

             <input
             type="text"
             placeholder="Categoría"
             value={categoria}
             onChange={(e) => setCategoria(e.target.value)}
            />

             <input
             type="text"
             placeholder="Estado"
             value={estado}
             onChange={(e) => setEstado(e.target.value)}
            />

            <button className="btn-agregar" onClick={agregar}>
            AGREGAR PROYECTO
            </button>
        </div>

        <div className="lista-cards">

        {proyectos.map((proyecto) => (
            <div className="card" key={proyecto.id}>

                <h3>{proyecto.titulo}</h3>

                <p>Categoría: {proyecto.categoria}</p>

                <p>Estado: {proyecto.estado}</p>

                <button
                    className="btn-eliminar"
                    onClick={() => eliminar(proyecto.id)}
                >
                    Eliminar
                </button>

            </div>
        ))}

    </div>

</div>
</div>
    )
}

export default ListaProyectos;