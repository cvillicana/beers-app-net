import React, { Component } from 'react';
import FriendCard from '../shared-components/friend-card/friend-card.js';
import './friends.scss'
import AddForm from './addForm/AddForm'

class Friends extends Component {

    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }
    friend = {
        name : "",
        favoriteBeer : "",
        rating : 0
      }

    addFriendFunc(){
        alert('Hola viajero');
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let friends = [
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
            {
                "image": "https://i.imgflip.com/1ekvvz.jpg",
                "name": "Darth Vader"
            },
        ]


        return (
            <div className="container">
                <div className="row justify-content-around justify-content-xs-center align-items-center">
                    {/*Another component*/}
                    {
                        friends.map((item, idx) =>
                            <div key={idx} className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                                <FriendCard friend={item} />
                            </div>
                        )
                    }
                </div>
                    {/*change this button for the fab one*/}
                <button onClick={this.toggleModal}>
                        Add friend
                    </button>

                    <AddForm show={this.state.isOpen}
                        onClose={this.toggleModal}
                        addFriend={this.addFriendFunc}/>
                
            </div>

        );
    }

}

export default Friends;