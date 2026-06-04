import { createBrowserRouter } from "react-router-dom";
import Inicio from "../views/Inicio";
import App2 from "../App";
import PerfilUsuario from "../views/PerfilUsuario";
import Proyectos from "../views/Proyectos";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App2 />,
        errorElement: <h1>404 NOT FOUND</h1>,
        children: [
            { index: true, element: <Inicio /> },
            { path: 'proyectos', element: <Proyectos /> },
            { path: 'perfil', element: <PerfilUsuario /> },
        ],
    }
]);

export default routes;