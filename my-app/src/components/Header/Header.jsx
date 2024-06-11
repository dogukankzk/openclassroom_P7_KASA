import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import LogoImage from "../../assets/image/kasa_red.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={LogoImage} alt="logo acceuil" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''} 
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'active' : ''} 
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
