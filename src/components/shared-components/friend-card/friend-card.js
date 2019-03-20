import React from "react";
import "./friend-card.scss";
import ProfilePicture from "../profile-picture/profile-picture";
import Rating from "../../shared-components/rating/starRating.js";

const FriendCard = ({ friend }) => (
  <div className="card-friend">
    <div className="center-auto">
      <ProfilePicture img={friend.image} />
      <p className="text-center title">{friend.name}</p>
      <p className="text-center subtitle">Subtitle</p>
      <div className="text-center">
        <Rating ratingObj={friend.rating} />
      </div>
    </div>
  </div>
);

export default FriendCard;
