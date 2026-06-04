import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardProyecto = ({ proyecto, verDetalle, eliminar }) => {

 return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src=""/>
            <Card.Body>
            <Card.Title>{proyecto.titulo}</Card.Title>
            <Card.Text> Categoría: {proyecto.categoria}   
            </Card.Text>
            <Card.Text> Estado: {proyecto.estado}</Card.Text>
            <Button
                variant="info"
                onClick={() => verDetalle(proyecto)}

            >
                Ver Detalle
            </Button>
            
            <Button
                  variant="danger"
                onClick={() => eliminar(proyecto.id)}
            >
                Eliminar
            </Button>
        </Card.Body>
        </Card>

    );

};

export default CardProyecto;