import React from 'react';
import './Banner.css';


const Banner = ({image,title}) => {
  return (
    <div className='banner'>
        <p>{title}</p>
        <img src={image} alt="banniere" />
    </div>
  );
};



export default Banner;