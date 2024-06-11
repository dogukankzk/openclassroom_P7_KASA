import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccommodationCard from '../../components/AccommodationCard/AccommodationCard';
import Banner from '../../components/Banner/Banner';
import data from '../../data.json';
import BannerImage from "../../assets/image/accueil.png"
import './Home.css';

const Home = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    setAccommodations(data);
  }, []);

  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" image={BannerImage}/>
      <div className="accommodation-list">
        {accommodations.map((accommodation) => (
          <Link to={`/accommodation/${accommodation.id}`} key={accommodation.id}>
            <AccommodationCard accommodation={accommodation} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
