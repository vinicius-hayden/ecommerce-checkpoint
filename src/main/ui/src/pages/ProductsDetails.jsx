import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import { Container, Row, CardGroup, Card, Col, Button } from "react-bootstrap";

import { BiArrowBack } from "react-icons/bi";

import Swal from "sweetalert2/dist/sweetalert2";

import 'sweetalert2/dist/sweetalert2.css'

export default function ProductsDetails() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});

  let requestConfigurationGet = {
    method: "GET",
    headers: {
      Accept: "*/*, application/json, text/plain",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch(
      `http://localhost:9000/products/${idProduct}`,
      requestConfigurationGet
    )
      .then((response) => response.json())
      .then((productJSON) => setProduct(productJSON));
  }, []);

  function addToCart({ product }) {
    let cartString = localStorage.getItem("cart");
    let cart = [];

    if (cartString) {
      cart = JSON.parse(cartString);
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      icon: 'success',
      title: 'All done!',
      text: 'Item added to cart!'
    })
  }

  return (
    <>
      {[product].map((product, index) => (
        <Container
          className="d-flex flex-column justify-content-center"
          key={index}
        >
          <Row>
            <Link to={"/products"}>
              <BiArrowBack size="40" color="#F55D15" />
            </Link>
          </Row>

          <Row className="my-4">
            <h1 style={{ color: "black" }}>{product.title}</h1>
          </Row>

          <CardGroup className="col d-flex justify-content-center">
            <Card className="w-50 p-2 border-0">
              <Card.Img src={product.image} style={{}} />
            </Card>

            <Card className="justify-content-center border-0">
              <Row className="mx-5 px-5 justify-content-center">
                <Col>
                  <h1 style={{ color: "#F55D15" }}>{product.title}</h1>
                  <p style={{ color: "black", fontSize: "1.5rem" }}>
                    {product.description}
                  </p>
                  <h4 className="mb-5">R$ {product.price}</h4>

                  <Button
                    className="btn btn-outline-primary"
                    variant="outline-dark"
                    onClick={() => addToCart({ product })}
                  >
                    Add to Cart
                  </Button>
                </Col>
              </Row>
            </Card>
          </CardGroup>
        </Container>
      ))}
    </>
  );
}
