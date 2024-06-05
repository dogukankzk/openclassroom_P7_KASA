import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccommodationCard from '../../components/AccommodationCard/AccommodationCard';
import Banner from '../../components/banner/banner';
import data from '../../data.json';
import './Home.css';

const Home = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    setAccommodations(data);
  }, []);

  return (
    <div className="home">
      <Banner/>
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
