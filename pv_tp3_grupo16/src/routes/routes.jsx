import { createBrowserRouter } from "react-router-dom";
import Inicio from "../views/Inicio";
import App from "../App";
import PerfilUsuario from "../views/PerfilUsuario";
import Proyectos from "../views/Proyectos";
import DetalleProyecto from '../components/DetalleProyecto';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>404 NOT FOUND</h1>,
        children: [
            { index: true, element: <Inicio /> },
            { path: 'proyectos', element: <Proyectos /> },
            { path: 'perfil', element: <PerfilUsuario /> },
            { path: 'proyectos/:id', element: <DetalleProyecto /> },
        ],
    }
]);

export default routes;