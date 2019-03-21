import React from 'react';
import PropTypes from 'prop-types';
import { Button,Form } from 'react-bootstrap';

class AddForm extends React.Component {

  friend = {
    name : "",
    favoriteBeer : "",
    rating : 0
  }

addFriend(){
    alert('Hola viajero');
}

  

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div style={modalStyle}>
          {this.props.children}
          <Form>
            <Form.Group >
              <Form.Label>Name</Form.Label>
              <Form.Control inputRef = {(input) => this.props.name = input } type="name" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group >
              <Form.Label>Favorite Beer</Form.Label>
              <Form.Control type="fbeer" placeholder="Enter the favorite beer" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.props.addFriend}>
              Add
            </Button>
          </Form>
          <div className="footer">
            <Button variant="danger" onClick={this.props.onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

AddForm.propTypes = {
  friend : PropTypes.object ,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default AddForm;
