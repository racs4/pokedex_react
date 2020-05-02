import React from 'react';
import './item_info.css';

const ItemInfo = (props) => {
    return (
        <div class="item-info">
            {props.children}
        </div>
    );
}

export default ItemInfo;