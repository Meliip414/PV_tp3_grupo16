import { useState } from "react";

const FormProyecto = ({ onAgregar, onBuscar }) => {
    const [proyectoForm, setProyectoForm] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        recursos: "", 
        equipo: ""
    });

    const { titulo, categoria, estado, descripcion, recursos, equipo } = proyectoForm;

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevoProyecto = {
            titulo: titulo.trim(),
            categoria: categoria.trim(),
            estado,
            descripcion: descripcion.trim(),
            // Convierte textos separados por coma en arreglos limpios
            recursos: recursos.split(",").map(r => r.trim()).filter(Boolean),
            equipo: equipo.split(",").map(e => e.trim()).filter(Boolean),
            visibilidad: true
        };

        onAgregar(nuevoProyecto);


        setProyectoForm({
            titulo: "",
            categoria: "",
            estado: "",
            descripcion: "",
            recursos: "",
            equipo: ""
        });
    };

    return (
        <div className="formulario-contenedor">
            <h3>BUSCAR PROYECTO</h3>
            <input
            type="text"
            onChange={handleBuscar}
            placeholder="Buscar proyecto"
            />


   

   
            <h3>REGISTRAR NUEVO PROYECTO</h3>
             <form onSubmit={handleSubmit} className="form-layout">
                
                <label>Título del Proyecto *</label>
                <input
                    type="text"
                    name="titulo"
                    value={titulo}
                    onChange={handleChange}
                    placeholder="Ej: Control de Matriz LED"
                    required
                />

                <label>Categoría *</label>
                <input
                    type="text"
                    name="categoria"
                    value={categoria}
                    onChange={handleChange}
                    placeholder="Ej: Aprendizaje o Desarrollo"
                    required
                />

                <label>Estado del Proyecto *</label>
                <select 
                    name="estado" 
                    value={estado} 
                    onChange={handleChange} 
                    required
                >
                    <option value="">-- Seleccione un estado --</option>
                    <option value="En curso">En curso</option>
                    <option value="Finalizado">Finalizado</option>
                    <option value="Pendiente">Pendiente</option>
                </select>

                <label>Descripción Extendida * </label>
                <textarea
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    placeholder="Escriba una descripción detallada..."
                    minLength={50}
                    required
                />

                <label>Recursos </label>
                <input
                    type="text"
                    name="recursos"
                    value={recursos}
                    onChange={handleChange}
                    placeholder="Ej: PDF Manual, link GitHub, Drive"
                />

                <label>Equipo e Integrantes </label>
                <input
                    type="text"
                    name="equipo"
                    value={equipo}
                    onChange={handleChange}
                    placeholder="Ej: Juan (Dev), Ana (Diseño)"
                />

                <button type="submit" className="btn-enviar">
                    GUARDAR PROYECTO
                </button>
            </form>
        </div>
    );
};

export default FormProyecto;