import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  function handleOnSearch(){
    if(typeof onSearch === "function"){
      const input = document.querySelector("#search-bar-input")
      onSearch(input.value)
    }
  }
  return <div>
    <input id="search-bar-input"/>
    <button onClick={handleOnSearch}>Agregar</button>
  </div>
};