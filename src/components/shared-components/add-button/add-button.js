import React from 'react';
import './add-button.scss'

const AddButton = ({ onClick }) => (
    <button className="fab" onClick={onClick}>
        <i className="fa fa-plus" aria-hidden="true"></i>
    </button>
);
export default AddButton;


/* SECOND OPTION */

// function AddButton(props) {
//     return (
//         <button className="fab" onClick={props.onClick}>
//             <i className="fa fa-plus" aria-hidden="true"></i>
//         </button>
//     );
// }
// export default AddButton;