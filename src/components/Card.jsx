import React from "react";
import CardTemp from "./CardTemp";

export default function Card(props) {
  // acá va tu código
  function handleOnclose() {
    if (typeof props.onClose === "function") props.onClose();
  }
  return (
    <>
      <button onClick={handleOnclose}>X</button>
      <h2>{props.name}</h2>
      <CardTemp label="Min" value={props.min} />
      <CardTemp label="Max" value={props.max} />
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="imagen de clima"
      />
    </>
  );
}


