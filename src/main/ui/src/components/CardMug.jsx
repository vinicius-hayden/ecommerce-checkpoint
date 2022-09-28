import { Card, CardGroup, Button, Stack } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function CardMug() {
  return (
    <CardGroup className="col d-flex justify-content-center" style={{color: "#F55D15"}}>
      <Stack direction="horizontal" gap={4}>
        <Card className="">
          <Card.Img
            variant="top"
            src=""
          />
          <Card.Body>
            <Card.Title>We Need U T-Shirt</Card.Title>
            <Link className="nav-link" to="/products/">
              <div className="text-center m-2">
                <Button variant="outline-dark">See details</Button>
              </div>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src=""
          />
          <Card.Body>
            <Card.Title>Marcelo`s Surf T-Shirt</Card.Title>
            <Link className="nav-link" to="/products/">
              <div className="text-center m-2">
                <Button variant="outline-dark">See details</Button>
              </div>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src=""
          />
          <Card.Body>
            <Card.Title>Willian`s Mysterious T-Shirt</Card.Title>
            <Link className="nav-link" to="/products/">
              <div className="text-center m-2">
                <Button variant="outline-dark">See details</Button>
              </div>
            </Link>
          </Card.Body>
        </Card>
      </Stack>
    </CardGroup>
  );
}

// Inserir url das imagens
// Trocar títulos 
// Inserir Link to (id do produto)