/*
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navegacion = () => {

  return (

    <Navbar expand="lg" className="bg-body-tertiary">

      <Container>

        <Navbar.Brand href="#home">
          Gestor de Proyectos
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link href="#home">
              Inicio
            </Nav.Link>

            <Nav.Link href="#link">
              Proyectos
            </Nav.Link>

            <Nav.Link href="#link">
              Perfil
            </Nav.Link>

            <NavDropdown
              title="Opciones"
              id="basic-nav-dropdown"
            >

              <NavDropdown.Item href="#action/3.1">
                Agregar Proyecto
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Buscar Proyecto
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                Ver Detalle
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.4">
                Registro de Actividad
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}
*/

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
            <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;