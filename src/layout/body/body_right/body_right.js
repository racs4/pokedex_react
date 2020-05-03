import React from 'react';
import './body_right.css';
import PokList from '../../../components/poklist/poklist';

const BodyRight = (props) => {
    return (
        <div className="body__right">
            <PokList pokemonData={props.pokemonData} onClick={props.onClick} />
        </div>
    );
}

export default BodyRight;