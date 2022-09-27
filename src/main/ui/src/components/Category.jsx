import apparel from "../assets/images/apparel.jpg";
import sticker from "../assets/images/sticker.jpg";
import mug from "../assets/images/mug.jpg";

import { Link } from "react-router-dom";

import { Card, Container, Row, Button } from "react-bootstrap";

export default function Category() {
  const categories = [
    {
      id: 1,
      name: "T-shirt",
      image: apparel,
    },
    {
      id: 2,
      name: "Mug",
      image: mug,
    },
    {
      id: 3,
      name: "Sticker",
      image: sticker,
    },
  ];

  return (
    <>
      <Container className="d-flex flex-column justify-content-center">
        <Container className="col-lg-10">
          <Row md={3}>
            {categories.map((category, index) => (
              <Container className="my-3" key={index}>
                <Card className="p-2">
                  <Card.Img src={category.image} />
                  <Link className="nav-link" to={`/categories/${category.id}`}>
                    <div className="text-center m-4">
                      <Button variant="outline-dark p-2">{category.name}</Button>
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
