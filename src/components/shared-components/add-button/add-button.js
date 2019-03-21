import React from 'react';
import './add-button.scss'

const AddButton = ({ onClick }) => (
    <button className="fab" onClick={onClick}>
        <i className="fa fa-plus" aria-hidden="true"></i>
    </button>
);
export default AddButton;