import React, { Component } from 'react';
import FriendCard from '../shared-components/friend-card/friend-card.js';
import './friends.scss'

class Friends extends Component {

  render() {

    let friends = [
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
        {
            "image":"https://i.imgflip.com/1ekvvz.jpg",
            "name": "Darth Vader"
        },
    ]

    return (
      <div className="container">
        <div className="row justify-content-around justify-content-xs-center align-items-center">
         {/* Another Component */}
                {
                    friends.map((item, idx) => 
                        <div key={idx} className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                          <FriendCard friend={item} />
                        </div>
                    )
                }
        </div>
      </div>
    );
  }
}

export default Friends;