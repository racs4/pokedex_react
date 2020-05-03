import React, { Component } from 'react';
import './poklist.css';
import PokItem from '../pokitem/pokitem';

const PokList = (props) => {
    let itens = [];

    for (let i = 0; i < props.pokemonData.length; i++) {
        itens.push(
            (<div key={i} onClick={(e) => { props.onClick(i) }} className="poklist__pokitem" >
                <PokItem pokemonName={props.pokemonData[i]["name"]} />
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