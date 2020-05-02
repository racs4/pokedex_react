import React from 'react';
import './body_left.css';

import ItemInfo from './../../../widgets/item_info/item_info';

const BodyLeft = () => {
    return (
        <div className="body__left body__parts">
            <ItemInfo className="body__info">
                Teste
             </ItemInfo>
            <ItemInfo className="body__info">
                Teste
             </ItemInfo>
            <ItemInfo className="body__info">
                Teste
             </ItemInfo>
        </div>
    );
}

export default BodyLeft;