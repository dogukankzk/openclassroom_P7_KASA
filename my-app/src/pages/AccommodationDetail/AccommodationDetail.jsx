import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import Collapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';
import Tags from '../../components/Tags/Tags';
import Profile from '../../components/Profile/Profile';
import Rating from '../../components/Rating/Rating';
import NotFound from '../NotFound/NotFound'; 
import '../../assets/css/general.css';
import './AccommodationDetail.css';

const AccommodationDetail = () => {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);

  if (!accommodation) {
    return <NotFound />; // Affichez la page 404 si le logement n'est pas trouvé
  }

  return (
    <div className="accommodation-detail">
      <Gallery images={accommodation.pictures} />
      <div className="accommodation-info">
        <div className="accommodation-title">
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          <div className="accommodation-tags">
            <Tags tags={accommodation.tags} />
          </div>
        </div>
        <div className="accommodation-host-rating">
          <div className="accommodation-host">
            <Profile host={accommodation.host} />
          </div>
          <div className="accommodation-rating">
            <Rating rating={accommodation.rating} />
          </div>
        </div>
      </div>
      <div className="accommodation-collapse">
        <Collapse title="Description" text={accommodation.description} />
        <Collapse title="Équipements" text={accommodation.equipments} isList={true} />
      </div>
    </div>
  );
};

export default AccommodationDetail;
