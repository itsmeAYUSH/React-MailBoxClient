import React from "react";
import { Button, Card } from "react-bootstrap";
import CloseButton from "react-bootstrap";

const MessageView = (props) => {
  return (
    <React.Fragment>
      <Card className="mt-3">
        <Card.Header>
          <h3>some subject</h3>
        </Card.Header>
        <Card.Body>
          <p className="mb-5">
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button>Reply</Button>
        </Card.Footer>
      </Card>
    </React.Fragment>
  );
};

export default MessageView;