import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/general.css';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='message_erreur'>
      <h1>404</h1>
      <p className='message_erreur_p'>Oups! La page que vous recherchez n'existe pas.</p>
      <Link to="/" className='message_erreur_a'>Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default NotFound;
