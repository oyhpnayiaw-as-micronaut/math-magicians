import React from 'react';
import { NavLink } from 'react-router-dom';

import 'styles/Navbar.css';

const Navbar = () => {
  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Calculator',
      path: 'calculator',
    },
    {
      name: 'Quote',
      path: 'quote',
    },
  ];

  const className = ({ isActive }) => {
    if (isActive) {
      return 'nav-link active';
    }

    return 'nav-link';
  };

  return (
    <header className="header">
      <h1>
        <NavLink className="logo" to="/">
          Math Magicians
        </NavLink>
      </h1>
      <nav>
        <ul className="nav-link-container">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink className={className} to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
