import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

class ModalFriend extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      name: "Juan",
      image: "vacio",
    };
  }

  componentWillReceiveProps() {
    this.setState({show: this.props.modal})
  }
  
  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <> 
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body><Image src={this.props.image} rounded width="100%" /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalFriend;
