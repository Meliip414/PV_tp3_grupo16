import { Container, Card, ListGroup } from 'react-bootstrap';
import Navegacion from '../components/Nav';

const PerfilUsuario = () => {
    return (

        <Container className="mt-4">
            <Navegacion />

            <Card>

                <Card.Header>
                    Perfil de Usuario
                </Card.Header>

                <ListGroup variant="flush">

                    <ListGroup.Item>
                        Nombre: Manuelita
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Rol: Estudiante
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Institución: Facultad de Ingeniería
                    </ListGroup.Item>

                </ListGroup>

            </Card>

        </Container>
    );
};

export default PerfilUsuario;