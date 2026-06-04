import '../css/index.css';
import proyectoService from '../services/proyectoService';
import { useEffect, useState, useRef } from 'react';
import FormProyecto from '../components/FormProyecto';
import DetalleProyecto from '../components/DetalleProyecto';
import ListarProyectos from '../components/ListarProyectos';
import RegistroActividad from '../components/RegistroActividad';


const Proyectos = () => {

    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectosVisibles());
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [actualizacion, setActualizacion] = useState(null);
    const cantidadOriginal = useRef(proyectos.length);

    useEffect(() => {
        if (proyectos.length === cantidadOriginal.current) {
            return;
        }

        cantidadOriginal.current = proyectos.length;
        const fecha = new Date();
        setActualizacion(fecha);
    }, [proyectos]);



    const eliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectosVisibles());
    }

    const buscar = (texto) => {
        setBusqueda(texto);

    }
    const proyectosBuscados =
        busqueda === "" ? proyectos : proyectoService.buscarProyecto(busqueda);


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
            <FormProyecto
                onAgregar={agregar}
                onBuscar={buscar}
            />
            <ListarProyectos
                proyectos={proyectosBuscados}
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