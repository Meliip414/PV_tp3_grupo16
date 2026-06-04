import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardProyecto = ({ proyecto, eliminar }) => {

 return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src=""/>
            <Card.Body>
            <Card.Title>{proyecto.titulo}</Card.Title>
            <Card.Text> Categoría: {proyecto.categoria}
            <Card.Text> Estado: {proyecto.estado}</Card.Text> 
            </Card.Text>
        <Button
            as={Link}
            to={`/proyectos/${proyecto.id}`}
            variant="info"
        >
            Ver Detalle
        </Button>
            
            <Button
                  className="btn-eliminar-custom"
                onClick={() => eliminar(proyecto.id)}
            >
                Eliminar
            </Button>
        </Card.Body>
        </Card>

    );

};

export default CardProyecto;