import React from 'react';

const AccommodationCard = ({ accommodation }) => {
  return (
    <div className="accommodation-card">
      <img src={accommodation.cover} alt={accommodation.title} />
      <h2>{accommodation.title}</h2>
      <p>{accommodation.location}</p>
    </div>
  );
};

export default AccommodationCard;
