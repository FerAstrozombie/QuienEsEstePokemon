import React, { useState } from "react";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const POKEMONS = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "harmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "Fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran",
    "nidorina",
    "Nidoqueen",
    "nidoran",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth"
]

const MATCH = Math.floor(Math.random() * POKEMONS.length)

export default function Pokemon() {
    const [hasWon, setWon] = useState(false);

    type Form = HTMLFormElement & {
        pokemon: HTMLInputElement
    }
    function handleSubmit (event: React.FormEvent<Form>) {
        event.preventDefault();

        const { pokemon } = event.currentTarget

        if(pokemon.value.toLowerCase() === POKEMONS[MATCH]){
            setWon(true);
            toast('Lo has atrapado!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else{
            toast('Se ha escapado!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            pokemon.value = "";
        }
    }
    return (
        <div className="padre">
            <h1>Quien es este Pokemon?</h1>
            <img
            id="pokemonImg"
            style={
                {imageRendering: "pixelated",
                filter: 
                hasWon ? "" : "brightness(0) invert(1)"
            }} 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`}
            alt="pokemon" />
            <img 
            style={
                {display: 
                hasWon ? "none" : ""
            }}
            className="gif" 
            src="/imagenes/arbusto.gif" 
            alt="arbusto"
            />
            { hasWon ? (
                <button className="pkbtn" onClick={() => location.reload()}>Play again</button>
            ): (
                <form onSubmit={handleSubmit}>
                    <input
                    type="text" 
                    name="pokemon" 
                    autoFocus />
                    <button className="pkbtn" type="submit">
                        Enviar
                    </button>
                </form>
            )}
        </div>
    )
}