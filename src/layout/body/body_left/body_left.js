import React from 'react';
import './body_left.css';

import ItemInfo from './../../../widgets/item_info/item_info';
import ItemImg from './../../../widgets/item_img/item_img';

const BodyLeft = () => {
    return (
        <div className="body__left body__parts">
            <ItemInfo className="body__info">
                Teste
             </ItemInfo>
            <ItemImg className="body__img" />
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