import React from 'react';
import './item_img.css';

const ItemImg = (props) => {
    return (
        <div className="item-img">
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default ItemImg;