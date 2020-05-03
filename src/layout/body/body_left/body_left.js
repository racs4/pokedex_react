import React, { Component } from 'react';
import './body_left.css';

import ItemInfo from './../../../widgets/item_info/item_info';
import ItemImg from './../../../widgets/item_img/item_img';


const BodyLeft = (props) => {
    if (props.pokemonData === null) {
        return (
            <div className="body__left body__parts">

            </div>
        );
    }
    else {
        console.log(props.pokemonData)
        return (
            <div className="body__left body__parts">
                <ItemInfo className="body__info">
                    {props.pokemonData["name"]}
                </ItemInfo>
                <ItemImg className="body__img" />
                <ItemInfo className="body__info">
                    Ataque {props.pokemonData["stats"]["4"]["base_stat"]}
                </ItemInfo>
                <ItemInfo className="body__info">
                    Defesa {props.pokemonData["stats"]["3"]["base_stat"]}
                </ItemInfo>
            </div>
        );
    }
}

export default BodyLeft;