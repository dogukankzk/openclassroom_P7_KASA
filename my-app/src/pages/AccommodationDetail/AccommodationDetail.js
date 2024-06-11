import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import Collapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';
import Tags from '../../components/Tags/Tags';
import Profile from '../../components/Profile/Profile';
import Rating from '../../components/Rating/Rating';
import './AccommodationDetail.css';

const AccommodationDetail = () => {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);

  if (!accommodation) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <div>
      <div className="accommodation-detail">
        <Gallery images={accommodation.pictures} />
        <div className="accommodation-info">
          <div className="accommodation-title">
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
          </div>
          <Tags tags={accommodation.tags} />
          <div className="accommodation-host-rating">
            <Profile host={accommodation.host} />
            <Rating rating={accommodation.rating} />
          </div>
        </div>
        <div className="accommodation-collapse">
          <Collapse title="Description" text={accommodation.description} />
          <Collapse title="Équipements" text={accommodation.equipments.join(', ')} />
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetail;
