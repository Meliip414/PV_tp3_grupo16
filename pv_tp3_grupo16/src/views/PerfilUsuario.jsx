import { Container, Card, ListGroup } from 'react-bootstrap';
import Navegacion from '../components/Nav';
import { UsuarioContext } from '../context/UsuarioContext';
import { useContext } from 'react';

const PerfilUsuario = () => {

    const { usuarioActivo } = useContext(UsuarioContext);

    if (!usuarioActivo) return <p>No hay sesión activa.</p>;

    return (

        <Container className="mt-4">
            <Navegacion />

            <Card className="perfil-card">

                <Card.Header>
                    PERFIL DE USUARIO
                </Card.Header>

                <ListGroup variant="flush">
                    <ListGroup.Item>
                        Nombre: {usuarioActivo.nombre}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        dni: {usuarioActivo.dni}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Rol: {usuarioActivo.rol}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Institución: {usuarioActivo.institucion}
                    </ListGroup.Item>

                </ListGroup>

            </Card>

        </Container>
    );
};

export default PerfilUsuario;