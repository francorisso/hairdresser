import React from 'react';
import { Link } from 'react-router';

const links = [
  {
    link: '/',
    name: 'Home',
  },
  {
    link: '/services',
    name: 'Services',
  },
  {
    link: '/personal',
    name: 'Personal',
  },
  {
    link: '/settings',
    name: 'Settings',
  }];

const App = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Peluqueria</Link>
        </div>
        <ul className="nav navbar-nav">
          {links.map(item => <li>
            <Link to={item.link} activeClassName="active">{item.name}</Link>
          </li>)}
        </ul>
      </div>
    </nav>
    <section className="container">
    {!!props.children && React.cloneElement(props.children, props)}
    </section>
  </div>
);

export default App;
