import React, { Component } from 'react';
import FriendCard from '../shared-components/friend-card/friend-card.js';
import './friends.scss'
import {Modal, Button, Image}  from 'react-bootstrap';

class Friends extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            name: "Juan",
        };
    }

    handleClose() {
        this.setState({ show: false });
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
                    {<Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Image src={this.state.image} rounded width="100%" /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                </Button>
                        </Modal.Footer>
                    </Modal>}
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