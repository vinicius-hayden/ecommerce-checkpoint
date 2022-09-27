import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

import {FiShoppingCart} from "react-icons/fi"

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Link className="navbar-brand" to="/">
        <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              style={{ width: "50px", height: "50px", margin: "15px" }}
            />
            memecommerce
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/" style={{ fontSize:"20px" }}>
              Home
            </Link>

            <Link className="nav-link" to="/products" style={{ fontSize:"20px" }}>
              Products
            </Link>

            <Link className="nav-link" to="/categories" style={{ fontSize:"20px" }}>
              Categories
            </Link>

            <Link className="nav-link" to="/about" style={{ fontSize:"20px" }}>
              About us
            </Link>

            <Link className="nav-link" to="/cart" style={{ fontSize:"20px" }}>
              <FiShoppingCart/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;