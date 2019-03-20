import React from 'react';
import './profile-picture.css'

const ProfilePicture = ({img, width = 100}) => (
    <img width={width} height={width} className="user" src={img} alt="profile"/>
);
export default ProfilePicture;