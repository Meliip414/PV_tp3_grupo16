import '../css/index.css';
import proyectoService from '../services/proyectoService';
import { useState } from 'react';
import FormProyecto from './FormProyecto';
import DetalleProyecto from './DetalleProyecto';

const Proyectos = () => {
const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectosVisibles()
);

const [busqueda, setBusqueda] = useState("");
const [titulo, setTitulo] = useState("");
const [categoria, setCategoria] = useState("");
const [estado, setEstado] = useState("");
const [proyectoSeleccionado,setProyectoSeleccionado] = useState(null);


const eliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
}

const buscar = (texto) => {
    setBusqueda(texto);
    if (texto === "") {
        setProyectos(proyectoService.obtenerProyectos());
    } else {
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



const cerrarProyecto = () => {
    setProyectoSeleccionado(null);
}

const verDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
}

return (
    <div>
        <FormProyecto 
        
        />
        <DetalleProyecto 
            proyecto={proyectoSeleccionado}
            cerrarProyecto={cerrarProyecto} 
        />
    </div>
)
}
export default Proyectos;