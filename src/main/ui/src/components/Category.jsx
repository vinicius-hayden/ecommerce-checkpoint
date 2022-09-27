import apparel from "../assets/images/apparel.jpg";
import sticker from "../assets/images/sticker.jpg";

import { Link } from "react-router-dom";

import { Card, Container, Row, Button } from "react-bootstrap";

export default function Category() {
  const categories = [
    {
      id: 1,
      name: "Apparel",
      image: apparel,
    },
    {
      id: 2,
      name: "Sticker",
      image: sticker,
    },
  ];

  return (
    <>
      <Container className="d-flex flex-column justify-content-center">
        <Container className="col-lg-5">
          <Row md={2}>
            {categories.map((category, index) => (
              <Container className="my-3" key={index}>
                <Card className="p-2">
                  <Card.Img src={category.image} />
                  <Link className="nav-link" to={`/categories/${category.id}`}>
                    <div className="text-center m-2">
                      <Button variant="outline-dark">{category.name}</Button>
                    </div>
                  </Link>
                </Card>
              </Container>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}
