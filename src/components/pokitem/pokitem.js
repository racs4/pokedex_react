import React from 'react';
import './pokitem.css';

const PokItem = (props) => {
    return (
        <div className={`pokitem ${props.className}`}>
            <div className="pokitem__pokebola">

            </div>
            <span>Item Name</span>
        </div>
    );
}

export default PokItem;