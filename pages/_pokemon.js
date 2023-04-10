import React, { useState } from 'react'
import axios from 'axios'


function Pokemon({ pokemon, setPokemon }) {
    return (
        <div>
            <p>{pokemon.name.english}</p>
            <p>{pokemon.base.HP} hp</p>
            <p>{pokemon.base.Attack} atk</p>
            <p>{pokemon.base.Defense} def</p>
            <p>{pokemon.base["Sp. Attack"]} sp. atk</p>
            <p>{pokemon.base["Sp. Defense"]} sp. def</p>
            <img src={"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/" + pokemon.id.toString().padStart(3, '0') + ".png"}></img>
            <br></br><button onClick={() => setPokemon({})}>back</button>
        </div>
    )
}

export default Pokemon