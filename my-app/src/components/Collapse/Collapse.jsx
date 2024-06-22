import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, text, isList = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <i className={`fa ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
      </div>
      {isOpen && (
        <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
          {isList ? (
            <ul>
              {text.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{text}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
