const Nav = () => {
   
   const menu = ["Inicio", "Proyectos", "Perfil"];

   return (
    <nav>
        <ul>
            {menu.map((men) => (
                <a key={men} href="#">{men}</a>
            ))}
        </ul>
    </nav>
   )

};

export default Nav;