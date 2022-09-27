import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import { Container, CardGroup, Stack, Card, Button } from "react-bootstrap";

export default function ProductsDetails() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/products/${idProduct}`)
      .then((response) => response.json())
      .then((productsJSON) => setProduct(productsJSON));
  }, []);

  const { idProduct } = useParams();

  return (
    <>
      {/* Especificar os detalhes dos produtos */}
      <h1>{idProduct}</h1>

      {product.map((product, index) => (
        <Container className="my-3" key={index}>
          <Link to={`/products/${product.id}`}>
            <CardGroup className="col d-flex justify-content-center">
              <Stack direction="horizontal" gap={4}>
                <Card className="p-2">
                  <Card.Img variant="top" src={product.image} style={{}} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle>{product.category.name}</Card.Subtitle>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Subtitle>{product.price}</Card.Subtitle>

                    <Link className="nav-link" to="">
                      <div className="text-center m-2">
                        <Button variant="outline-dark">Add to cart</Button>
                      </div>
                    </Link>
                  </Card.Body>
                </Card>
              </Stack>
            </CardGroup>
          </Link>
        </Container>
      ))}
    </>
  );
}
