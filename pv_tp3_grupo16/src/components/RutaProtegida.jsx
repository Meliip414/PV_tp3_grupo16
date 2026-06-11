import { Navigate } from 'react-router-dom';
import { useUsuario } from '../hook/useUsuario';

const RutaProtegida = ({ children }) => {
    const { usuarioActivo } = useUsuario();

    if (!usuarioActivo) return <Navigate to="/" replace />;

    return children;
};

export default RutaProtegida;