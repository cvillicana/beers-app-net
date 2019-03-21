import React from 'react';
import {Modal, Button, Image}  from 'react-bootstrap';
import {connect} from 'react-redux';


class ModalFriend extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          name: "Juan",
          image: "vacio",
        };
      }

      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow(nombre, imagen) {
        this.setState({ show: true, name: nombre, image: imagen });
    }
    
    render() {
        return (
          <>
            <Modal show={this.state.show} onHide={this.handleClose} handleShow={this.handleShow}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    }
}

export default ModalFriend(connect(this.handleShow));