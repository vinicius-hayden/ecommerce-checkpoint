import { Card, CardGroup, Button, Stack } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function CardMug() {
  return (
    <CardGroup className="col d-flex justify-content-center" style={{color: "#F55D15"}}>
      <Stack direction="horizontal" gap={4}>
        <Card className="">
          <Card.Img
            variant="top"
            src="https://uploaddeimagens.com.br/images/004/040/680/full/hokagecristh.jpg?1664390608"
          />
          <Card.Body>
            <Card.Title>Hokage Cristh Mug</Card.Title>
            <Link className="nav-link" to="/products/7">
              <div className="text-center m-3">
                <Button variant="outline-dark">See details</Button>
              </div>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            style={{maxWidth: "735px", maxHeight: "735px"}}
            src="https://cdn.discordapp.com/attachments/1012420525039030332/1024388808373981194/caneca_christh_redentor.jpg"
          />
          <Card.Body>
            <Card.Title>Cristh the Redeemer</Card.Title>
            <Link className="nav-link" to="/products/8">
              <div className="text-center m-3">
                <Button variant="outline-dark">See details</Button>
              </div>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://uploaddeimagens.com.br/images/004/040/679/full/mug.jpeg?1664390571"
          />
          <Card.Body>
            <Card.Title>Que café gostosinnn Mug</Card.Title>
            <Link className="nav-link" to="/products/9">
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
