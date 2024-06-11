import React from 'react';
import './Rating.css';

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => (
        <i key={index} className={`fa-solid fa-star ${index < rating ? 'filled' : ''}`}></i>
      ))}
    </div>
  );
};

export default Rating;
