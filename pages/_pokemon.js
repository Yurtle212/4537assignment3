import React, { useState } from 'react'
import axios from 'axios'


function Pokemon({ pokemon, setPokemon }) {
    return (
        <div>
            <p>{pokemon.name.english}</p>
            <button onClick={() => setPokemon({})}>back</button>
        </div>
    )
}

export default Pokemon