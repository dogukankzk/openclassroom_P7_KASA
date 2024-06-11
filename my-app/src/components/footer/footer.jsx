import React from 'react';
import './Footer.css';
import FooterImage from "../../assets/image/kasa_white.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={FooterImage} alt="" />
        <p>© 2020 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
