import { Card, CardGroup, Button, Stack } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function CardSticker() {
  return (
    <CardGroup className="col d-flex justify-content-center" style={{color: "#F55D15"}}>
      <Stack direction="horizontal" gap={4}>
        <Card className="">
          <Card.Img
            variant="top"
            src="https://uploaddeimagens.com.br/images/004/032/242/full/masc_blue_save_dolfini.jpg?1663870987"
          />
          <Card.Body>
            <Card.Title>We Need U T-Shirt</Card.Title>
            <Link className="nav-link" to="/products/4">
              <div className="text-center m-3">
                <Button variant="outline-dark">See details</Button>
              </div>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://uploaddeimagens.com.br/images/004/032/245/full/masc_grey_marcelo_surf.jpg?1663871093"
          />
          <Card.Body>
            <Card.Title>Marcelo`s Surf T-Shirt</Card.Title>
            <Link className="nav-link" to="/products/5">
              <div className="text-center m-3">
                <Button variant="outline-dark">See details</Button>
              </div>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://uploaddeimagens.com.br/images/004/032/251/full/masc_marine_blue_wilian.jpg?1663871245"
          />
          <Card.Body>
            <Card.Title>Willian`s Mysterious T-Shirt</Card.Title>
            <Link className="nav-link" to="/products/6">
              <div className="text-center m-3">
                <Button variant="outline-dark">See details</Button>
              </div>
            </Link>
          </Card.Body>
        </Card>
      </Stack>
    </CardGroup>
  );
}