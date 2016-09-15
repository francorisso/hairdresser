import React from 'react';
import { Link } from 'react-router';

const App = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Peluqueria</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/personal">Personal</Link></li>
          <li><Link to="/settings">Configuración</Link></li>
        </ul>
      </div>
    </nav>
    <section className="container">
    {!!props.children && React.cloneElement(props.children, props)}
    </section>
  </div>
);

export default App;
