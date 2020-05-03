import React from 'react';
import './poklist.css';
import PokItem from '../pokitem/pokitem';

const PokList = () => {

    let itens = [];

    for (let i = 0; i < 12; i++) {
        itens.push(
            (<div key={i} className="poklist__pokitem" >
                <PokItem />
            </div>)
        );
    }

    return (
        <div className="poklist">
            {itens}
        </div>
    );
}

export default PokList;