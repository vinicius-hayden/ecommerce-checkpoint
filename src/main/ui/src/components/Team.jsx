import { Card, Container, Row } from "react-bootstrap";

import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import { React, useState, useEffect } from "react";

import elaine from "../assets/images/elaine.jpg";
import fabiana from "../assets/images/fabiana.jpg";
import jailson from "../assets/images/jailson.jpg";
import vinicius from "../assets/images/vinicius.jpg";
import william from "../assets/images/william.jpg";

export default function Team() {
  const contact = [
    {
      name: "Elaine Onuki",
      photo: elaine,
      github: "https://github.com/Potato-Grill",
      linkedin: "https://www.linkedin.com/in/elaine-onuki/",
    },
    {
      name: "Fabiana Y. Sato Kayanoki",
      photo: fabiana,
      github: "https://github.com/FabianaYSK",
      linkedin: "https://www.linkedin.com/in/fabiana-ysk",
    },
    {
      name: "Jailson Junior",
      photo: jailson,
      github: "https://github.com/JaiJuni0r",
      linkedin: "https://www.linkedin.com/in/jailson-junior-847a10215/",
    },
    {
      name: "Vinicius Hayden",
      photo: vinicius,
      github: "https://github.com/vinicius-hayden",
      linkedin: "https://www.linkedin.com/in/vinicius-hayden/",
    },
    {
      name: "William Silva",
      photo: william,
      github: "https://github.com/wkoju84",
      linkedin: "https://www.linkedin.com/in/william-silva-817673106/",
    },
  ];

  const array = [
    "Olá mundo!",
    "Hello world!",
    "Ciao mondo!",
    "Hola mundo!",
    "Aloha honua!",
    "Bonjour le monde! ",
    "こんにちは世界!",
  ];

  const [greetings, setGreetings] = useState(0);

  useEffect(() => {
    const delay = array[greetings].length * 200;
    const interval = setInterval(() => {
      setGreetings((e) => {
        return e + 1 < array.length ? e + 1 : 0;
      });
    }, delay);

    return () => clearInterval(interval);
  });

  return (
    <>
      <h1 className="greetings" style={{ color: "#F55D15" }} key={array[greetings]}>
        {array[greetings]}
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        We are interested in use different technologies to understand and solve
        people's problems. Currently, we are students at Digital House Brasil
        and we are looking for new challenges in technology.
      </p>
      <p style={{ color: "#F55D15", fontSize: "1.5rem" }}> Here are our contacts and projects:</p>
      <Container className="d-flex flex-column justify-content-center">
        <Container className="col-lg-8">
          <Row xs={5} md={3}>
            {contact.map((participant, index) => (
              <Container className="my-3" key={index}>
                <Card className="p-2">
                  <Card.Img src={participant.photo} />
                  <Card.Title>{participant.name}</Card.Title>
                  <div className="d-flex gap-4 div">
                    <a href={participant.github} className="icon" style={{ color: "black"}}>
                      <FaGithub size="30" />
                    </a>
                    <a href={participant.linkedin} className="icon" style={{ color: "black"}}>
                      <BsLinkedin size="30" />
                    </a>
                  </div>
                </Card>
              </Container>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}
