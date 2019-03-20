import React from 'react';
import './friend-week-card.scss';

// Components

import ProfilePicture from '../../shared-components/profile-picture/profile-picture'

const FriendWeekCard = ({friend}) => (
    <div className="container-card padding-top-30">
        <ProfilePicture width="150" img="https://i.imgflip.com/1ekvvz.jpg"/>
        <p className="friend-name padding-top-15">Friend Name</p>
        <p className="favorite-beer">Favorite Beer</p>
    </div>
);

export default FriendWeekCard;