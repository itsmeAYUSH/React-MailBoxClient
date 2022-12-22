import React from "react";
import "./Inbox.css";
import { Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import InboxNavbar from "./InboxNavbar";
import { getmailHandler } from "../../Store/Mail-thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageView from "./MessageView";
import { Link, Route, Routes } from "react-router-dom";
import SentMessageView from "./Sentmessage/sentMessageView";

const InboxPage = () => {
  const count = useSelector((state) => state.mail.count);
  const unread = useSelector((state) => state.mail.unread);
  const Disptach = useDispatch();

  useEffect(() => {
    Disptach(getmailHandler());
  }, [Disptach]);

  useEffect(() => {
    if (count > 0) {
      Disptach(getmailHandler());
    }
  }, [count,Disptach]);

  // calling the backend api every 2 seconds to update inbox

  useEffect(() => {
    const intervelid = setInterval(() => {
      console.log("setintervelid", intervelid);
      Disptach(getmailHandler());
    }, 2000);

    return () => {
      console.log("clearintervelid", intervelid);
      clearInterval(intervelid);
    };
  },[Disptach]);

  const sendmailcartHandler = () => {
    Disptach(getmailHandler());
  };

  return (
    <>
      <InboxNavbar></InboxNavbar>
      <Container className=" bk-inbox" fluid>
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

                    <Badge bg="primary">{unread}</Badge>

                    {/* <h5>{unread}</h5> */}
                  </div>
                </ListGroup.Item>
              </Link>
              {/* <Link to="sentmessage">
                <ListGroup.Item className="m-1 " onClick={sendmailcartHandler}>
                  SendMail
                </ListGroup.Item>
              </Link> */}
              <Link to="sentmessage">
                <ListGroup.Item
                  className="m-1"
                  action
                  onClick={sendmailcartHandler}
                >
                  SentMail
                </ListGroup.Item>
              </Link>
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
                element={<SentMessageView />}
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
