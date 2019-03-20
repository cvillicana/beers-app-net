import React from 'react';
import './friend-card.scss';

import ProfilePicture from '../profile-picture/profile-picture';

const FriendCard = ({friend}) => (
    <div className="card-friend">
        <div className="center-auto">
            <ProfilePicture img={friend.image}></ProfilePicture>
            <p className="text-center title">{friend.name}</p>
            <p className="text-center subtitle">Subtitle</p>
        </div>
    </div>
);

export default FriendCard;