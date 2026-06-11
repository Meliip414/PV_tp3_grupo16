import { Container, Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usuariosService from '../services/usuariosService';
import { UsuarioContext } from '../context/UsuarioContext';
import { useContext } from 'react';

const Login = () => {
    const { guardarSesion } = useContext(UsuarioContext);
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formularioIncompleto = !usuario.trim() || !password.trim();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const encontrado = await usuariosService.login(usuario, password);
            guardarSesion(encontrado);
            navigate('/proyectos');
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
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

                        <Button
                            type="submit"
                            disabled={loading || formularioIncompleto}
                        >
                            {loading ? 'Verificando...' : 'Ingresar'}
                        </Button>

                    </Form>

                </Card.Body>

            </Card>

        </Container>
    );
};

export default Login;