import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import './Apropos.css';
import Banner from '../../components/Banner/Banner';
import BannerImage from '../../assets/image/about.png'
import aboutData from '../../about.json'; 

const Apropos = () => {
  return (
    <div>
      <div className="about">
        <Banner title="" image={BannerImage}/>
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} text={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Apropos;
