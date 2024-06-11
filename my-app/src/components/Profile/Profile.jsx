import React from 'react';
import './Profile.css';

const Profile = ({ host }) => {
  return (
    <div className="profile">
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
};

export default Profile;
