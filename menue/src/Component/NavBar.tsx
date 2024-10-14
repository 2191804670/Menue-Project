import React, { useState } from "react";
import { Navbar, Container, Button, Form, Nav, Row } from "react-bootstrap";

interface NavBarProps {
  search: (query: string) => void; // Function that takes a string and returns void
}

export const NavBar: React.FC<NavBarProps> = ({ search }) => {
  const [searchValue, setVlaue] = useState("");

  function searchButton() {
    search(searchValue);
    setVlaue("");
  }

  return (
    <Row>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#" className="fs-3 brand-color">
            Anas Resturant
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-1" // Reduced margin
                aria-label="Search"
                value={searchValue}
                onChange={(e) => setVlaue(e.target.value)}
              />
              <Button
                className="mx-1" // Reduced margin
                style={{ color: "white" }}
                onClick={searchButton}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};
