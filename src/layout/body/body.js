import React, { Component } from 'react';
import './body.css';
import axios from "axios";

//COMPONENTS
import BodyLeft from './body_left/body_left.js';
import BodyRight from './body_right/body_right.js';


async function getAllPokemonData() {
    let pokemonData = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=964")).data;
    return pokemonData["results"];
}

async function getPokemonDataByUrl(url) {
    let pokemonData = (await axios.get(url)).data;
    return pokemonData;
}

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonsData: [],
            pokemonSelecionadoData: null
        }

    }

    componentDidMount() {
        getAllPokemonData().then(
            (allPokemonData) => {
                this.setState({
                    pokemonsData: allPokemonData
                });
            }
        );
    }

    trataCliquePokItem = (indicePokemonClicado) => {
        getPokemonDataByUrl(this.state.pokemonsData[indicePokemonClicado]["url"]).then(
            (pokemonData) => {
                this.setState({
                    pokemonSelecionadoData: pokemonData
                })
            }
        );
    }

    render() {
        let pokemonSelecionadoData = this.state.pokemonSelecionadoData;

        return (
            <div className="body">
                <BodyLeft pokemonData={pokemonSelecionadoData} className="body__left" />

                <BodyRight pokemonData={this.state.pokemonsData} onClick={this.trataCliquePokItem} className="body__right" />
            </div>
        );
    }
}


export default Body;