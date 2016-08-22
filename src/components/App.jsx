import React, {PureComponent} from 'react';
import { Link } from 'react-router';

class App extends PureComponent {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Las Frigerio</Link>
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
        {!!this.props.children && React.cloneElement(this.props.children, this.props)}
        </section>
      </div>
    );
  }
}

export default App;
