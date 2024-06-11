import React, { useState, useRef, useEffect } from 'react';
import './Collapse.css';

const Collapse = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </div>
      <div ref={contentRef} className="collapse-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Collapse;
