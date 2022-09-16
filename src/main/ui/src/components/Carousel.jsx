import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "./Card";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/fundo-preto-antigo-textura-do-grunge-papel-de-parede-escuro-quadro-negro-quadro-negro-parede-da-sala_1258-28312.jpg?w=1380&t=st=1663266082~exp=1663266682~hmac=5814bd40c50f8cfb683dc80930c2ae4d6e8e49f346cca4875e793588e8bfc6d3"
          alt="First slide"
        />
        <Carousel.Caption>
          <Card />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/fundo-preto-antigo-textura-do-grunge-papel-de-parede-escuro-quadro-negro-quadro-negro-parede-da-sala_1258-28312.jpg?w=1380&t=st=1663266082~exp=1663266682~hmac=5814bd40c50f8cfb683dc80930c2ae4d6e8e49f346cca4875e793588e8bfc6d3"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Card />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
