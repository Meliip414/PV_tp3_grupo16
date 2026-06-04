import '../css/index.css';
import proyectoService from '../services/proyectoService';
import { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FormProyecto from '../components/FormProyecto';
import DetalleProyecto from '../components/DetalleProyecto';
import ListarProyectos from '../components/ListarProyectos';
import RegistroActividad from '../components/RegistroActividad';
import Navegacion from '../components/Nav';

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
        <Container className="mt-4">
            <Row className="mb-3">
                <Navegacion />

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Total de proyectos</Card.Title>
                            <Card.Text>12</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Proyectos en curso</Card.Title>
                            <Card.Text>5</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

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
        </Container>
    )
}
export default Proyectos;

/* <DetalleProyecto
    proyecto={proyectoSeleccionado}
    cerrarDetalle={cerrarDetalle}
/> */