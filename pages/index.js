import React, { useEffect, useState, useRef } from 'react'
import Page from './_page'
import Pagination from './_pagination';
import FilteredPagination from './_filterPagination';
import Search from './_search';
import axios from 'axios'

function App() {
  const [checkedState, setCheckedState] = useState([]);
  const types = useRef([])

  useEffect(() => {
    async function getTypes() {
      const result = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json');
      types.current = result.data.map(type => type.english);
      setCheckedState(new Array(result.data.length).fill(false))
    }
    getTypes();
  }, [])

  return (
    <>
      <Search types={types} checkedState={checkedState} setCheckedState={setCheckedState} />
      <FilteredPagination types={types} checkedState={checkedState} />
    </>
  )
}

export default App