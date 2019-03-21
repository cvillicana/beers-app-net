import React from 'react';
import './friend-week-card.scss';

// Components

import ProfilePicture from '../../shared-components/profile-picture/profile-picture'

const FriendWeekCard = ({friend}) => (
    <div className="container-card padding-top-30">
        <ProfilePicture width="150" img={friend.image}/>
        <p className="friend-name padding-top-15">{friend.name}</p>
        <p className="favorite-beer">{friend.favoriteBeer}</p>
    </div>
);

export default FriendWeekCard;