const gestionProyecto = (() => {
    let proyectos=[
        {id: 1, titulo:"Desarrollo de Sitio Web", categoria:"Desarrollo", estado:"En curso"},
        {id: 2, titulo:"Creacion de papel reciclado", categoria:" Aprendizaje", estado:"Finalizado"},
        {id: 3, titulo:"Control de Matriz LED 8x8 con Arduino", categoria:"Aprendizaje", estado:"Finalizado"},
        {id: 4, titulo:"Combate por turnos", categoria:"Desarrollo", estado:"Finalizado"},
        {id: 5, titulo:"Control manual LED RGB", categoria:"Aprendizaje", estado:"Finalizado"},
        
    ];

    const obtenerProyectos = () => {
        return [...proyectos];
    };

    const agregarProyecto = (p) => {
        const proyec = {...p,id: Date.now()
        };
        proyectos.push(proyec);
        }
        


       const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    };
  const buscarProyecto = (tituloBuscado) => {

        return proyectos.filter(
            proyecto => proyecto.titulo.includes(tituloBuscado)
        );

    };
    

 return { obtenerProyectos, agregarProyecto, buscarProyecto, eliminarProyecto };

}
)();

export default gestionProyecto;