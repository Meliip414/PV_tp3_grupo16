import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import  routes  from './routes/routes.jsx';
import { UsuarioProvider } from './context/UsuarioContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <RouterProvider router={routes} />
    </UsuarioProvider>
  </StrictMode>,
)