import { Container, Row, Col, Card } from 'react-bootstrap';
import Login from '../components/Login';

const Inicio = () => {
    return (
        <Container className="mt-4">

            <h2>INICIO</h2>

            <p>
                Bienvenido al sistema de gestión de proyectos.
            </p>

            <Row>
                <Row>
                    <Col md={6}>
                        <Login />
                    </Col>
                </Row>
            </Row>

        </Container >
    );
};

export default Inicio;