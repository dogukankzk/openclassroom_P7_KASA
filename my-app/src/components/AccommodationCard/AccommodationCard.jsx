import React from 'react';
import './AccommodationCard.css';

const AccommodationCard = ({ accommodation }) => {
  return (
    <div className="accommodation-card">
      <img src={accommodation.cover} alt={accommodation.title} />
      <h2>{accommodation.title}</h2>
    </div>
  );
};

export default AccommodationCard;
