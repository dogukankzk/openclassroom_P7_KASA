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
      {images.length > 1 && (
        <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
      )}
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
        >
          {index === current && <img src={image} alt="gallery" className="image" />}
        </div>
      ))}
      {images.length > 1 && (
        <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
      )}
      <div className="slide-counter">
        {current + 1}/{images.length}
      </div>
    </div>
  );
};

export default Gallery;
