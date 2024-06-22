import React from 'react';
import ReactDOM from 'react-dom/client';  // Utilisez react-dom/client ici
import './assets/css/general.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Utilisez createRoot ici
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
