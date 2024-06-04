import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="kasa_red.svg" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li className='acceuil_nav'><Link to="">Acceuil</Link></li>
          <li><Link to="">A propos</Link></li>
          {/* Ajoutez d'autres liens ici */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
