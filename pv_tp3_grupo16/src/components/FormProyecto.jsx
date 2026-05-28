import { useState } from "react";

const FormProyecto = ({ onAgregar, onBuscar}) => {
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


    const { titulo, categoria, estado, descripcion, pdfNombre, drive, github, integrantes } = proyectoForm;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProyectoForm({
            ...proyectoForm,
            [name]: value
        });
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
        return integrantes.split(",").map(item => {
            const partes = item.split("-");
            const nombre = partes[0] ? partes[0].trim() : "Sin nombre";
            const rol = partes[1] ? partes[1].trim() : "Integrante";
            return { nombre, rol };
        }).filter(miembro => miembro.nombre !== "" && miembro.nombre !== "Sin nombre");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!pdfNombre && !drive.trim() && !github.trim()) {
            alert("Por favor, subí un archivo PDF o poné un enlace (Drive/GitHub).");
            return;
        }

        if (descripcion.trim().length < 50) {
            alert("Por favor, ingresá una descripción válida y detallada (mínimo 50 caracteres).");
            return;
        }

        if (!integrantes.trim()) {
            alert("Por favor, agregá al menos un integrante.");
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

    return (
        <div className="formulario">
           
            
            <h3>AGREGAR NUEVO PROYECTO</h3>
            <form onSubmit={handleSubmit}>
                
                <input type="text" placeholder="Título" name="titulo" value={titulo} onChange={handleChange} required />
                <input type="text" placeholder="Categoría" name="categoria" value={categoria} onChange={handleChange} required />
                <input type="text" placeholder="Estado (Ej: En curso)" name="estado" value={estado} onChange={handleChange} required />
                <textarea placeholder="Descripción extendida" name="descripcion" value={descripcion} onChange={handleChange} required />

                <div className="campo-archivo">
                    <label>Subir Documento PDF:</label>
                    <input 
                        type="file" 
                        id="input-file-pdf"
                        accept=".pdf" 
                        onChange={handleFileChange} 
                    />
                    {pdfNombre && <p className="archivo-seleccionado">Seleccionado: {pdfNombre}</p>}
                </div>

                <input type="url" placeholder="Enlace de Google Drive:" name="drive" value={drive} onChange={handleChange} />
                <input type="url" placeholder="Enlace de GitHub:" name="github" value={github} onChange={handleChange} />

                <input 
                    type="text" 
                    placeholder="Integrantes: (Marisa - Líder)" 
                    name="integrantes" 
                    value={integrantes} 
                    onChange={handleChange} 
                />

                <button type="submit" className="btn-agregar">
                    AGREGAR PROYECTO
                </button>
            </form>
            
             <h3>BUSCAR PROYECTO</h3>
            <input
                type="text"
                onChange={handleBuscar}
                placeholder="Buscar proyecto"
            />
        </div>
    );
};



export default FormProyecto;