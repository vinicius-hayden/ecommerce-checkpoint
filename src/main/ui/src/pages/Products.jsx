import { React, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Container, CardGroup, Card, Row, Button } from "react-bootstrap";

export default function Products() {
  const [products, setProducts] = useState([]);

  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("http://localhost:9000/products", requestConfigurationGet)
      .then((response) => response.json())
      .then((productsJSON) => setProducts(productsJSON));
  }, []);

  function addToCart({ product }) {
    let cartString = localStorage.getItem("cart");
    let cart = [];

    if (cartString) {
      cart = JSON.parse(cartString);
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(localStorage);
  }

  function removeItemFromCart({ product }) {
    let cartString = localStorage.getItem("cart");

    if(cartString) {
      let cart = JSON.parse(cartString);
      let newCart = [];

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id != product.id) {
          newCart.push(cart[i]);
        }
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

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
