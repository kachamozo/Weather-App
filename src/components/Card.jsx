import React from "react";
import CardTemp from "./CardTemp";
import PropTypes from "prop-types";

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
//es una buena practica ver en la consola del browser el tipo de datos que nos llegan; 
//por que tienen que se igual a las que necesitan nuestras funciones para no romper codigo
Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};
