import React from "react";
import "./Inbox.css";
import { Container, Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const InboxNavbar = () => {
  return (
    <>
      <Navbar bg="success">
        <Container>
          <img
            className="thum-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png"
          ></img>

          {/* <Nav>
            <Nav.Link>Home</Nav.Link>
          </Nav> */}
          <Form className="d-flex pl-5" style={{ width: "600px" }}>
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-7"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};
export default InboxNavbar;
