import React from 'react';
import './poklist.css';
import PokItem from '../pokitem/pokitem';

const PokList = () => {
    return (
        <div className="poklist">
            <div className="poklist__pokitem" >
                <PokItem />
            </div>
        </div>
    );
}

export default PokList;