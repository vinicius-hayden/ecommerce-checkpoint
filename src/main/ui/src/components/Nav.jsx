import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          memecommerce
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/products">
              Products
            </Link>

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <Link className="nav-link" to="/categories/apparel">
                Apparel
              </Link>
              <Link className="nav-link" to="/categories/sticker">Sticker</Link>
              <Link className="nav-link" to="/categories/all">
                All categories
              </Link>
            </NavDropdown>

            <Link className="nav-link" to="/about">
              About Us
            </Link>

            <Link className="nav-link" to="/cart">
              Cart
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
