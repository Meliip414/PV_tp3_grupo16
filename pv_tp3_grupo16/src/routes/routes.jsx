import { createBrowserRouter } from "react-router-dom";
import Inicio from "../views/Inicio";
import App from "../App";
import PerfilUsuario from "../views/PerfilUsuario";
import Proyectos from "../views/Proyectos";
import DetalleProyecto from '../components/DetalleProyecto';
import RutaProtegida from '../components/RutaProtegida';



const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>404 NOT FOUND</h1>,
        children: [
            { index: true, element: <Inicio /> },
            { path: 'proyectos', 
                element: (<RutaProtegida><Proyectos /></RutaProtegida>),
                children: [
                    { path: ':id', element: <DetalleProyecto /> },
                ],
            },
            { path: 'perfil', element: (<RutaProtegida><PerfilUsuario /></RutaProtegida>) },
        ],
    }
]);

export default routes;