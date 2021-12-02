import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return props.cities.map((elemento) => {
    return (
      <Card
        max={elemento.main.temp_max}
        min={elemento.main.temp_min}
        name={elemento.name}
        img={elemento.weather[0].icon}
        onClose={() => alert(elemento.name)}
      />
    );
  });
}
