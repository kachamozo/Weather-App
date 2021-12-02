import React from 'react';

export default function Card(props) {
  // acá va tu código
  return(
    <>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen de clima"/>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <h2>Min</h2>
      <h2>{props.min}</h2>
      <h2>Max</h2>
      <h2>{props.max}</h2>
    </>
  )
};