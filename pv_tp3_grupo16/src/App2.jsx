import Proyectos from "./views/Proyectos";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App2 = () =>{

    return (
        <div>
            <header>
                <h1>TRABAJO PRACTICO N3</h1>
                <h1>-------------------------------</h1>
            </header>
            <Nav />
            <Header />
            <Proyectos />
            <Footer />
        </div>
        
    )

}

export default App2;