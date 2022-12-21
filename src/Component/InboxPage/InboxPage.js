import React from "react";
import "./Inbox.css";
import { Container, Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import InboxList from "./InboxList";
import InboxNavbar from "./InboxNavbar";
import { Outlet } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import TextEditing from "../TextEditing/TextEditing";
import { getmailHandler } from "../../Store/Mail-thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateList } from "../../Store/Mail-thunk";
import MessageView from "./MessageView";
import SentMessage from "../SendMessage/SendMessage";
import SendMessageVIew from "../SendMessage/SendMessageView";

let isinitialState = true;

const InboxPage = () => {
  const Items = useSelector((state) => state.mail.items);
  const count = useSelector((state) => state.mail.count);
  const unread = useSelector((state) => state.mail.unread);
  const Disptach = useDispatch();
  console.log("beforeupdate", Items);
  useEffect(() => {
    Disptach(getmailHandler());
  }, []);
  useEffect(() => {
    if (count > 0) {
      Disptach(getmailHandler());
    }
  }, [count]);
  // useEffect(() => {
  //   console.log("UpdateList", Items);
  //   Disptach(UpdateList(Items));
  // }, [count, Disptach]);
  useEffect(() => {
    const intervelid = setInterval(() => {
      console.log("setintervelid", intervelid);
      Disptach(getmailHandler());
    }, 2000);

    return () => {
      console.log("clearintervelid", intervelid);
      clearInterval(intervelid);
    };
  });

  const sendmailcartHandler = () => {
    Disptach(getmailHandler());
  };
  return (
    <>
      <InboxNavbar></InboxNavbar>
      <Container fluid>
        <Row style={{ height: "650px" }}>
          <Col xs={2} className=" bg-info" variant="primary">
            <ListGroup className="p-2" as="ul">
              <Link to="text-edit">
                <ListGroup.Item className="m-1 bg-" action>
                  Compose
                </ListGroup.Item>
              </Link>
              <Link to="inboxlist">
                <ListGroup.Item className="m-1 bg-" action>
                  <div className="indbox-cont">
                    <p>inbox</p>
                    <h5>{unread}</h5>
                  </div>
                </ListGroup.Item>
              </Link>
              <ListGroup.Item className="m-1" action>
                <Link to="#">sendMail</Link>
              </ListGroup.Item>

              <Link to="sentmessage">
                <ListGroup.Item
                  className="m-1"
                  action
                  onClick={sendmailcartHandler}
                >
                  sendMail
                </ListGroup.Item>
              </Link>
              <ListGroup.Item className="m-1" action>
                DraftBox
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={10} className="">
            {/* <ListGroup className="flex">
              <ListGroupItem> sone text</ListGroupItem>
            </ListGroup> */}
            <Routes>
              <Route path="/inboxlist/mailview" element={<MessageView />} />
            </Routes>
            <Routes>
              <Route
                path="/sentmessage/sentmailview"
                element={<SendMessageVIew />}
              />
            </Routes>
            {/* <InboxList></InboxList> */}
            <Outlet></Outlet>
            {/* <MessageView></MessageView> */}
            {/* <TextEditing></TextEditing> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default InboxPage;
