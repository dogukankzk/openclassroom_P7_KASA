import React from 'react';
import { useParams } from 'react-router-dom';
import './AccommodationDetail.css';
import data from '../../data.json';

const AccommodationDetail = () => {
  const { id } = useParams();
  const accommodation = data.find((acc) => acc.id === id);

  if (!accommodation) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <div className="accommodation-detail">
      <h1>{accommodation.title}</h1>
      <img src={accommodation.cover} alt={accommodation.title} />
      <p>{accommodation.description}</p>
      <p>Location: {accommodation.location}</p>
      <p>Rating: {accommodation.rating}</p>
      <p>Host: {accommodation.host.name}</p>
      <ul>
        {accommodation.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <div>
        {accommodation.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default AccommodationDetail;
