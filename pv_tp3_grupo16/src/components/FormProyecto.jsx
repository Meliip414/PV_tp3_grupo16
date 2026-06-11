import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const FormProyecto = ({ onAgregar, onBuscar }) => {
    const [proyectoForm, setProyectoForm] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        pdfNombre: "",
        drive: "",
        github: "",
        integrantes: ""
    });

    const [error, setError] = useState(null);
    const [erroresCampo, setErroresCampo] = useState({});

    const { titulo, categoria, estado, descripcion, pdfNombre, drive, github, integrantes } = proyectoForm;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProyectoForm({ ...proyectoForm, [name]: value });

        if (erroresCampo[name]) {
            setErroresCampo(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleBuscar = (e) => {
        onBuscar(e.target.value);
    };


    const handleFileChange = (e) => {
        const archivoReal = e.target.files[0];
        if (archivoReal) {
            setProyectoForm({
                ...proyectoForm,
                pdfNombre: URL.createObjectURL(archivoReal)
            });
        }
    };

    const procesarIntegrantesAObjetos = () => {
        if (!integrantes.trim()) return [];
        return integrantes.split(";").map(item => {
            const partes = item.split("-");
            const nombre = partes[0] ? partes[0].trim() : "Sin nombre";
            const rol = partes[1] ? partes[1].trim() : "Integrante";
            return { nombre, rol };
        }).filter(miembro => miembro.nombre !== "" && miembro.nombre !== "Sin nombre");
    };

    const validarFormProyecto = ({ titulo, categoria, estado, descripcion, pdfNombre, drive, github, integrantes }) => {
        const errores = {};

        if (!titulo.trim()) {
            errores.titulo = 'El título es obligatorio';
        }

        if (!categoria.trim()) {
            errores.categoria = 'La categoría es obligatoria';
        }

        if (!estado.trim()) {
            errores.estado = 'El estado es obligatorio';
        }

        if (!descripcion.trim()) {
            errores.descripcion = 'La descripción es obligatoria';
        } else if (descripcion.length < 50) {
            errores.descripcion = 'La descripción debe tener al menos 50 caracteres';
        }
        const tienePdf = pdfNombre.trim().length > 0;
        const tieneDrive = drive.trim().length > 0;
        const tieneGithub = github.trim().length > 0;

        if (!tienePdf && !tieneDrive && !tieneGithub) {
            errores.pdfNombre = 'Debe cargar un PDF o ingresar al menos un enlace';
            errores.drive = 'Debe cargar un PDF o ingresar al menos un enlace';
            errores.github = 'Debe cargar un PDF o ingresar al menos un enlace';
        }
        if (tieneDrive && !/^(https?:\/\/)?(www\.)?(drive\.google\.com|docs\.google\.com)\/.*$/i.test(drive.trim())) {
            errores.drive = 'El enlace de Google Drive no es válido';
        }

        if (tieneGithub && !/^(https?:\/\/)?(www\.)?github\.com\/.*$/i.test(github.trim())) {
            errores.github = 'El enlace de GitHub no es válido';
        }

        if (!integrantes.trim()) {
            errores.integrantes = 'Ingrese al menos un integrante';
        } else if (!/^[^;]+-[^;]+(;\s+[^;]+-[^;]+)*$/.test(integrantes.trim())) {
            errores.integrantes = 'El formato de integrantes es incorrecto. Use "Nombre - Rol" separado por "; "';
        }

        return errores;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        const errores = validarFormProyecto(proyectoForm);
        if (Object.keys(errores).length > 0) {
            setErroresCampo(errores);
            return;
        }

        const arregloEquipo = procesarIntegrantesAObjetos();

        const nuevoProyecto = {
            titulo: titulo.trim(),
            categoria: categoria.trim(),
            estado,
            descripcion: descripcion.trim(),
            recursos: {
                pdf: pdfNombre || null,
                drive: drive.trim() || null,
                github: github.trim() || null
            },
            equipo: arregloEquipo,
            visibilidad: true
        };

        onAgregar(nuevoProyecto);

        setProyectoForm({
            titulo: "",
            categoria: "",
            estado: "",
            descripcion: "",
            pdfNombre: "",
            drive: "",
            github: "",
            integrantes: ""
        });

        document.getElementById("input-file-pdf").value = "";
    };

    //const formularioIncompleto = !form.titulo.trim() || !form.categoria.trim() || !form.estado.trim() || !form.descripcion.trim() || !form.integrantes.trim();

    return (
        <Container>
            <Row>
                <Col>

                    <div className="formulario">

                        <h3>AGREGAR NUEVO PROYECTO</h3>

                        <Form onSubmit={handleSubmit} noValidate>
                            <fieldset>
                                <legend>Datos del Nuevo Proyecto</legend>

                                <Form.Control type="text" placeholder="Título" name="titulo" value={titulo} onChange={handleChange} required />
                                {erroresCampo.titulo && (
                                    <p style={{ color: '#ff6b6b', fontSize: '0.825em', marginTop: '0.25em' }}>
                                        {erroresCampo.titulo}
                                    </p>
                                )}
                                <Form.Select name="categoria" value={categoria} onChange={handleChange} required>
                                    <option value="">-- Selecciona una Categoría --</option>
                                    <option value="Desarrollo">Desarrollo</option>
                                    <option value="Aprendizaje">Aprendizaje</option>
                                    <option value="Computación">Computación</option>
                                </Form.Select>
                                {erroresCampo.categoria && (
                                    <p style={{ color: '#ff6b6b', fontSize: '0.825em', marginTop: '0.25em' }}>
                                        {erroresCampo.categoria}
                                    </p>
                                )}
                                <Form.Control type="text" placeholder="Estado (Ej: En curso)" name="estado" value={estado} onChange={handleChange} required />
                                {erroresCampo.estado && (
                                    <p style={{ color: '#ff6b6b', fontSize: '0.825em', marginTop: '0.25em' }}>
                                        {erroresCampo.estado}
                                    </p>
                                )}
                                <Form.Control as="textarea" placeholder="Descripción extendida" name="descripcion" value={descripcion} onChange={handleChange} required />
                                {erroresCampo.descripcion && (
                                    <p style={{ color: '#ff6b6b', fontSize: '0.825em', marginTop: '0.25em' }}>
                                        {erroresCampo.descripcion}
                                    </p>
                                )}

                                <div className="campo-archivo">
                                    <label style={{ fontSize: '1.15em' }}>Subir Documento PDF:</label>
                                    <Form.Control
                                        type="file"
                                        id="input-file-pdf"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                    />
                                    {pdfNombre && <p className="archivo-seleccionado">Seleccionado: {pdfNombre}</p>}
                                    {erroresCampo.pdfNombre && (
                                        <p style={{ color: '#ff6b6b', fontSize: '0.825em', marginTop: '0.25em' }}>
                                            {erroresCampo.pdfNombre}
                                        </p>
                                    )}
                                </div>

                                <Form.Control type="url" placeholder="Enlace de Google Drive:" name="drive" value={drive} onChange={handleChange} />
                                {erroresCampo.drive && (
                                    <p style={{ color: '#ff6b6b', fontSize: '0.825em', marginTop: '0.25em' }}>
                                        {erroresCampo.drive}
                                    </p>
                                )}
                                <Form.Control type="url" placeholder="Enlace de GitHub:" name="github" value={github} onChange={handleChange} />
                                {erroresCampo.github && (
                                    <p style={{ color: '#ff6b6b', fontSize: '0.825em', marginTop: '0.25em' }}>
                                        {erroresCampo.github}
                                    </p>
                                )}

                                <Form.Control
                                    type="text"
                                    placeholder="Integrantes: (Ej: Marisa - Líder; Ana - Fronted)"
                                    name="integrantes"
                                    value={integrantes}
                                    onChange={handleChange}
                                /> {erroresCampo.integrantes && (
                                    <p style={{ color: '#ff6b6b', fontSize: '0.825em', marginTop: '0.25em' }}>
                                        {erroresCampo.integrantes}
                                    </p>
                                )}

                                <Button type="submit" className="btn-agregar">
                                    AGREGAR PROYECTO
                                </Button>
                            </fieldset>
                        </Form>

                        <h3>BUSCAR PROYECTO</h3>
                        <Form.Control
                            type="text"
                            onChange={handleBuscar}
                            placeholder="Buscar proyecto"
                        />

                    </div>
                </Col>
            </Row>
        </Container>


    );
};



export default FormProyecto;