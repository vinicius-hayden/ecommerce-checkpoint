import { React, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Container, CardGroup, Card, Row, Button } from "react-bootstrap";

export default function Products() {
  const [products, setProducts] = useState([]);

  let requestConfigurationGet = {
    method: "GET",
    headers: {
      "Accept": "*/*, application/json, text/plain",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*', 
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("http://localhost:9000/products", requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProducts(productsJSON));
  }, []);

  return (
    <>
      <h1 className="title" style={{ color: "#F55D15"  }}>
        
        All products:
      
      </h1>

      <Container className="d-flex flex-column justify-content-center">
        <Container className="col-lg-12">
          <Row xs={5} md={3}>
            {products.map((product, index) => (
              <Container
                className="d-flex flex-column justify-content-center"
                key={index}
              >
                <CardGroup className="col d-flex justify-content-center">
                  <Card className="p-2 m-4">
                    <Card.Img variant="top" src={product.image} style={{}} />
                    <Link to={`/products/${product.id}`}></Link>
                    <Card.Body>
                      <Card.Title
                        style={{ color: "#F55D15", fontSize: "1.5rem" }}
                      >
                        {product.title}
                      </Card.Title>
                      <Card.Subtitle style={{ fontSize: "1.5rem" }}>
                        R$ {product.price}
                      </Card.Subtitle>
                      <Link to={`/products/${product.id}`}>
                        <div className="text-center m-2">
                          <Button
                            className="btn btn-outline-primary mt-1 p-2"
                            variant="outline-dark"
                          >
                            See details
                          </Button>
                        </div>
                      </Link>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}
