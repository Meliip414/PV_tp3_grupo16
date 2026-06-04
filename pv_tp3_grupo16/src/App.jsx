import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
//import Proyectos from "./views/Proyectos";
//import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () =>{

    return (
        <Container>
            <header>
                <h1>TRABAJO PRACTICO N3</h1>
                <h1>-------------------------------</h1>
            </header>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Container>
        
    )

}

export default App;