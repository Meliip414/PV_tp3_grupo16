import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container className="mt-4">

            <h2>INICIO</h2>

            <p>
                Bienvenido al sistema de gestión de proyectos.
            </p>

            <Row>

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Total de proyectos</Card.Title>
                            <Card.Text>12</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Proyectos en curso</Card.Title>
                            <Card.Text>5</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    );
};

export default Dashboard;