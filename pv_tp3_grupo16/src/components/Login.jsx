import { Container, Form, Button, Card } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import usuariosService from '../services/usuariosService';
import { UsuarioContext } from '../context/UsuarioContext';

const Login = () => {
    const { guardarSesion } = useContext(UsuarioContext);

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [erroresAtributo, setErroresAtributo] = useState({});

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        if (name === 'usuario') {
            setUsuario(value);
        }

        if (name === 'password') {
            setPassword(value);
        }

        if (erroresAtributo[name]) {
            setErroresAtributo(prev => ({ ...prev, [name]: null }));
        }
    };

    const ValidarFormulario = ({usuario, password}) => {
        const errores = {};

        if (!usuario.trim()){
            errores.usuario = "El DNI es obligatorio";
        } else if (!/^[\d]{1,3}\.?[\d]{3}\.?[\d]{3}$/.test(usuario)){
            errores.usuario = "El DNI no tiene un formato válido";
        }

        if (!password.trim()){
            errores.password = "La contraseña es obligatoria";
        }

        return errores;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const errores = ValidarFormulario({usuario, password});
        if (Object.keys(errores).length > 0) {
            setErroresAtributo(errores);
            return;
        }

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

    const formularioIncompleto = !usuario.trim() || !password.trim();

    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <h2>Iniciar Sesion</h2>
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group className="mb-3">
                            <Form.Label>DNI</Form.Label>
                            <Form.Control
                                type="text"
                                name="usuario"
                                value={usuario}
                                onChange={manejarCambio}
                            />
                            {erroresAtributo.usuario && (
                                <p style={{color: 'white', fontSize: '0.875em'}}>
                                    {erroresAtributo.usuario}
                                </p>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                //onChange={(e) => setPassword(e.target.value)}
                                onChange={manejarCambio}
                            />
                            {erroresAtributo.password && (
                                <p style={{color: 'white', fontSize: '0.875em'}}>
                                    {erroresAtributo.password}
                                </p>
                            )}
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