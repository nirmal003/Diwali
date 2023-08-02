import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <Container fluid>
        <Row className="fw-bold bg-dark header">
          <Col className="text-white fs-6">Orders - +91 85239 79570</Col>
          <Col className="text-white badge fs-6 fw-bolder">
            Welcome to Malathi Crackers, Sivakasi
          </Col>
          <Col className=" text-white badge fs-6 fw-bolder">
            Mail Us : malathicrackers@gmail.com
          </Col>
        </Row>
        <Row className="header">
          <Col>
            <div className="rounded-2 px-3 m-3 bg-success border border-4 border-warning text-white fs-5 crackers">
              Crackers Available All 365 Days! Diwali Sales Started. Celebrate
              Diwali with Malathi Crackers
            </div>
          </Col>
          <Col>
            <div className="align-middle acme py-2 fs-1 text-danger fw-bolder justify-content-md-center">
              Diwali Crackers
            </div>
          </Col>
          <Col>
            <div className="align-middle py-2 fw-bold fs-6 justify-content-md-center">
              <span className="clr-red fs-5">FOR QUERIES & BULK ORDER </span>
              <br /> +91 80985 43249 <br /> +91 96002 66278
            </div>
          </Col>
        </Row>
      </Container>

      <Navbar expand="lg" className="bg-primary sticky ">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav "
            className="text-black fw-bold fs-2 border-none"
          >
            MENU
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link>
                <Link to="/" className="link">
                  Home
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav "
                    className="toggle"
                  >
                    {" "}
                  </Navbar.Toggle>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="link">
                  About
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav "
                    className="toggle"
                  >
                    {" "}
                  </Navbar.Toggle>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/product" className="link">
                  Product
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav "
                    className="toggle"
                  >
                    {" "}
                  </Navbar.Toggle>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/safety" className="link">
                  Safety Tips
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav "
                    className="toggle"
                  >
                    {" "}
                  </Navbar.Toggle>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="link">
                  Contact Us
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav "
                    className="toggle"
                  >
                    {" "}
                  </Navbar.Toggle>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
