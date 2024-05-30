import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/logo/kasa_red.svg" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/about">Acceuil</Link></li>
          <li><Link to="/contact">A propos</Link></li>
          {/* Ajoutez d'autres liens ici */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
