import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, CardGroup, Card, Row, Button } from "react-bootstrap";

export default function CategoriesDetails() {
  const { idCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});

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
      .then((productsJSON) => setProducts(productsJSON.map(mapProduct).filter((product) => { 
        return filterProductWithCategory(product, idCategory);
      })));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9000/categories/${idCategory}`, requestConfigurationGet)
      .then((response) => response.json())
      .then((categoryJSON) => setCategory(categoryJSON));
  }, []);

  function categoryToId( category ) {
    return category.id;
  }

  function mapProduct( product ) {
    let newCategories = product.categories.map(categoryToId)
    product.categories = newCategories;
    return product;
  }

  function filterProductWithCategory( product, categoryId ) {
    let result = false;
    product.categories.forEach(category => {
      if (category == categoryId) {
        result = true;
        return;
      }
    });
    return result;
  }

  return (
    <>
      <h1 className="title" style={{ color: "#F55D15" }}>
        All {category.name}:
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
  )
}