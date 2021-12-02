import React from "react";

export default function Card(props) {
  // acá va tu código
  function handleOnclose(){
    if(typeof props.onClose === "function") props.onClose()
  }
  return (
    <>
      <button onClick={handleOnclose}>X</button>
      <h2>{props.name}</h2>
      <div>
        <label>Min</label>
        <span>{props.min}</span>
      </div>
      <div>
        <label>Max</label>
        <span>{props.max}</span>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="imagen de clima"
      />
    </>
  );
}