import React, { Component } from 'react';
import FriendCard from '../shared-components/friend-card/friend-card.js';
import './friends.scss'
import ModalFriend from '../shared-components/modal/modal.js'

class Friends extends Component {
    constructor(props) {
        super(props);
    
        this.handleShow = this.handleShow.bind(this);
    
        this.state = {
          show: false,
          name: "",
          image: ""
        };
      }
    handleShow(nombre, imagen) {
        this.setState({ show: true, name: nombre, image: imagen });
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
                    {<ModalFriend modal={this.state.show} name={this.state.name} image={this.state.image}/>}
                    {
                        friends.map((item, idx) =>
                            <div key={idx} className="col-lg-2 col-md-4 col-sm-6 col-xs-12" onClick={() => this.handleShow(item.name, item.image)}>
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