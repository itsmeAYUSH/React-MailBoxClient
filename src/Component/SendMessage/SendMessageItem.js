import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MailSliceAction } from "../../Store/MailSlice";
// import { UpdateList } from "../../Store/Mail-thunk";
import Button from "react-bootstrap/Button";

// import { DeleteMail } from "../../Store/Mail-thunk";
import { Link } from "react-router-dom";

import { MymailSliceAction } from "../../Store/MymailSlice";

const SentMessageItem = (props) => {
  const Dispatch = useDispatch();
  const sentItems = useSelector((state) => state.mymail.sentItem);
  // console.log(props);
  //   console.log(Items);
  console.log("deatails/", props);
  let Readreceipt;
  if (!props.readreceipt) {
    Readreceipt = "readreceipt";
  }
  const ListItemHandler = () => {
    Dispatch(MymailSliceAction.addMessageViewinfo(props));
  };
  const deleteHandler = () => {
    console.log("sendmeeage page");
    let oldarry = sentItems;
    let sentItem = oldarry.filter((item) => item.id !== props.id);

    Dispatch(MymailSliceAction.updateSendItem(sentItem));
    // console.log(props.id);
  };
  return (
    <>
      <ListGroup.Item
        id={props.id}
        className="m-.3 "
        variant="primary"
        key={props.id}
      >
        <Container>
          <Row>
            <Col className="pb-3">
              <div className="readreceiptbox" onClick={ListItemHandler}>
                <Link to="sentmailview">{props.email}</Link>
              </div>
            </Col>

            <Col md={1} style={{ height: "20px" }}>
              <Button variant="secondary" onClick={deleteHandler}>
                delete
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </>
  );
};
export default SentMessageItem;
