import { useState } from 'react';
import './PokemonCard.css';
const PokemonCard = (props) => {
    return (
        <div className="bound" onClick={()=>{
            props.onClick();
        }}>
            <div className="itemPokemonCard">
                <div className="imgPokemon">
                    <img src={props.image} alt="pokemon" onClick={() => {}}/>
                </div>
                <p className="idPokemon">#0001</p>
                <p className='namePokemon'>
                    <b>{props.name}</b>
                </p>
            </div>
        </div>
    )
}

export default PokemonCard;