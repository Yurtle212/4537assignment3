import React, { useEffect, useState, useRef } from 'react'
import Page from './_page'
import Pagination from './_pagination';
import FilteredPagination from './_filterPagination';
import Search from './_search';
import Login from './_login';
import Logout from './_logout';
import Pokemon from './_pokemon';
import axios from 'axios'

function App() {
  const [checkedState, setCheckedState] = useState([]);
  const types = useRef([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function getTypes() {
      const result = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json');
      types.current = result.data.map(type => type.english);
      setCheckedState(new Array(result.data.length).fill(false))
    }
    getTypes();
  }, [])

  return (
    <div>
      {user.username == undefined ? (<>
        <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} user={user} setUser={setUser} />
      </>) :
        (
          <div>
          {
            pokemon?.name?.english == undefined ? (<>
              <Search types={types} checkedState={checkedState} setCheckedState={setCheckedState} />
              <FilteredPagination types={types} checkedState={checkedState} pokemon={pokemon} setPokemon={setPokemon} />
              <Logout setUser={setUser} user={user} />
            </>) :
              (
                <Pokemon pokemon={pokemon} setPokemon={setPokemon} />
              )
          }
        </div>
        )
      }
    </div >
  )
}

export default App