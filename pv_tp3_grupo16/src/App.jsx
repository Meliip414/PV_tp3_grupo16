import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () =>{

    return (
        <Container>
            <header>
                <h1>TRABAJO PRACTICO N3</h1>
                <h1>-------------------------------</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </Container>
        
    )

}

export default App;