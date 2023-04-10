import React from 'react';

function page({ currentPokemons, currentPage, setPokemon, pokemon }) {
  let handleView = (item) => {
    setPokemon(item)
    console.log(item)
  }

  return (
    <div>
      <h1>Page number {currentPage}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {currentPokemons.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
                <td>{item.name.english}</td>
                <td>{item.id}</td>
                <td><button onClick={() => {handleView(item)}}>View</button></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page;
