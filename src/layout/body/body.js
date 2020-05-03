import React, { Component } from 'react';
import './body.css';
import axios from "axios";

//COMPONENTS
import BodyLeft from './body_left/body_left.js';
import BodyRight from './body_right/body_right.js';


async function getPokemonData() {
    let pokemonData = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=964")).data;
    return pokemonData["results"];
}

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonsData: [],
            indicePokemonClicado: -1
        }

        this.trataCliquePokItem = this.trataCliquePokItem.bind(this);
    }

    componentDidMount() {
        getPokemonData().then(function (data) {
            this.setState({
                pokemonsData: data
            });
        }.bind(this)
        );
    }

    trataCliquePokItem(indicePokemonClicado) {
        this.setState({
            indicePokemonClicado: indicePokemonClicado
        });
    }

    render() {
        let indicePokemonClicado = this.state.indicePokemonClicado;
        console.log(indicePokemonClicado);
        return (
            <div className="body">
                <BodyLeft pokemonData={indicePokemonClicado === -1 ? null : this.state.pokemonsData[indicePokemonClicado]} className="body__left" />

                <BodyRight pokemonData={this.state.pokemonsData} onClick={this.trataCliquePokItem} className="body__right" />
            </div>
        );
    }
}


export default Body;