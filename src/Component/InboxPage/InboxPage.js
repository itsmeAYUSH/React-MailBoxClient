import React from "react";
import "./Inbox.css";
import { Container, Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import InboxList from "./InboxList";
import InboxNavbar from "./InboxNavbar";
import TextEditing from "../TextEditing/TextEditing";
import { getmailHandler } from "../../Store/Mail-thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateList } from "../../Store/Mail-thunk";
import MessageView from "./MessageView";

let isinitialState = true;

const InboxPage = () => {
  const Items = useSelector((state) => state.mail.items);
  const count = useSelector((state) => state.mail.count);
  const Disptach = useDispatch();
  console.log("beforeupdate", Items);
  useEffect(() => {
    Disptach(getmailHandler());
  }, []);
  return (
    <>
      <InboxNavbar></InboxNavbar>
      <Container fluid>
        <Row style={{ height: "650px" }}>
          <Col xs={2} className=" bg-info" variant="primary">
            <ListGroup className="p-2" as="ul">
              <ListGroup.Item className="m-1 bg-" action>
                Compose
              </ListGroup.Item>
              <ListGroup.Item className="m-1 bg-" action>
                inbox
              </ListGroup.Item>
              <ListGroup.Item className="m-1" action>
                sendMail
              </ListGroup.Item>
              <ListGroup.Item className="m-1" action>
                DraftBox
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={10} className="">
            {/* <ListGroup className="flex">
              <ListGroupItem> sone text</ListGroupItem>
            </ListGroup> */}

            <InboxList></InboxList>
            {/* <TextEditing></TextEditing> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InboxPage;
