import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="gallery">
      <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
        >
          {index === current && <img src={image} alt="gallery" className="image" />}
        </div>
      ))}
      <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
    </div>
  );
};

export default Gallery;
