import React from "react";
import CardTemp from "./CardTemp";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Card(props) {
  // acá va tu código
  function handleOnclose() {
    if (typeof props.onClose === "function") props.onClose();
  }
  return (
    <div className={styles.card}>
      <button className={styles.closeButton} onClick={handleOnclose}>
        <IoCloseCircleOutline />
      </button>
      <h2 className={styles.cityName}>{props.name}</h2>
      <CardTemp label="Min" value={props.min} />
      <CardTemp label="Max" value={props.max} />
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="imagen de clima"
      />
    </div>
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
