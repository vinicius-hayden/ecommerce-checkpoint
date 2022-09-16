import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { Link } from "react-router-dom";

import "./Card.css";

export default function GroupExample() {
  return (
    <CardGroup className="col d-flex justify-content-center">
      <Card className="">
        <Card.Img
          variant="top"
          src="https://a-static.mlcdn.com.br/800x560/caneca-dev-terraform-preta-jps-info/jps-info/9561907890/107026a70458fa2de96890577fb4ceb7.jpg"
        />
        <Card.Body>
          <Card.Title>Coxinha</Card.Title>
          <Link className="nav-link" to="/products/coxinha"> See details</Link> 
          <Link className="nav-link" to="/"> Add to cart</Link>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://a-static.mlcdn.com.br/800x560/caneca-dev-terraform-preta-jps-info/jps-info/9561907890/107026a70458fa2de96890577fb4ceb7.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Link className="nav-link" to="/"> Add to cart</Link>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://a-static.mlcdn.com.br/800x560/caneca-dev-terraform-preta-jps-info/jps-info/9561907890/107026a70458fa2de96890577fb4ceb7.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Link className="nav-link" to="/"> Add to cart</Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
