import '../css/index.css';
import proyectoService from '../services/proyectoService';
import { useEffect, useState } from 'react';
import FormProyecto from './FormProyecto';
import DetalleProyecto from './DetalleProyecto';
import ListarProyectos from './ListarProyectos';
import RegistroActividad from './RegistroActividad';

const Proyectos = () => {

const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectosVisibles());
const [busqueda, setBusqueda] = useState("");
const [proyectoSeleccionado,setProyectoSeleccionado] = useState(null);
const [actualizacion, setActualizacion ] = useState(null);

useEffect(()=>{
    const fecha= new Date();
    setActualizacion(fecha);
}, [proyectos]);



const eliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectosVisibles());
}

const buscar = (texto) => {
    setBusqueda(texto);
    if (texto === "") {
        setProyectos(proyectoService.obtenerProyectosVisibles());
    } else {
        setProyectos(proyectoService.buscarProyecto(texto));
    }
}

const agregar = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectosVisibles());
}

const cerrarDetalle = () => {
    setProyectoSeleccionado(null);
}

const verDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
}

return (
    <div>
       <RegistroActividad
            actualizacion={actualizacion}
        />
       <FormProyecto
            onAgregar={agregar}
            onBuscar={buscar}
       /> 
        <ListarProyectos
            proyectos={proyectos}
            verDetalle={verDetalle}
            eliminar={eliminar}
         />
        <DetalleProyecto 
            proyecto={proyectoSeleccionado}
            cerrarDetalle={cerrarDetalle} 
        />
        <RegistroActividad
            actualizacion={actualizacion}
        />
    </div>
)
}
export default Proyectos;