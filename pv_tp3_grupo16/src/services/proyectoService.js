const gestionProyecto = (() => {
    let proyectos = [
        { id: 1, titulo: "Desarrollo de Sitio Web", categoria: "Desarrollo", estado: "En curso",
            descripcion: "Este proyecto consiste en el desarrollo de un sitio web utilizando HTML y CSS. El objetivo principal es crear una página organizada y funcional que permita mostrar información de manera clara y accesible. Durante el desarrollo se aplicaron conceptos básicos como estructura de páginas, uso de etiquetas semánticas, enlaces y estilos visuales. Además, se trabajó en la presentación del contenido para lograr una mejor experiencia de usuario.",
            visibilidad: true
        },
        { id: 2, titulo: "Creacion de papel reciclado", categoria: " Aprendizaje", estado: "Finalizado",
            descripcion: "Este proyecto consiste en la elaboración de papel reciclado a partir de materiales en desuso como hojas de cuadernos, revistas y diarios. El objetivo principal es reutilizar  estos residuos para darles una nueva vida en forma de productos  útiles como libretas, cuadernos o tarjetas,  fomentando así el cuidado del medio ambiente. Durante el desarrollo del proyecto se investigaron distintos métodos de fabricación y se realizaron pruebas prácticas en laboratorio, logrando mejorar aspectos como la textura, el grosor y la calidad del papel obtenido. Además, se analizaron los beneficios del reciclaje, destacando la reducción del consumo de agua, energía y emisiones contaminantes, así como la importancia de promover prácticas sostenibles en la sociedad.",
            visibilidad: false
        },
        { id: 3, titulo: "Control de Matriz LED 8x8 con Arduino", categoria: "Aprendizaje", estado: "Finalizado",
            descripcion: "Este proyecto consiste en el uso de una matriz de LEDs de 8x8 controlada con Arduino en el simulador Tinkercad. El objetivo es encender un solo LED y poder moverlo en distintas direcciones utilizando cuatro pulsadores. El LED comienza en la esquina inferior izquierda y puede desplazarse hacia arriba, abajo, izquierda o derecha. Si se mantiene presionado un botón, la velocidad de movimiento aumenta. Además, el sistema está programado para que el LED no pueda salir de los límites de la matriz.",
            visibilidad: true  
        },
        { id: 4, titulo: "Combate por turnos", categoria: "Desarrollo", estado: "Finalizado",
            descripcion: "Este proyecto consiste en el desarrollo de un sistema de combate por turnos utilizando programación orientada a objetos. En este tipo de sistema, los personajes actúan de forma ordenada, realizando acciones como atacar o defenderse en cada turno. Se implementaron clases y objetos para representar a los personajes, cada uno con atributos como vida y ataque, y métodos que definen sus acciones. El objetivo es simular una batalla simple donde los participantes se enfrentan hasta que uno gana, aplicando conceptos básicos de programación.",
            visibilidad: true  
        },
        { id: 5, titulo: "Control manual LED RGB", categoria: "Aprendizaje", estado: "Finalizado",
            descripcion: "Este proyecto consiste en controlar un LED RGB utilizando Arduino y un conjunto de pulsadores. Cada color (rojo, verde y azul) puede modificarse de forma individual, permitiendo ajustar su intensidad. Para manejar el sistema se utilizan botones: unos permiten aumentar o disminuir el brillo y otros seleccionar el color que se quiere modificar. Además, se usa un display de 7 segmentos para mostrar el nivel de intensidad en valores del 0 al 9 y una letra H. También hay indicadores LED que muestran qué color está siendo modificado en cada momento.",
            visibilidad: true 
        }
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
        
    }   
  const buscarProyecto = (tituloBuscado) => {

        return proyectos.filter(
            proyecto => proyecto.titulo.includes(tituloBuscado)
        );

    };
    

 return { obtenerProyectos, agregarProyecto, buscarProyecto, eliminarProyecto };

}
)();

export default gestionProyecto;