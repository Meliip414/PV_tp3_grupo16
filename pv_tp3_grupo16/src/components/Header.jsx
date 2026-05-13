const Header = () => {
  return (
    <header>
      <h1>AuraProyect - Bienvenido</h1>
      <h5>El espacio donde tus proyectos educativos toman forma y aura ;D</h5>
      
      <h4>
        AuraProyect es una plataforma educativa creada para ayudar con la creacion y 
        gestion de distintos proyectos del país. Aquí podra subir sus proyectos 
        escolares desde cualquier parte de Argentina
      </h4>
      
      <h2>TUS ESTADISTICAS</h2>
      <div className="card">
        <ul>
          <li><p>Nro de proyectos: 109</p></li>
          <li><p>Tareas para hoy: 23</p></li>
          <li><p>Mensajes pendientes: 99</p></li>
        </ul>
      </div>

      <h2>NOVEDADES</h2>
      <div className="card">
        <ul>
          <p>_______</p>
          <p>Subiste tp6.pdf - hace 5min</p>
          <p>_______</p>
          <p>Abriste proyectof.html - hace 2h</p>
          <p>_______</p>
          <p>Dejaste un comentario en trabajox.txt</p>
        </ul>
      </div>
    </header>
  );
};

export default Header;