import React from 'react';

function page({ currentPokemons, currentPage, setPokemon, pokemon }) {
  let handleView = (item) => {
    setPokemon(item)
    console.log(item)
  }

  // return (
  //   <div>
  //     <h1>Page number {currentPage}</h1>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>ID</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {currentPokemons.map((item) => (
  //           <React.Fragment key={item.id}>
  //             <tr>
  //               {/* <td>{item.name.english}</td>
  //               <td>{item.id}</td>
  //               <td><button onClick={() => {handleView(item)}}>View</button></td> */}
  //               <img src={"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/" + item.id.toString().padStart(3, '0') + ".png"} onClick={() => {handleView(item)}}></img>
  //             </tr>
  //           </React.Fragment>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );

  return (
    <div>
      <h1>Page number {currentPage}</h1>
      <div className='flex'>
        {currentPokemons.map((item) => (
          <React.Fragment key={item.id}>
            <div className='pokerman'>
              <img src={"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/" + item.id.toString().padStart(3, '0') + ".png"} onClick={() => { handleView(item) }}></img>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default page;
