import React from 'react';
import './add-button.scss'

const FABs = ({ onClick }) => (
    <button className="add-button" onClick={onClick} />
);
export default FABs;


// function FAB(props) {
//     return (
//         <button className="add-button" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }
// export default FAB;