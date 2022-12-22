import React from "react";
import "./Inbox.css";
import { Container, Form, Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { AuthsliceAction } from "../../Store/Auth";
import { useDispatch } from "react-redux";
const InboxNavbar = () => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.clear();
    Dispatch(AuthsliceAction.Login());
    // navigate("/login");
  };
  return (
    <>
      <Navbar border="primary">
        <Container fluid>
          <div>
            <img
              className="thum-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png"
            ></img>
            <img
              className="thum-img2"
              alt="mailname"
              src="https://jagad.id/wp-content/uploads/2021/01/gmail-1.jpg.webp"
            ></img>
          </div>
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
        <Button variant="warning" onClick={logoutHandler}>
          LogOut
        </Button>
      </Navbar>
    </>
  );
};
export default InboxNavbar;
