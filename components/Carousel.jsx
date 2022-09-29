import React, { useState } from "react";

import { Carousel, Ratio } from "react-bootstrap";

import CardApparel from "./CardApparel";
import CardMug from "./CardMug";

import backgroundCarousel from "../assets/images/backgroundCarousel.jpg";

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
          src={backgroundCarousel}
          alt="First Slide"
        />
        <Carousel.Caption>
          <Ratio aspectRatio={1 / 2}>
            <CardApparel />
          </Ratio>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={backgroundCarousel}
          alt="Second Slide"
        />

        <Carousel.Caption>
          <Ratio aspectRatio={1 / 2}>
            <CardMug />
          </Ratio>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
