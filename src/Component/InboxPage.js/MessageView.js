import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MessageView = (props) => {
  let messageView = useSelector((state) => state.mail.messageView);

  const navigate = useNavigate();
  console.log(messageView, " mymailmessageView");
  const replybuttonHandler = () => {
    navigate("/main/text-edit");
  };
  return (
    <React.Fragment>
      <Card className="mt-3">
        <Card.Header>
          <h3>{messageView.subject}</h3>
        </Card.Header>
        <Card.Body>
          <p className="mb-5">{messageView.text}</p>
        </Card.Body>
        <Card.Footer>
          <h6>{messageView.email}</h6>
          <Button onClick={replybuttonHandler}>Reply</Button>
        </Card.Footer>
      </Card>
    </React.Fragment>
  );
};

export default MessageView;
