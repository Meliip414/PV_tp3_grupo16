import { Container, Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Proyectos');
    };

    return (

        <Container className="mt-4">

            <Card>

                <Card.Body>

                    <h2>Iniciar Sesion</h2>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Usuario o correo
                            </Form.Label>

                            <Form.Control
                                type="text"
                                value={usuario}
                                onChange={(e) =>
                                    setUsuario(e.target.value)
                                }
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Contraseña
                            </Form.Label>

                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                        </Form.Group>

                        <Button type="submit">
                            Ingresar
                        </Button>

                    </Form>

                </Card.Body>

            </Card>

        </Container>
    );
};

export default Login;