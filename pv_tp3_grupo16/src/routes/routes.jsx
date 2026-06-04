import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import App2 from "../App2";
import PerfilUsuario from "../views/PerfilUsuario";
import Proyectos from "../views/Proyectos";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App2 />,
        errorElement: <h1>404 NOT FOUND</h1>,
        children: [
            { index: true, element: <Dashboard />, },
            { path: 'proyectos', element: <Proyectos />, },
            { path: 'perfil', element: <PerfilUsuario />, },
        ],
    }
]);

export default routes;